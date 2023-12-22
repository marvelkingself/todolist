import React, { Component } from 'react';
import Addtodo from './Addtodo';

export default class TodoCreate extends Component {
  constructor() {
    super();
    this.state = {
      sdata: [
        {
          "Task": "Buy Vegetable",
          "Status": true,
        },
        {
          "Task": "Go to Gym",
          "Status": false,
        },
        {
          "Task": "Do Coding",
          "Status": true,
        },
        {
          "Task": "Do Anything",
          "Status": false,
        },
        {
          "Task": "Do Something",
          "Status": true,
        },
      ],
    };
  }

  handleclick = (index) => {
    this.setState((prevState) => {
      const updatedData = [...prevState.sdata];
      updatedData[index].Status = !updatedData[index].Status;
      return { sdata: updatedData };
    });
  };
  
  handleclicks=(data)=>{
console.log(data)
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center flex-column align-items-center '>
        <Addtodo onGet={this.handleclicks}/>
          <h3> Task List:-</h3>
          {this.state.sdata.map((data, i) => {
            return (
              <div className='width-col border col-8  d-flex justify-content-between align-items-center p-3' key={i}>
                <div className="checkbox-wrapper-15">
                  <input
                    className="inp-cbx"
                    id={`cbx-${i}`}
                    type="checkbox"
                    style={{ display: 'none' }}
                    defaultChecked={data.Status}
                    onChange={() => this.handleclick(i)}
                  />
                  <label className="cbx" htmlFor={`cbx-${i}`}>
                    <span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>
                    <span className='fs-5'>Task Name:- {data.Task}</span>
                  </label>
                </div>
                <h6>
                  <span className={`badge badge-secondary  ${data.Status ? "bg-success" : "bg-danger"} `}>
                    {data.Status ? "Completed" : "Incomplete"}
                  </span>
                </h6>
              </div>
            );
          })}
          
        </div>
      </div>
    );
  }
}
