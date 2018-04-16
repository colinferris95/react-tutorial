import React from 'react';
import ReactDOM from 'react-dom';

class InputHello extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: ''};
	//bind correect this
    this.handleChange = this.handleChange.bind(this);
  
  }
  
  //handle typing event
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  
  
  render() {
   

    return (
      <div>
	  <label>
	  Name:
	  //render jsx with starting value blank on onchange run handleChange event handler
        <input type="text" value={this.state.value} onChange={this.handleChange} />
		</label>
		
		<p>
		//output text
		{this.state.value}
		</p>
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