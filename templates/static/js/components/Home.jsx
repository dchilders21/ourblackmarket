import React, { Component } from 'react';
import axios from 'axios';
export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {todos: null};
   }
   componentDidMount() {
      console.log('component did mount ');
    }

    render() {

       return (
          <div className="container">
          <h1>Home</h1>
          <table className="table">
             <thead>
                <tr>
                   <th scope="col">#</th>
                   <th scope="col">Date</th>
                   <th scope="col">Name</th>
                </tr>
             </thead>
             <tbody>
             </tbody>
          </table>
       </div>
       )
    }
}