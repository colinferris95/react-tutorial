import React from 'react';
import ReactDOM from 'react-dom';

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

const todoItems = [
	
	{
	name: 'test',
	color: green
	}

];

class InputHello extends React.Component {
  

	
	
  constructor(props) {
    super(props);
    this.state = {value: ''};
	//bind correect this
    this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.checkItem = this.checkItem.bind(this);
  
  }
  
  //handle typing event
  handleChange(e) {
    this.setState({value: e.target.value});
	
  }
  
  handleSubmit(e){
	  //add to array
	  //alert(this.state.value);
	//todoItems.concat(
	//[this.state.value]);
	let listObject = {name: this.state.value.toString(), color: green};
	todoItems.push (listObject);

	this.forceUpdate();
	  
  }
  
  checkItem(e){
	  let index = e.target.value;
	  
	  if (todoItems[index].color == green){
		
		todoItems[index].color = red;

	  }
	  else{
		todoItems[index].color = green;  
		  
	  }
	  
	  
	  this.forceUpdate();
  }
  
  
  
  render() {
   
	//const items = todoItems.map((d) => <li key={d}>{d}</li>);

    return (
		<div>
	
		
			<input type="text" value={this.state.value} onChange={this.handleChange} />
			
			<button onClick={this.handleSubmit}>
				Add Item
			</button>
		
		
	  
		<ul>
		{todoItems.map((item,index) => 
			<li key={index} style={item.color} >
			{item.name}
		
			<button key={index} value={index} onClick={this.checkItem}>check</button>
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