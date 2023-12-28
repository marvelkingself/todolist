import React, { Component } from 'react';

export default class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            search: false,
        };
        this.handleValue = this.handleValue.bind(this)
        this.handleclick = this.handleclick.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleDelete = this.handleDelete.bind(this)


    }

    //this handle the inverse data flow
    handleValue(e) {

        this.setState({ task: e.target.value });
        if(this.state.search){
            this.props.onSearch(e.target.value);
        }

    }
    // this function work when user add task 
    handleclick() {
        if(this.state.search){
            alert("First off the Search mode ")
        }
        else if(this.props.data.findIndex((d)=>d.Task.toLowerCase()===this.state.task.toLowerCase())!==-1){
            alert("You already Add this task")
        }else{
            console.log(this.props.validate)
            this.props.onTask(this.state.task);
            this.setState({ task: "" })
        }
        
    }
    // when user update task 
    handleSearch() {
        const status = !this.state.search
        this.props.onSearchSet(status)
        this.setState({ task: "" })
        this.setState({search:status})
        
    }
    handleDelete(){
        this.props.onDelete()
    }

    render() {

        return (
            <>

                <div className='col-8 mt-2'>
                    <label className="form-label fs-3">{this.state.search? "Search Task:-":"Add Other Task:-"}</label>
                    <input
                        type="text"
                        value={this.state.task}
                        className={`form-control fs-4  ${!this.props.validate ? 'border-danger' : 'border-success'}`}
                        onChange={this.handleValue}
                    />
                    <div id="passwordHelpBlock" className={`form-text text-danger ${this.props.validate ? 'd-none' : 'd-block'}`}>
                        Plzz add Task first
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-secondary btn-rounded mt-3"
                            onClick={this.handleclick}>
                            Add Task
                        </button>
                        <button
                            type="button"
                            className={`btn ${this.state.search? "btn-danger":"btn-secondary"} btn-secondary  btn-rounded mt-3 ms-3`}
                            onClick={this.handleSearch}>
                            Search
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary btn-rounded mt-3 ms-3"
                            onClick={this.handleDelete}>
                            Delete All
                        </button>
                    </div>

                </div>
            </>
        );
    }
}
