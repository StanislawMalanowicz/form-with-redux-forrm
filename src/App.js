import React, { Component } from 'react';
import './App.css';
import ContactForm from './app/components/PersonalForm';
// import store from './store';

class App extends Component {
  
  render() { 
    // console.log('store: ', store.subscribe(() =>{
    //   return store.getState()
    // }));
    return (
      <div className="App">
        <ContactForm  />
      </div>
    );
  }
}
 
export default App;

// export default App;



