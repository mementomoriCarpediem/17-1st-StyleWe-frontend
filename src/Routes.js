import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signin from './Pages/Sign_in_up/signin';
import Signup from './Pages/Sign_in_up/signup';
import Signuplast from './Pages/Sign_in_up/signuplast';
import CommunityMain from './Pages/Community_Main/CommnunityMain';
import UploadContent from './Pages/Community_Main/Uploadcontent';
import FeedDetail from './Pages/Community_Main/FeedDetail';
import ProductDetailPage from './Pages/Store_Main/ProductDetailPage/ProductDetailPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signuplast" component={Signuplast} />
          <Route exact path="/" component={CommunityMain} />
          <Route exact path="/feed" component={FeedDetail} />
          {/* <Route exact path="/feed/:id" component={FeedDetail} /> */}
          <Route exact path="/upload" component={UploadContent} />
          <Route exact path="/product" component={ProductDetailPage} />
          <Route exact path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
