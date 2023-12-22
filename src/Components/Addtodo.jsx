import React, { Component } from 'react'

export default class Addtodo extends Component {
    constructor(props){
        super(props)
    }
    handleclick=()=>{
        
    }
    render() {
        return (
            <> <div className='col-8 mt-5'>
                <label  className="form-label fs-3">Add Other Task:-</label>
                <input type="text"  className="form-control fs-4"  />
                <div id="passwordHelpBlock" className="form-text text-danger d-none">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <button  type="button" class="btn btn-secondary btn-rounded mt-3" data-mdb-ripple-init onClick={this.handleclick}>Add Task</button>
                </div>
            </>
        )
    }
}
