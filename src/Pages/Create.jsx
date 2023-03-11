import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckCircleOutline } from '@mui/icons-material';

function Create() {
  const [image,setimage]=useState('');
  const [description,setdescription]=useState('');
  const [author,setauthor]=useState('');
  const [success,setsuccess]=useState('');

  const handleSubmit=async(e)=>{
    try {
      e.preventDefault();
      const formData=new FormData();
      formData.append('image',image);
      formData.append('author',author)
      formData.append('description',description)

      const {data}=await axios.post('http://localhost:8080/book',formData);
      console.log(data)
      setsuccess(toast('Book Successfully Uploaded'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {success&&<ToastContainer icon={<CheckCircleOutline/>} theme='dark'/>}
      <form >
        <Typography variant='h3'>Upload A Book</Typography>
        <TextField
          id=""
          label="Author"
          value={author}
          onChange={(e)=>setauthor(e.target.value)}
          fullWidth
          style={{margin:"20px 0"}}
        />

        <TextField
          multiline
          rows={5}
          id=""
          label="Description"
          value={description}
          onChange={(e)=>setdescription(e.target.value)}
          style={{margin:"20px 0"}}
          fullWidth
        />

        <TextField 
        type='file'
        style={{margin:"20px 0"}}
        onChange={(e)=>setimage(e.target.files[0])}
        fullWidth
        />
        <br /><br/>

        <Button variant='outlined' fullWidth onClick={handleSubmit}>Upload</Button>

      </form>
    </div>
  )
}

export default Create