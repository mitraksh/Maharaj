import {React,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import './lectures.css'
import 'semantic-ui-css/semantic.min.css';
import { Divider,BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
  Icon,
  MenuItem, Menu, Segment } from 'semantic-ui-react'
import Audio from './media/Audio'
import Video from './media/Video';
import Photos from './media/Photos';
import Mp from './media/Mp'
function Lectures() {
  const [tab,setTab] = useState({name:"audio",active:false});
  const handleItemClick = (e,name) => {setTab(name)}
  const renderTab = () => {
    if(tab.name === 'audio'){
      return (
       <Audio></Audio>
      )
    }else if(tab.name === 'video'){
      return (
        <Video></Video>
      )
    }else if(tab.name === 'photos'){
        return (
        <Photos></Photos>
        )
  }
} 
  return (
    <>
    <Navbar props={'lectures'}></Navbar>
        <section className='container section section__height'>
      
        <Menu pointing secondary widths={3}>
          <MenuItem
            name='audio'
            active={tab.name === 'audio'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='video'
            active={tab.name === 'video'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='photos'
            active={tab.name === 'photos'}
            onClick={handleItemClick}
          />
        </Menu>

          {renderTab()}
          
        </section>
    </>
  )
}

export default Lectures