/*==================================================
FormComponent.js
It uses a class component instead a function component because it is using state.

Functionalities:
- Display user's first and last names
- Provide a button to save user input and a button to cancel input
- Demonstrate the use of conditional rendering

Practice:
Add a new editable field for "Email", in addition to the "First Name" and "Last Name" fields.
================================================== */
import { Component } from 'react'

class FormComponent extends Component {
    constructor(props){  // Initialize initial component state 
        super(props);
        this.state = {
            showForm: false,
            firstName: '',
            lastName: '',
            firstNameValue: '',
            lastNameValue: ''
        }
    }

    // Display "Edit User" view
    edit = () => {
      this.setState({showForm: true});
    }
  
    // Update value of first name value when data is changed
    updateFirstName = (event) => {
      this.setState({firstNameValue: event.target.value})
    }
  
    // Update value of last name value when data is changed
    updateLastName = (event) => {
      this.setState({lastNameValue: event.target.value})
    }

    // Save user input and update component state with new name data
    save = () => {
      // Pass a function into setState() to update state with new name data
      this.setState(state => {
          return {firstName: state.firstNameValue, lastName: state.lastNameValue}
        }
      );
      // Pass object to setState() to hide "Edit User" view
      this.setState({showForm: false});
    }
  
    // Cancel user input and hide "Edit User" view
    cancel = () => {
      this.setState({showForm: false});
    }
  
    render(){  // Conditional rendering
      if (this.state.showForm) {  // "Edit User" page view
        return (
          <div className="edit-form-container">
            <h1>Edit User</h1>
            First Name:<input className="edit-firstName" onChange={this.updateFirstName} placeholder={this.state.firstName}/>
            Last Name:<input className="edit-lastName" onChange={this.updateLastName} placeholder={this.state.lastName}/>
            <button className="save-button" onClick={this.save}>Save</button>
            <button className="cancel-button" onClick={this.cancel}>Cancel</button>
          </div>  
        );
      } 
      else {  // Main page "User Information" view
        return (  
          <div className="form-container">
            <h1>User Information</h1>
            <div className="firstName">First Name: {this.state.firstName}</div>
            <div className="lastName">Last Name: {this.state.lastName}</div>
            <button id="edit-button" onClick={this.edit}>Edit</button>
          </div>  
        );
      }
    }
  }

export default FormComponent;