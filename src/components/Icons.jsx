import React from 'react';
import { faSearch, faShoppingCart, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCommentAlt, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
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

export function AppStoreIcon() {
  return <FontAwesomeIcon icon={faApple} />;
}

export function PlayStoreIcon() {
  return <FontAwesomeIcon icon={faGooglePlay} />;
}

export function ReplyCommentIcon() {
  return <FontAwesomeIcon icon={faAngleRight} />;
}
