import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';

//variables
//#00FF00
//E9573F
const green = {
	
	color: '#00FF00'
	
}

const red = {
	color: '#E9573F',
	textDecoration: 'line-through'
}

class InputHello extends React.Component {
  

	
	
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
  
  
  
  render() {
   
	//const items = todoItems.map((d) => <li key={d}>{d}</li>);

    return (
		<div>
		<ReactBootstrap.Form inline>
		<ReactBootstrap.FormGroup controlId="formInlineName">
			<ReactBootstrap.FormControl  type="text" value={this.state.value} onChange={this.handleChange} />
		</ReactBootstrap.FormGroup>
			
			<ReactBootstrap.Button onClick={this.handleSubmit}>
				Add Item
			</ReactBootstrap.Button>
		
		</ReactBootstrap.Form>
	  
		<ul>
		{this.state.array.map((item,index) => 
			<li key={index} style={item.color} >
			{item.name}
		
			<ReactBootstrap.Button bsStyle="success" bsSize="small" key={index} value={index} onClick={this.checkItem}>check</ReactBootstrap.Button>
			<ReactBootstrap.Button bsStyle="success" bsSize="small" key={index} value={index} onClick={this.deleteItem}>remove</ReactBootstrap.Button>
			
			</li>
	
	
		)}
		</ul>
	  
	  
	  
		
		
	
		
      </div>
	  
	  
	  
    )
  }
}

const node = document.querySelector('#app')
const element = (
  <div>
    <InputHello />
  </div>
)

ReactDOM.render(element, node)