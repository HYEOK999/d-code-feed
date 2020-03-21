import React from 'react';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCommentAlt, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SearchIcon() {
  return <FontAwesomeIcon icon={faSearch} size="lg" />;
}

export function ShoppingCartIcon() {
  return <FontAwesomeIcon icon={faShoppingCart} size="lg" />;
}

export function HeartIcon() {
  return <FontAwesomeIcon icon={faHeart} />;
}

export function CommentAltIcon() {
  return <FontAwesomeIcon icon={faCommentAlt} />;
}

export function LinkIcon() {
  return <FontAwesomeIcon icon={faShareSquare} />;
}

export function FacebookIcon() {
  return <FontAwesomeIcon icon={faFacebook} />;
}
