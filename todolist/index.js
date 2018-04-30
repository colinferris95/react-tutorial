import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';


export class TodoList extends React.Component {
  
  
  
  
  
  render() {
   
	//const items = todoItems.map((d) => <li key={d}>{d}</li>);

	const formValue = this.props.value;
	const formChange = this.props.onChange;
	const formSubmit = this.props.onClick;
	const listArray = this.props.array;
	const itemClick = this.props.checkItem;
	const itemDelete = this.props.deleteItem;
	
	
    return (
		<div>
		<ReactBootstrap.Form inline>
		<ReactBootstrap.FormGroup controlId="formInlineName">
			<ReactBootstrap.FormControl  type="text" value={formValue} onChange={formChange} />
		</ReactBootstrap.FormGroup>
			
			<ReactBootstrap.Button onClick={formSubmit}>
				Add Item
			</ReactBootstrap.Button>
		</ReactBootstrap.Form>
		
	  
		<ReactBootstrap.ListGroup>
		{listArray.map((item,index) => 
			
			
			
				<ReactBootstrap.ListGroupItem key={index}  >
					
					<ReactBootstrap.Row className="show-grid">
						
						<ReactBootstrap.Col xs={12} md={8} style={item.color}>
					
							{item.name}
						</ReactBootstrap.Col>
					
						<ReactBootstrap.Col xs={6} md={4}>
							<ReactBootstrap.Button bsStyle="primary" bsSize="small" key={index} value={index} onClick={itemClick}>check</ReactBootstrap.Button>
							<ReactBootstrap.Button bsStyle="danger" bsSize="small" key={index} value={index} onClick={itemDelete}>remove</ReactBootstrap.Button>
						</ReactBootstrap.Col>
				
					</ReactBootstrap.Row> 
					
				</ReactBootstrap.ListGroupItem>
		
	
	
		)}
		</ReactBootstrap.ListGroup>
	  
	  
	  
		
		
	
		
      </div>
	  
	  
	  
    )
  }
}

