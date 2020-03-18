import React from 'react';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SearchIcon() {
  return <FontAwesomeIcon icon={faSearch} />;
}

export function ShoppingCartIcon() {
  return <FontAwesomeIcon icon={faShoppingCart} />;
}
