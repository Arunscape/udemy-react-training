import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostsIndex from './components/postindex'
import NewPost from './components/newpost'
import promise from 'redux-promise'
import showPost from './components/showpost'

// import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );


// class Hello extends React.Component {
//   render() {
//     return <div> Hello! </div>
//   }
// }
// class Bye extends React.Component {
//   render() {
//     return <div> Byeee </div>
//   }
// }

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//       <BrowserRouter>
//         <div>
//           Header - This doesn't change
//           <Route path="/hello" component={Hello}/>
//           <Route path="/bye" component={Bye}/>
//         </div>
//       </BrowserRouter>
//
//   </Provider>, document.querySelector( '.container' ) );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/posts/:id" component={showPost}/>
            <Route path="/new" component={NewPost}/>
            <Route path="/" component={PostsIndex}/>
          </Switch>
        </div>
      </BrowserRouter>

  </Provider>, document.querySelector( '.container' ) );