import React from 'react';
import ReactDOM from 'react-dom';

class InputHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  
  }
  
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  
  
  render() {
   

    return (
      <div>
	  <label>
	  Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
		</label>
		
		<p>
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