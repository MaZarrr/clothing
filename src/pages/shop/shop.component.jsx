import React from 'react';
import { Route, withRouter } from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overviews/collections-overviews.component'
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
	console.log(match)
    return (
      <div className='shop-page'>
       <Route exact path={`${match.path}`}> <CollectionsOverview /></Route>
       <Route path={`${match.path}/:collectionId`}> <CollectionPage /> </Route>
       </div>
     )
  }

export default withRouter(ShopPage);