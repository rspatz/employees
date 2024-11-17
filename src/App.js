import { Component } from 'react';

import Cardlist from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      employees = [],
      searchField: '',
    };
    console.log('constructor');
  }
}

function App() {
  return <div className='App'></div>;
}

export default App;
