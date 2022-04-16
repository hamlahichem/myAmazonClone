import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
  return (
    <div  className='Header'>
        
        <img className="Header__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' ></img> 
        <div className='Header__search'> 
          <input className="Header__searchInput"></input> 
          <SearchIcon className="Header__searchIcon" />
        </div>
        <div className='Header__nav'>
            <div className='Header__option'>
              <span className='Header__option__lineOne'>Hello guest</span>
              <span className='Header__option__lineTwo'>Sign In</span>

            </div>

            <div className='Header__option'>
              <span className='Header__option__lineOne'>Returns</span>
              <span className='Header__option__lineTwo'>& Orders</span>

            </div>

            <div className='Header__option'>
              <span className='Header__option__lineOne'>Your</span>
              <span className='Header__option__lineTwo'>Prime</span>

            </div>

            <div className='Header__option__basket'>
              <ShoppingBasketIcon/>
              <span className='Header__option__basketCount'>0</span>

            </div>
              
          
        </div>


        

        <hr></hr>

    </div>
  );
}

export default Header;