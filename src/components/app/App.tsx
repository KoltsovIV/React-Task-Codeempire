import React from 'react';
import './App.scss';
import Header from "../header/header";
import Categories from "../catagories/categories";
import MessageField from "../message-field/message-field";

function App() {
  return (
    <div className="App">
        <Header/>
        <Categories/>
        <MessageField/>
    </div>
  );
}

export default App;
