import React from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions';
import GradientButton from '../components/GradientButton';
import Header1 from '../components/Header1';
import { getTotal, getAddedItems } from '../reducers';
import Item from '../components/CartItem';

const CenteredContainer = styled(Container)({
  padding: '6em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const ItemsContainer = styled('div')({ display: 'flex', flexFlow: 'column' });

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

const TotalCost = ({ total }) => (
  <TotalCostContainer>
    <TotalCostLabel>Total cost:</TotalCostLabel>
    <TotalCostNumber>{total}</TotalCostNumber>
  </TotalCostContainer>
);

const Cart = ({
  ids, quantityById, addToCart, removeFromCart, total, items,
}) => (
  <CenteredContainer>
    <Header1>Cart</Header1>
    <ItemsContainer>
      {items.map(i => (
        <Item
          {...i}
          quantity={quantityById[i.id]}
          key={i.id}
          handleAddToCart={() => addToCart(i.id)}
          handleRemoveFromCard={() => removeFromCart(i.id)}
        />
      ))}
    </ItemsContainer>
    <TotalCost total={total} />
    <GradientButton>Checkout</GradientButton>
  </CenteredContainer>
);

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    items: getAddedItems(state),
    ids: cart.addedIds,
    quantityById: cart.quantityById,
    total: getTotal(state),
  };
};

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart },
)(Cart);
