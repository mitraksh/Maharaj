import React from 'react'
import { Embed } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import './video.css'
function Video() {
  return (
    <>
    <div className='player-wrapper'>
    <ReactPlayer url='https://www.youtube.com/embed/snh5dQM1LoY'
    pip={true} 
    controls={true}
    width='100%'
    height='100%'
    className='react-player'
    />
    </div>
    <br/>
    <div className='player-wrapper'>
     <ReactPlayer url='https://www.youtube.com/embed/snh5dQM1LoY'
    pip={true} 
    controls={true}
    width='100%'
    height='100%'
    className='react-player'
    />
    </div>

    <br/>
    <div className='player-wrapper'>
     <ReactPlayer url='https://www.youtube.com/embed/snh5dQM1LoY'
    pip={true} 
    controls={true}
    width='100%'
    height='100%'
    className='react-player'
    />
    </div>

    </>
  )
}

export default Video