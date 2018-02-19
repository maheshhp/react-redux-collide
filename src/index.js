import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Reducer from './redux/reducers';
import Button from './components/Button';
import Label from './components/Label';
import { increment } from './redux/actions';
import './index.css';

const App = props => (
  <Provider store={Store(Reducer)}>
    <div >
      <br />
      <Label />
      <br />
      <Button />
    </div>
  </Provider>
);


const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();
