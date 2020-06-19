import React from 'react';

class ItemForm extends React.Component {
  state = { name: '', price: ''}



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
            <form onSubmit={this.handleSubmit}>
                <input 
                value={name}
                name="name"
                onChange={this.handleChange}
                required 
                placeholder="Add An Item" 
                />
                <input 
                value={price}
                name="price"
                onChange={this.handleChange}
                required 
                placeholder="Cost" 
                />
                <button>Submit</button>
            </form>
        )
    }
}



export default ItemForm;