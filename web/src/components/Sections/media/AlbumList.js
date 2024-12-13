import React from 'react'
import { Card,GridColumn,CardHeader,CardContent,Image} from 'semantic-ui-react'
import './album_list.css'
function AlbumList({props}) {

  return (
    <>
    <GridColumn >
        <Card link className='album_card' onClick={()=> window.open("/albumPlaylist", "_blank")}>
            <Image
                wrapped
                ui={false}
                size='small'
                src={props.album_art}
                className='album_image'
                />
            <CardContent>
            <CardHeader className='album_header'>{props.title}</CardHeader>
            </CardContent>
        </Card>
    </GridColumn>
    </>
  )
}

export default AlbumList