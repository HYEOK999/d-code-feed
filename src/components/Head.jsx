import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ keywords, description, title, favicon }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={favicon} />
      <meta property="og:site_name" content="디코드(d.code) 패션 셀렉트샵" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};
export default Head;
