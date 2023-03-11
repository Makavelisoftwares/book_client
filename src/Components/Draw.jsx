import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import {HouseRounded,CreateOutlined} from "@mui/icons-material"
import { List, ListItem, ListItemIcon } from '@mui/material'
import {useLocation, useNavigate, useParams} from "react-router-dom"

function Draw() {

    const [isActive, setActive] = useState(false);
    const menuList=[
        {
            path:"/",
            pathname:"Home",
            pathicon:<HouseRounded/>
        },
        {
            path:"/create",
            pathname:"Create",
            pathicon:<CreateOutlined/>
        },
    ]
    
    const location=useLocation().pathname;
    const navigate=useNavigate()
   

    return (
        <div>
            <Drawer 
                variant="permanent" 
                PaperProps={{
                    sx:{
                        width:"70px"
                    }
                }}
                style={{width:"70px",overflow:"hidden"}}
                anchor="left">
                
                <List>
                    {menuList.map(menu=>(
                        <ListItem button 
                            key={menu.pathname}
                            onClick={()=>navigate(menu.path)}
                            className={location===menu.path ? 'active':null}
                            >
                            <ListItemIcon>{menu.pathicon}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>


            </Drawer>
        </div>
    )
}

export default Draw