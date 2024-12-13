import React,{useState} from 'react'
import { Container, Header, Form, FormField, Button, Divider } from 'semantic-ui-react'
import axios, { all } from 'axios';
import Navbar from '../Navbar/Navbar'
import './uploadphotos.css'
function UploadPhotos() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }

const onSubmit = async (e) => {
    try {
    e.preventDefault();
    console.log(file)
    const formData = new FormData();
    formData.set('file', file);
    // formData.append('fileName', file.name);
    console.log(formData)

    const config = {
        headers: {
        'content-type': 'multipart/form-data',
        },
    };
    axios.get('http://localhost:8000/',formData).then((response) => {
        console.log(response.data);
    });
    //   if(res.status === 200 || res.data){
    //     await login(data.email);
    //     document.getElementById('login-successful').style.display = 'block';
    //     document.getElementById('login-failed').style.display = 'none';
    //     // setTimeout(()=>{navigate('/profiles')},2000)
    //   }
    } catch (error) {
        console.log(error)
    //   if(error.status === 500 || error.status === 400){
    //     document.getElementById('response-status').style.display = 'block';
    //     setTimeout(()=>{document.getElementById('response-status').style.display = 'none';},5000);
    //   }
    }
    
    
    }

  return (
    <>
<Navbar></Navbar>
<section className='container section section__height'>
<Container text >

    <Form onSubmit={onSubmit}>
        <FormField>
        <label>Upload Photo</label>
        <input type='file' onChange={(e)=>{handleChange(e)}} />
        </FormField>
        <FormField>
        <label>Photo Desccription</label>
        <input placeholder='Tell something good about your photo...' type='text'/>
        </FormField>
        <Button type='submit'>Submit</Button>
  </Form>
  </Container>
  </section>


    </>
  )
}

export default UploadPhotos