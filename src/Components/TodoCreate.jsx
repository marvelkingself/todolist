// TodoCreate.js

import React, { Component } from 'react';
import Addtodo from './Addtodo';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default class TodoCreate extends Component {
    constructor() {
        super();
        this.state = {
            foamvalidate: true,
            foamUpdate: false,
            foamSearch:true,
            filterData:[],
            sdata: [
                {
                    "Task": "Buy Vegetable",
                    "Status": false,
                },
                {
                    "Task": "Go to Gym",
                    "Status": false,
                },
                {
                    "Task": "Do Coding",
                    "Status": false,
                },
                {
                    "Task": "Do Anything",
                    "Status": false,
                },
                {
                    "Task": "Do Something",
                    "Status": false,
                },
            ],
        };
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleclicks = this.handleclicks.bind(this)
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSearch= this.handleSearch.bind(this)
        this.handleValue=this.handleValue.bind(this)
    }
    
        
  
    
    // for add data
    handleclicks(task) {
        console.log(task);
        if (task.trim() === "") {
            this.setState({ foamvalidate: false })
        }
        else {
            this.setState({
                sdata: [...this.state.sdata, { Task: task, Status: false }]

            })
            this.setState({ foamvalidate: true,foamSearch:true })
        }
    }
    // for Chnanging task status
    handleCheckboxClick(index) {
        const updatedData = [...this.state.sdata];
        updatedData[index].Status = !updatedData[index].Status;
        this.setState({ sdata: updatedData });
    };
    handleValue(e,i) {
        const updatedData = [...this.state.sdata];
        updatedData[i].Task = e.target.value;
        this.setState({ sdata: updatedData });

    }
    //for delete Task
    handleDelete(index) {
        if (this.state.sdata[index].Status) {
            const updatedData = [...this.state.sdata];
            updatedData.splice(index, 1);
            this.setState({ sdata: updatedData });
        }
        else if (window.confirm("Do you really want to Delete Incomplete Task?")) {
            const updatedData = [...this.state.sdata];
            updatedData.splice(index, 1);
            this.setState({ sdata: updatedData });
        }

    }
    // for sending props 
    handleUpdate(index) {
        const updatedData = {
            "Task": true,
            "Index": index
        }
        this.setState({ foamUpdate: updatedData })
        console.log(this.state.foamUpdate)
    }
    //  for recive state and update state
    handleSearch(task) {
        if(task.trim()===""){
           this.setState({foamSearch:true})
           console.log("blanck");
        }else{
         const filterDatas= this.state.sdata.filter((data)=>{
            if (data.Task.toLowerCase().indexOf(task.toLowerCase()) === -1) {
                return false;
              }
            else{
                return true
            }
        
        }) 
        this.setState({filterData:filterDatas,foamSearch:false})
           console.log(filterDatas);
    }
}

    handleSubmit = (event) => {
        
        event.preventDefault();
        this.setState({ foamUpdate: "", sdata: this.state.sdata})

    }
    
   

    

    render() {
        const dataToDisply=this.state.foamSearch ? this.state.sdata : this.state.filterData
       
        
        return (
            <div className='container-fluid' onLoad={this.handledata}>
                <div className='d-flex  flex-column align-items-center'>
                    <Addtodo onTask={this.handleclicks} onSearch={this.handleSearch} validate={this.state.foamvalidate} updateFoam={this.state.foamUpdate} data={this.state.sdata} />
                    <h3> Task List:-</h3>
                    {dataToDisply.length>0?dataToDisply.map((data, i) => {
                        return (
                            <div className='width-col border col-8 d-flex justify-content-between align-items-center p-3 border-dark bg-light text-dark  rounded bg-opacity-75 ' key={i}>
                                <div className="checkbox-wrapper-15 col-6 ">
                                    <input
                                        className="inp-cbx"
                                        id={`cbx-${i}`}
                                        type="checkbox"
                                        style={{ display: 'none' }}
                                        onChange={() => this.handleCheckboxClick(i)}
                                        checked={data.Status}
                                    />
                                    <label className="cbx d-flex align-items-center p-1 " htmlFor={`cbx-${i}`}>
                                        <span>
                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                <polyline points="1 5 4 8 11 1"></polyline>
                                            </svg>
                                        </span>
                                        <span className='fs-5 ps-1'>Task Name:-</span>
                                        {(this.state.foamUpdate.Task && this.state.foamUpdate.Index === i) ?
                                            <form className='' onSubmit={this.handleSubmit} >
                                                <input className='fs-5 bg-opacity-25 border-white rounded bg-light ms-1 ' type='text' value={this.state.sdata[i].Task} 
                                                onChange={(e)=>{this.handleValue(e,i)}}>

                                                </input>
                                            </form>
                                            : <span className='fs-5'>{data.Task}</span>}

                                    </label>
                                </div>
                                <h6 className='col-6 d-flex justify-content-evenly'>
                                    <span className={`badge badge-secondary  ${data.Status ? "bg-success" : "bg-danger"} `}>
                                        {data.Status ? "Completed" : "Incomplete"}
                                    </span>
                                    <AiFillDelete role='button' className='fs-3   ' onClick={() => this.handleDelete(i)} />
                                    <FaEdit role='button' className='fs-3   ' onClick={() => this.handleUpdate(i)} />
                                </h6>
                            </div>
                        );
                    }):<div className='width-col border col-8 d-flex justify-content-center align-items-center p-3 border-dark bg-light text-dark  rounded bg-opacity-75  ' ><h1>No Data Found</h1></div>}
                </div>
            </div>
        );
    }
}
