import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';

const urlForUsername = 'https://api.github.com/users/';



class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }

     this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(urlForUsername + this.state.value)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          githubData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  handleChange(e) {	
    this.setState({value: e.target.value});	
	this.componentDidMount();	

  }
  
  handleSubmit(e){
	  this.setState({value: e.target.value});	
	  
	  
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.githubData) return <p>Loading...</p>

    return (
	<div>
	<ReactBootstrap.Form inline>
	
		<ReactBootstrap.FormGroup controlId="formInlineName">
			<ReactBootstrap.FormControl  type="text" value={this.state.value} onChange={this.handleChange} />
		
		</ReactBootstrap.FormGroup>
		
		<ReactBootstrap.Button onClick={this.handleSubmit}>
		Submit
		</ReactBootstrap.Button>
	
	</ReactBootstrap.Form>
	
      

       
        <h2>{this.state.githubData.name}</h2>
      </div>
    )

  }
}


const node = document.querySelector('#app')
const element = (
  <div>
    <MyComponent />
  </div>
)

ReactDOM.render(element, node)