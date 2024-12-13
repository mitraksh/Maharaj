import React, { useState, useRef } from 'react';
import aud from '../../../audio/terranigma_crysta.mp3'
const MusicPlayer = () => {
  const [tracks] = useState([
    { id: 1, title: 'Track 1', url: aud },
    { id: 2, title: 'Track 2', url: aud },
    { id: 3, title: 'Track 3', url: aud },
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const audioRef = useRef(new Audio());

  const playTrack = (index) => {
    if (currentTrackIndex === index) {
      // If the same track is clicked, toggle play/pause
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      // Load and play the new track
      audioRef.current.pause();
      audioRef.current = new Audio(tracks[index].url);
      audioRef.current.play();
      setCurrentTrackIndex(index);
    }
  };

  const handleTrackEnd = () => {
    setCurrentTrackIndex(null);
  };

  // Attach event listener for track end
  audioRef.current.addEventListener('ended', handleTrackEnd);

  return (
    <div>
      <h1>Music Player</h1>
      <ul>
        {tracks.map((track, index) => (
          <li key={track.id}>
            {track.title}
            <button onClick={() => playTrack(index)}>
              {currentTrackIndex === index && !audioRef.current.paused ? 'Pause' : 'Play'}
            </button>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;