import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { addToCart, removeFromCart } from '../actions';
import { getTotalNumber } from '../reducers';
import GradientButton from '../components/GradientButton';
import cartIcon from '../assets/cartIcon.png';

// const products = JSON.parse(productsRaw);

const Header = styled('div')({
  width: '100%',
  display: 'flex',
  flexFlow: 'no-wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ShopName = styled('h1')({});

const ShelfContainer = styled(GridList)({ width: '100%' });

const ItemCard = styled(Card)({
  margin: '4px',
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90%',
});

const AddButton = styled(GradientButton)({ flexShrink: 0 });

const ProductName = styled('h2')({});

const Description = styled('p')({});

const CardTopHalfContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const CardBottomHalfContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const Price = styled('p')({ '&:before': { content: '"$"' }, alignSelf: 'flex-end' });

const GridCard = styled(GridListTile)({});

const Item = ({
  product, description, price, handleAddToCart,
}) => (
  <ItemCard>
    <CardTopHalfContainer>
      <ProductName>{product}</ProductName>
      <Description>{description}</Description>
    </CardTopHalfContainer>
    <CardBottomHalfContainer>
      <Price>{price}</Price>
      <AddButton onClick={handleAddToCart}>Buy</AddButton>
    </CardBottomHalfContainer>
  </ItemCard>
);

const CartContainer = styled('div')({ display: 'flex', position: 'relative' });

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

const Cart = ({ itemsInCart }) => (
  <CartContainer>
    <CartIcon src={cartIcon} />
    <ItemsInCart>{itemsInCart}</ItemsInCart>
  </CartContainer>
);

const Shelf = ({
  currentPage, pages, addToCart, itemsInCart,
}) => (
  <>
    <Header>
      <ShopName>SHOP</ShopName>
      <Cart itemsInCart={itemsInCart} />
    </Header>
    <ShelfContainer cols={2} spacing={4} cellHeight={420}>
      {pages[currentPage].map(p => (
        <GridCard cols={1} key={p.id}>
          <Item {...p} handleAddToCart={() => addToCart(p.id)} />
        </GridCard>
      ))}
    </ShelfContainer>
  </>
);

const mapStateToProps = ({ products, cart }) => ({
  currentPage: products.currentPage,
  pagesIndexes: products.pagesIndexes,
  pages: products.pages,
  itemsInCart: getTotalNumber({ products, cart }),
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart },
)(Shelf);
