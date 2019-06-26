import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GradientButton from '../components/GradientButton';
import products from '../assets/products.json';

// const products = JSON.parse(productsRaw);

const Header = styled('div')({
  width: '100%',
  display: 'flex',
  flexFlow: 'no-wrap',
  justifyContent: 'space-between',
});

const ShopName = styled('h1')({});

const Shelf = styled(GridList)({ width: '100%' });

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
  id, product, description, price,
}) => (
  <ItemCard>
    <CardTopHalfContainer>
      <ProductName>{product}</ProductName>
      <Description>{description}</Description>
    </CardTopHalfContainer>
    <CardBottomHalfContainer>
      <Price>{price}</Price>
      <AddButton>Buy</AddButton>
    </CardBottomHalfContainer>
  </ItemCard>
);

const Cart = items => <div>Cart</div>;

export default () => (
  <>
    <Header>
      <ShopName>SHOP</ShopName>
      <Cart />
    </Header>
    <Shelf cols={2} spacing={4} cellHeight={420}>
      {products.map(p => (
        <GridCard cols={1}>
          <Item {...p} />
        </GridCard>
      ))}
    </Shelf>
  </>
);
