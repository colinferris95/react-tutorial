import React from 'react';
import ReactDOM from 'react-dom';

const blue = {
backgroundColor : '#00B1E1'
};
const red = {
backgroundColor : '#E9573F'
};


class InputHello extends React.Component {
  

	
	
  constructor(props) {
    super(props);
    this.state = {value: 'Blue'};
	this.state = {color: blue};
	//bind correect this
    this.handleChange = this.handleChange.bind(this);
  
  }
  
  //handle typing event
  handleChange(e) {
    this.setState({value: e.target.value});
	if (e.target.value == "Blue"){
		this.setState({color: blue});
	}
	else{
		this.setState({color: red});
	}
  }
  
  
  
  render() {
   

    return (
      <div>
		<select value={this.state.value} onChange={this.handleChange}>
			<option value="Blue"> Blue </option>
			<option value="Red"> Red </option>
		</select>
		
		<div style={this.state.color}>
			This is the changing bg color
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