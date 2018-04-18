import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { TodoList } from './index.js';

//variables
//#00FF00
//E9573F
const green = {
	
	color: '#476b6b'
	
}

const red = {
	color: '#E9573F',
	textDecoration: 'line-through'
}

class TodoListRender extends React.Component {
  

	
	
  constructor(props) {
    super(props);
    this.state = {value: ''};
	this.state = {array : [{name: 'test', color: green}]};
	//bind correect this
    this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.checkItem = this.checkItem.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
  
  }
  
  //handle typing event
  handleChange(e) {
    this.setState({value: e.target.value});
	
  }
  
  handleSubmit(e){
	  //add to array

	let listObject = {name: this.state.value.toString(), color: green};
	this.state.array.push (listObject);

	this.setState(this.state);
	  
  }
  
  checkItem(e){
	  let index = e.target.value;
	  
	  if (this.state.array[index].color == green){
		
		this.state.array[index].color = red;

	  }
	  else{
		this.state.array[index].color = green;  
		  
	  }
	  
	  
	  this.setState(this.state);
  }
  
  deleteItem(e){
	  let index = e.target.value;
	  
	  this.state.array.splice(index,1);
	  this.setState(this.state);
	  
	  
  }
  
  //value this.state.value
  // onChangethis.handleChange
  //onClick={this.handleSubmit}
 // this.state.array
 //onClick={this.checkItem}>
  
  render() {
   
	//const items = todoItems.map((d) => <li key={d}>{d}</li>);
	
    return <TodoList value={this.state.value} onChange={this.handleChange} onClick={this.handleSubmit} array={this.state.array} checkItem={this.checkItem} deleteItem={this.deleteItem}  />;
	  
	  
	  
    
  }
}

const node = document.querySelector('#app')
const element = (
  <div>
    <TodoListRender />
  </div>
)

ReactDOM.render(element, node)