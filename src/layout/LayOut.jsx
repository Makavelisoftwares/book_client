import { Container } from '@mui/system'
import React from 'react'
import Draw from '../Components/Draw'

function LayOut({children}) {
  return (
    <div style={{display:'flex'}}>
        {/* Drawer */}
        <div>
            <Draw/>
        </div>
        

        {/* Content */}
        <Container style={{width:'calc(100% - 70px)',margin:"20px 0"}}>
            {children}
        </Container>
        
    </div>
  )
}

export default LayOut