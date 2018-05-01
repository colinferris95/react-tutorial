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
	 this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(urlForUsername + this.state.value)
      .then(res => res.json())
	  .then(
	  (result) => {
		 this.setState({
			githubData:result
	    });
	  },
	  (error) => {
		  this.setState({
			requestFailed : true ,
			error
		  });
	  }
	)
	  
  }

  handleChange(e) {	
    this.setState({value: e.target.value});	
	

  }
  
  handleSubmit(e){
	  
	  this.componentDidMount();
	  
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.githubData) return <p>Loading...</p>

    return (
	<div>
	<ReactBootstrap.Form inline>
	
		<ReactBootstrap.FormGroup controlId="formInlineName">
			<ReactBootstrap.FormControl  type="text" value={this.state.value} onChange = {this.handleChange}  />
		
		</ReactBootstrap.FormGroup>
		
		<ReactBootstrap.Button onClick={this.handleSubmit}>
		Submit
		</ReactBootstrap.Button>
	
	</ReactBootstrap.Form>
	
      

       
        <h2>{this.state.githubData.name}</h2>
		<ReactBootstrap.Col xs={6} md={4}>
		<ReactBootstrap.Image src={this.state.githubData.avatar_url} circle responsive />
		</ReactBootstrap.Col>
      </div>
    )

  }
}


const node = document.querySelector('#app')
const element = (
 
    <MyComponent />
  
)

ReactDOM.render(element, node)