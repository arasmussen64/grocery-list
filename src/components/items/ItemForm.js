import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = { name: '', price: '' }
 

    // handleChange =(e) => {
    //   this.setState({ name: e.target.value });
    // }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state);
      this.setState({ name: '', price: '' })
    }

    render() {
        const { name, price } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
               <Form.Input 
                value={name}
                name="name"
                onChange={this.handleChange}
                required 
                placeholder="Add An Item" 
                />
                <Form.Input 
                value={price}
                name="price"
                onChange={this.handleChange}
                required 
                placeholder="Cost"
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}



export default ItemForm;