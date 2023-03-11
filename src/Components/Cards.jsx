import { Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import moment from "moment"
import {DeleteOutlineOutlined, ExpandMore} from "@mui/icons-material"

function Cards({book,handleDelete}) {


  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {book.author[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={()=>handleDelete(book.id)} aria-label="settings">
            < DeleteOutlineOutlined color='secondary' />
          </IconButton>
        }
        title={book.author}
        subheader={`Posted ${moment(book.createdAt).fromNow()}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={'http://127.0.0.1:8080/'+book.image.split('\\')[1]+"/"+book.image.split('\\')[2]}
        alt={book.author}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>{book.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default Cards