import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {value: "name-checked"};   
  }  
  
  render() {   
    const setName = (e) => {          
      this.setState({value: "name-checked"})        
    }
    
    const setAge = (e) => {  
      this.setState({value: "age-checked"})  
    }
    
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter nameHandler = {setName} ageHandler = {setAge} ></Filter>
        <RecordTable value = {this.state.value}></RecordTable>
      </div>
    );
  }
}

export default App;
