import React from 'react';
import { Card, Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import GradientButton from './GradientButton';

const ProductName = styled('h2')({});

const CostContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row no-wrap',
  justifyContent: 'space-between',
});

const Cost = styled('p')({ '&:before': { content: '"$"' }, alignSelf: 'flex-end' });

const AmountContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row no-wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const Quantity = styled('p')({ margin: '0 8px' });

const QuantityWithControls = ({ handleAddToCart, handleRemoveFromCard, quantity }) => (
  <AmountContainer>
    <Button onClick={handleRemoveFromCard}>−</Button>
    <Quantity>{quantity}</Quantity>
    <Button onClick={handleAddToCart}>+</Button>
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

const Item = ({
  handleAddToCart, handleRemoveFromCard, product, quantity, price,
}) => (
  <ItemCard>
    <ProductName>{product}</ProductName>
    <CostContainer>
      <QuantityWithControls
        handleAddToCart={handleAddToCart}
        handleRemoveFromCard={handleRemoveFromCard}
        quantity={quantity}
      />
      <Cost>{price * quantity}</Cost>
    </CostContainer>
  </ItemCard>
);

export default Item;
