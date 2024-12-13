import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Sections/Home'
import Lectures from './components/Sections/Lectures'
import Events from './components/Sections/Events'
import Blogs from './components/Sections/Blogs'
import Support from './components/Sections/Support'
import AlbumPlaylist from './components/Sections/media/AlbumPlaylist';
import UploadPhotos from './components/Sections/UploadPhotos';
function App() {
  return (

     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/lectures" element={<Lectures/>}/>
     <Route path="/events" element={<Events/>}/>
     <Route path="/blogs" element={<Blogs/>}/>
     <Route path="/supportus" element={<Support/>}/>
     <Route path="/albumPlaylist" element={<AlbumPlaylist/>}/>
     <Route path="/upload" element={<UploadPhotos/>}/>
     </Routes>

  );
}

export default App;
