import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {  
  
  onChange(choice){
    if (choice==="name"){
      this.props.nameHandler()
    }
    
    if (choice==="age"){
      this.props.ageHandler()
    }
  }    
    
  render(){    
    const nameClicked = (e) => {
      if (e.target.checked){
        this.onChange("name")
      }      
    }
    
    const ageClicked = (e) => {
      if (e.target.checked){
        this.onChange("age")
      }
    }
    
    return (
      <div className="checkboxes">
        <Checkbox onChange = {nameClicked} />
        <label>Name</label>
        <Checkbox onChange = {ageClicked} />
        <label>Age</label>
      </div>
    );
  }
}

Filter.propTypes = {
  nameHandler: PropTypes.func,
  ageHandler: PropTypes.func
}

export default Filter;