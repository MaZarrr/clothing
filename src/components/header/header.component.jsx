import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
console.log(hidden)
return (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Магазин
      </Link>
      <Link className='option' to='/shop'>
        Контакты
      </Link>
      {
        currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>Выйти</div>
        ) : (
        <Link className="option" to='/signin'>Войти</Link>
      )}
      <CartIcon />
    </div>
    {
      hidden ? null :
      <CartDropdown />
    }
  
  </div>
);
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);
