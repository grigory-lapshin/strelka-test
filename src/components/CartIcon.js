import React from 'react';
import { styled } from '@material-ui/core/styles';
import cartIcon from '../assets/cartIcon.png';

const Container = styled('div')({ display: 'flex', position: 'relative' });

const CartIcon = styled('img')({ width: 40, height: 40 });

const ItemsInCart = styled('div')({
  position: 'absolute',
  top: -10,
  right: -15,
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'red',
  fontSize: '16px',
  padding: '4px 8px',
  borderRadius: '20px',
});

export default ({ itemsInCart }) => (
  <Container>
    <CartIcon src={cartIcon} />
    <ItemsInCart>{itemsInCart}</ItemsInCart>
  </Container>
);
