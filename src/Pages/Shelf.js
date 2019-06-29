import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { addToCart, removeFromCart, selectPage } from '../actions';
import { getTotalNumber } from '../reducers';
import GradientButton from '../components/GradientButton';
import CartIcon from '../components/CartIcon';

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

const SelectorContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
});

const PageLabel = styled(Button)({});

const PagesSelector = ({ pagesIndexes, currentPage, selectPage }) => (
  <SelectorContainer>
    {pagesIndexes.map((p, i) => (
      <PageLabel size="small" disabled={currentPage === i} onClick={() => selectPage(p)}>
        {p + 1}
      </PageLabel>
    ))}
  </SelectorContainer>
);

const Shelf = ({
  currentPage, pages, addToCart, itemsInCart, pagesIndexes, selectPage,
}) => (
  <>
    <Header>
      <ShopName>SHOP</ShopName>
      <CartIcon itemsInCart={itemsInCart} />
    </Header>
    <ShelfContainer cols={2} spacing={4} cellHeight={420}>
      {pages[currentPage].map(p => (
        <GridCard cols={1} key={p.id}>
          <Item {...p} handleAddToCart={() => addToCart(p.id)} />
        </GridCard>
      ))}
      <PagesSelector
        pagesIndexes={pagesIndexes}
        currentPage={currentPage}
        selectPage={selectPage}
      />
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
  { addToCart, removeFromCart, selectPage },
)(Shelf);
