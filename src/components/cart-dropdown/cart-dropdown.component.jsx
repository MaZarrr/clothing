import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'/>
    
    <CustomButton>К оформлению</CustomButton>

    </div>
);

// const mapStateToProps = () => ({
//   cartItems: selectCartItems
// });

export default CartDropdown;
// export default withRouter(connect(mapStateToProps)(CartDropdown));