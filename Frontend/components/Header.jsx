import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="fixed inset-x-0 z-50 h-20 flex items-center justify-between shadow-md bg-white">
      <div className="container-wrapper flex justify-between items-center">

        <Link href="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <img className="w-[30px]" src="./images/logo.png" alt="logo" />
            <h1 className="sm:hidden text-2xl font-black text-primary">Resto.</h1>
          </div>
        </Link>
  
        <nav className={menuActive ? "nav nav_active" :"nav"}>
          <Link href='/'>
            <a className="nav-link">Home</a>
          </Link>
          <Link href='/dishes'>
            <a className="nav-link">Dishes</a>
          </Link>
          <Link href='/about'>
            <a className="nav-link">About</a>
          </Link>
          <Link href='/bookings'>
            <a className="nav-link">Bookings</a>
          </Link>
          <Link href='/review'>
            <a className="nav-link">Review</a>
          </Link>
          <Link href='/bookTable'>
            <a className="nav-link">Book Table</a>
          </Link>
        </nav>
  
        <div className="flex gap-2">
          <div 
            className="header-icon hidden md:block"
            onClick={() => setMenuActive(!menuActive)}>
            { menuActive ? <CloseIcon /> : <MenuIcon/> }
          </div>
          <div className="header-icon">
            <SearchIcon />
          </div>
          <div className="header-icon">
            <FavoriteIcon />
          </div>
          <Link href="/cart" >
            <div className="relative">
              <div className="header-icon">
                <ShoppingCartIcon/>
              </div>
              {
                totalQuantity > 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-400 flex item-center justify-center">
                    <span className="text-white">{totalQuantity}</span>
                  </div>
                )
              }
            </div>
          </Link>
        </div>

      </div>
    </header>
  )
}
