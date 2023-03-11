import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Grid, Typography } from '@mui/material'
import Cards from '../Components/Cards'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteOutlineOutlined } from '@mui/icons-material'

function Home() {
  const [books,setBooks]=useState([]);
  const [deleted,setDeleted]=useState('');



  // fetching all books from backend
  useEffect(()=>{
    const fetchBooks=async()=>{
      try {
        const response=await axios.get('http://localhost:8080/books')
        setBooks(response.data.rows)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBooks()
  },[])


  // Handling Delete
  const handleDelete=async(id)=>{
    try {
      const response=await axios.delete('http://localhost:8080/book/'+id);
      console.log(response)
      setBooks(books.filter(bk=>bk.id!=id))
      setDeleted(toast('Book Deleted Successfully'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <div className="search"></div>
        {deleted&&<ToastContainer icon={<DeleteOutlineOutlined/>} theme='dark'/>}
        {books.length==0?
          <Typography variant="h3" color="textSecondary">No Book Uploaded</Typography>
          :
          <Grid spacing={3} container>
          {books.map(book=>(
            <Grid xs={12} sm={6} md={4} lg={3} xl={3} item key={book.id}>
              <Cards book={book} handleDelete={handleDelete}/>
            </Grid>
          ))}
            
        </Grid>
        }
        
    </div>
  )
}

export default Home