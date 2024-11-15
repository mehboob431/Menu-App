
"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, MenuList } from '@mui/material';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { LuHistory } from "react-icons/lu";
import { MdHome, MdMenuBook, MdBuild, MdInfo, MdMail, MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import OrderCard from './ordercard';
import OrderHistoryCard from './orderHistory';
import { useCart } from '../context/cartContext';
import axios from 'axios';
import globalConstantUtil from '../globalConstantUtils'
const pages = [
  { label: 'Menu', icon: <MdMenuBook />, href: '/menu' },
  { label: 'Contact Us', icon: <MdMail />, href: '/contact' }

];

function ResponsiveAppBar() {
  const { getCartItemCount, } = useCart();
  const itemCount = getCartItemCount();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsMenuOpen(false);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const [isOrderOpen, setIsOrderOpen] = React.useState(false);

  const openOrderDialog = () => {
    setIsOrderOpen(true);
  };

  const closeOrderDialog = () => {
    setIsOrderOpen(false);
  };
  const [orderCount, setOrderCount] = React.useState(0)
  const getOrder = async () => {
    const res = await axios.get(globalConstantUtil.baseUrl + '/orders/get-orders');
    // console.log('res.data', res.data)
    const localStorageOrders = JSON.parse(localStorage.getItem('orders')) || [];
    // console.log('localStorageOrders.data', localStorageOrders)
    const matchedOrders = res.data.filter((order) => localStorageOrders.includes(order._id));
    // console.log('matchedOrders.data', matchedOrders)
    setOrderCount(matchedOrders.length);

  }

  if (typeof window !== 'undefined') {
    const localStorageOrders = JSON.parse(localStorage.getItem('orders')) || [];

    React.useEffect(() => {
      getOrder()
    }, [localStorageOrders])
  }
  return (
    <div className='relative'>
      <div className='navbar'>
        {/* Background image with overlay */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'white',
            opacity: 0.8,
            padding: 1,
            boxShadow: 'none'
          }}
        >

          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box className="lg:hidden w-full">
              <IconButton aria-label="menu" onClick={handleOpenNavMenu} className="text-black">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={isMenuOpen}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  style: {
                    background: 'transparent', // Set background to transparent
                    boxShadow: 'none', // Remove default box shadow
                  },
                }}
              >
                <MenuList className='bg-black bg-opacity-80'>
                  {pages.map((page, index) => (
                    <Link key={index} href={page.href} passHref>
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Change background color on hover
                          },
                          '&:focus': {
                            outline: 'none',
                            boxShadow: 'none', // Remove box shadow on focus
                          },
                        }}
                      >
                        {page.icon}
                        <span className="ml-2">{page.label}</span>
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </Menu>
            </Box>
            <Box className='w-full' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

              <Link href={"/"} className="justify-center">
                <img
                  width={"150px"}
                  height={'150px'}
                  src="/logo-png2.png"
                  alt="Shahi Dewan"
                />
              </Link>
            </Box>
            <Box className='w-full' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {pages.map((page, index) => (
                  <Link key={index} href={page.href} passHref>
                    <Button
                      sx={{
                        color: 'black',
                        mx: 1,
                        display: ['none', 'none', 'block'],
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Change background color on hover
                        },
                        '&:focus': {
                          outline: 'none',
                          boxShadow: 'none', // Remove box shadow on focus
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <div className="relative">
                  <MdOutlineShoppingCart className='h-6 w-6 text-black' onClick={openDialog} />
                  {itemCount > 0 && (
                    <span className="absolute h-4 w-4 -top-2 -right-0.5 bg-red-300 text-black rounded-full justify-center items-center text-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </div>
                <LuHistory className='h-5 w-5 text-black' onClick={openOrderDialog} />
                <div className="relative">
                  {orderCount > 0 && (
                    <span className="count absolute h-4 w-4 -top-[20px] -right-0.5 bg-red-300 text-black rounded-full justify-center items-center text-center text-xs  mr-[14px]">
                      {orderCount}
                    </span>
                  )}
                </div>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </div>

      {
        isOpen && (
          <div className="fixed inset-0 flex justify-center items-start bg-opacity-50 bg-black z-50">
            <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 h-3/4 left-0 top-20 z-50 rounded-lg shadow-lg overflow-y-auto relative">

              <div className="flex justify-end">
                <button onClick={closeDialog} className="text-black px-2 py-2">
                  <RxCross2 />
                </button>
              </div>
              <div>
                <OrderCard closeOrderDialog={closeDialog} />
              </div>
            </div>
          </div>
        )
      }
      {
        isOrderOpen && (
          <div className="fixed inset-0 flex justify-center items-start bg-opacity-50 bg-black z-50">
            <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 left-0 top-20 z-50 rounded-lg shadow-lg overflow-y-auto relative">

              <div className="flex justify-end">
                <button onClick={closeOrderDialog} className="text-black px-2 py-2">
                  <RxCross2 />
                </button>
              </div>
              <div>
                <OrderHistoryCard closeOrderDialog={closeOrderDialog} />
              </div>
            </div>
          </div>
        )
      }

    </div >
  );
}

export default ResponsiveAppBar;
