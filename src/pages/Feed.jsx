import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import FeedListContainer from '../containers/FeedListContainer';
import Footer from '../components/Footer';

const Feed = () => {
  return (
    <>
      <Head
        keywords="d.code, Feed"
        description="최신 패션 뉴스를 전해드립니다."
        title="디코드(d.code) 패션 셀렉트샵"
        favicon="/static/favicon.ico"
      />
      <Header />
      <FeedListContainer />
      <Footer />
    </>
  );
};

export default Feed;
