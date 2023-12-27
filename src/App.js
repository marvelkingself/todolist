import React, { Component } from 'react';
import TodoCreate from './Components/TodoCreate';


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
          <h2 className="text-center fw-bold py-1 fs-1 text-light bg-secondary  bg-opacity-75" >To Do List</h2>
          <TodoCreate></TodoCreate>
        </div>
    
    );
  }
}
