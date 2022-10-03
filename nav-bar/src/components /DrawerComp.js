import React,{useState} from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ["Products", "Services", "About Us", "Contact Us", "Login", "Logout"];
const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer}
                onClose={()=>setOpenDrawer(false)}>
                <List>
                    {
                        pages.map((page, index) =>(
                            <ListItemButton onClick={()=>setOpenDrawer(false)} key = {index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))}
                </List>
            </Drawer>
            <IconButton
                onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default DrawerComp