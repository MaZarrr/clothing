import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import {
  addItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      
      <span className='price'>{price}₽</span>
    	<div className='remove-button' 
          // onClick={() => addItem(cartItem)}
          >
          &#10005;
        </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);