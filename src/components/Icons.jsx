import React from 'react';
import { faSearch, faShoppingCart, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCommentAlt, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faSearch} size="lg" />;
});

export const ShoppingCartIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faShoppingCart} size="lg" />;
});

export const HeartIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faHeart} />;
});

export const CommentAltIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faCommentAlt} />;
});

export const LinkIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faShareSquare} />;
});

export const FacebookIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faFacebook} />;
});

export const AppStoreIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faApple} />;
});

export const PlayStoreIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faGooglePlay} />;
});

export const ReplyCommentIcon = React.memo(() => {
  return <FontAwesomeIcon icon={faAngleRight} />;
});
