import React from 'react';
import { Container, Card } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions';
import GradientButton from '../components/GradientButton';
import Header1 from '../components/Header1';

const CenteredContainer = styled(Container)({
  padding: '6em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const ItemsContainer = styled('div')({ display: 'flex', flexFlow: 'column' });

const ProductName = styled('h2')({});

const CostContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row no-wrap',
  justifyContent: 'space-between',
});

const Cost = styled('p')({ '&:before': { content: '"$"' }, alignSelf: 'flex-end' });

const Sign = styled('span')({});

const AmountContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row no-wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const Amount = styled('p')({ margin: '0 8px' });

const AmountWithControls = ({ handleAddToCart, handleRemoveFromCard }) => (
  <AmountContainer>
    <Sign>−</Sign>
    <Amount>N</Amount>
    <Sign>+</Sign>
    <GradientButton onClick={handleRemoveFromCard}>Remove</GradientButton>
    <GradientButton onClick={handleAddToCart}>Add</GradientButton>
  </AmountContainer>
);

const ItemCard = styled(Card)({
  margin: '4px',
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90%',
});

const Item = ({ handleAddToCart, handleRemoveFromCard }) => (
  <ItemCard>
    <ProductName>Name</ProductName>
    <CostContainer>
      <AmountWithControls
        handleAddToCart={handleAddToCart}
        handleRemoveFromCard={handleRemoveFromCard}
      />
      <Cost>100</Cost>
    </CostContainer>
  </ItemCard>
);

const TotalCostContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '1.5em',
  padding: '1.5em 1em',
  borderTop: '1px solid black',
});

const TotalCostLabel = styled('h4')({ margin: '0 1.5em 0 0' });

const TotalCostNumber = styled('p')({ '&:before': { content: '"$"' }, alignSelf: 'flex-end' });

const TotalCost = () => (
  <TotalCostContainer>
    <TotalCostLabel>Total cost:</TotalCostLabel>
    <TotalCostNumber>100</TotalCostNumber>
  </TotalCostContainer>
);

const Cart = ({
  ids, quantityById, addToCart, removeFromCart,
}) => {
  console.log(ids, quantityById);
  return (
    <CenteredContainer>
      <Header1>Cart</Header1>
      <ItemsContainer>
        <Item
          handleAddToCart={() => addToCart(13)}
          handleRemoveFromCard={() => removeFromCart(13)}
        />
        {/* <Item />
        <Item /> */}
      </ItemsContainer>
      <TotalCost />
      <GradientButton>Checkout</GradientButton>
    </CenteredContainer>
  );
};

const mapStateToProps = ({ cart }) => ({
  ids: cart.addedIds,
  quantityById: cart.quantityById,
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart },
)(Cart);
