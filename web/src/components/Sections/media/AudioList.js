import React, { useState } from 'react'
import {
    ListItem,
    ListHeader,
    ListContent,
    List,
    Button,
    Icon,
    ButtonContent
  } from 'semantic-ui-react'
function AudioList({setList,playTrack,trackid}) {
    const [title,setTitle] = useState(setList.title);
    const trackId = setList.id
    const [playing,setPlaying] = useState(setList.play);
    const handlePlayPause = (e) => {playTrack(trackid)}

  return (
    <>
     <ListItem>
            <ListContent floated='left'>
            <Button animated onClick={handlePlayPause} style={{width: 62,height:36, color:"white",backgroundImage: `url(${setList.album_art})`}}>
            <ButtonContent visible>
                <Icon name='play' />
            </ButtonContent>
            <ButtonContent hidden>
                Play
            </ButtonContent>
            </Button>
            </ListContent>
            <ListContent floated='left'>
                <ListHeader>{setList.title}</ListHeader>
                {setList.desc}
            </ListContent>
        </ListItem>
        
    </>
  )
}

export default AudioList