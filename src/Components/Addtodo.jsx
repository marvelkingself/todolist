import React, { Component } from 'react';

export default class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            search:[],
        };
        this.handleValue = this.handleValue.bind(this)
        this.handleclick = this.handleclick.bind(this)
        this.handleclickUpdate = this.handleclickUpdate.bind(this)
        

    }

    // this update the state when when recive different props
    componentDidUpdate(prevProps) {
        if (this.props.updateFoam !== prevProps.updateFoam) {
            this.setState({ search: this.props.updateFoam });
        }
    }
    //this handle the inverse data flow
    handleValue(e) {

        this.setState({ task: e.target.value });

    }
    // this function work when user add task 
    handleclick(){
        console.log(this.props.validate)
        this.props.onTask(this.state.task);
        this.setState({ task: "" })
    }
    // when user update task 
    handleclickUpdate() {
        const updatedData = {
            "Task": this.state.task,
            "Index": this.props.updateFoam.Index
        }
        this.props.onTaskUpdate(updatedData)
        this.setState({ task: "" })

    }

    render() {
        const condition = this.props.updateFoam.Task
        console.log(condition)
        return (
            <>

                <div className='col-8 mt-2'>
                    <label className="form-label fs-3"> Add Other Task:-</label>
                    <input
                        type="text"
                        value={this.state.task}
                        className={`form-control fs-4  ${!this.props.validate ? 'border-danger' : 'border-success'}`}
                        onChange={this.handleValue}
                    />
                    <div id="passwordHelpBlock" className={`form-text text-danger ${this.props.validate ? 'd-none' : 'd-block'}`}>
                        Plzz add Task first
                    </div>
                    <button
                        type="button"
                        className="btn btn-secondary btn-rounded mt-3"
                        onClick={ this.handleclick}>
                         Add Task
                    </button>

                </div>
            </>
        );
    }
}
