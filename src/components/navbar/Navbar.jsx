import React from 'react'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <div className='flex bg-[#FF6347] justify-between items-center p-4 px-10'>
            <h2 className='text-white text-xl font-semibold'>Clarusway's Personnel List App</h2>
            <div className='flex items-center'>
                <h2 className='text-white text-xl font-semibold '>Guest</h2>
                <div className='scale-150'>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{color:"white"}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>{
                  handleClose();
                  navigate("/")
                }}>Login</MenuItem>
                <MenuItem onClick={()=>{
                handleClose();
                navigate("/register")
                }}>Register</MenuItem>
              </Menu>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar