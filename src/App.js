import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from './pages/Home';
import Feed from './pages/Feed';
import FeedDetail from './pages/FeedDetail';
import NotFound from './pages/NotFound';
import ErrorBoundary from 'react-error-boundary';
import { history } from './redux/create';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/feed/:feedId" component={FeedDetail} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default App;
