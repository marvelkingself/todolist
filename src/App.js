import React, { Component } from 'react';
import TodoCreate from './Components/TodoCreate';
import Header from './Components/Header';


export default class App extends Component {
  render() {
    return (
      
        <div
          className="bg-img bg-cover  "
          style={{
            backgroundImage:
              "url('https://www.patternpictures.com/wp-content/uploads/White-brick-wall-background-texture-PhotosPublic4419FD-768x481.jpg')",
            minHeight:'100vh',
            height: '100%',
            width: '100%',
            
          }}
        >
          <Header/>
          <TodoCreate></TodoCreate>
        </div>
    
    );
  }
}
