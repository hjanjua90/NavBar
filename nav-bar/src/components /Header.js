import React,{useState} from 'react';
import {AppBar, Toolbar, Typography, Tabs, Tab, Button, useMediaQuery, useTheme} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from './DrawerComp';
const PAGES = ["Product", "Services", "About","Contact Us" ]
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch)
    return (
        <>
        <AppBar sx={{background: '#063970' }}>
            <Toolbar>{
                isMatch ? (
                    <>
                    <Typography sx={{fontSize:'2rem', paddingLeft:'10%'}}>
                        Shop Shop
                        <ShoppingCartIcon/>
                    </Typography>
                    <DrawerComp/>
                    </>
                ): (
                    <>
                    <Tabs sx={{marginLeft:"auto"}} textColor="inherit" value={value}
                        onChange={(e, value)=> setValue(value)}
                        indicatorColor="secondary">
                            {
                                PAGES.map((page,index)=>(
                                    <Tab key={index} label={page}/>
                                ))
                            }
                    </Tabs>
                    <Button sx={{marginLeft: "auto"}} variant="contained">
                        Login
                    </Button>
                    <Button sx={{marginLeft: "10px"}}variant="contained">
                        Sign Up
                    </Button>
                </>
                )}
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header


