import React from 'react';

import './App.css';

import Header from '../Header';
import PeopleList from '../PeopleList';

const App = () => (
  <div className="people-app">
    <Header />
    <PeopleList />
  </div>
);

export default App;
