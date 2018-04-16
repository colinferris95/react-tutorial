import React from 'react';
import ReactDOM from 'react-dom';

//variables
const todoItems = [
	
	{
	name: 'test',
	checked: 'false'
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
	let listObject = {name: this.state.value.toString(), checked: 'false'};
	todoItems.push (listObject);

	this.forceUpdate();
	  
  }
  
  checkItem(e){
	  let index = e.target.value;
	  
	  if (todoItems[index].checked == 'true'){
		
		todoItems[index].checked = 'false';

	  }
	  else{
		todoItems[index].checked = 'true';  
		  
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
			<li key={index} >
			{item.name}
			{item.checked}
	
			</li>
	
	
		)}
		</ul>
	  
	  
	  
		
		<div>
		{
			todoItems.map((item, index) => {
			return <button key={index} value={index} onClick={this.checkItem}>check</button>
		})
        }
		</div>
	
		
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