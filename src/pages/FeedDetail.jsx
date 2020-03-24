import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import FeedDetailContainer from '../containers/FeedDetailContainer';
import withFeed from '../hocs/withFeed';
import Footer from '../components/Footer';

const FeedDetail = ({ feedId }) => {
  return (
    <>
      <Head
        keywords="d.code, Feed"
        description="최신 패션 뉴스를 전해드립니다."
        title="디코드(d.code) 패션 셀렉트샵"
        favicon="/static/favicon.ico"
      />
      <Header />
      <FeedDetailContainer feedId={feedId} />
      <Footer />
    </>
  );
};

export default withFeed(FeedDetail);
