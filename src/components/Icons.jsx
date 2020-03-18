import React from 'react';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SearchIcon() {
  return <FontAwesomeIcon icon={faSearch} size="lg" />;
}

export function ShoppingCartIcon() {
  return <FontAwesomeIcon icon={faShoppingCart} size="lg" />;
}
