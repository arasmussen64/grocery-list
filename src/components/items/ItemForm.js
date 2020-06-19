import React from 'react';

class ItemForm extends React.Component {
  state = { name: '', price: ''}

  componentDidMount() {
    if (this.props.id) {
      const { item, cost } = this.props
      this.setState({ item, cost  })
    }
  }

    handleChange =(e) => {
      this.setState({ name: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.name);
      this.setState({ name: '', cost: '' })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.id) {
        this.props.updateContact( this.props.id, this.state )
      } else {
        // add the contact to the array of obj
        this.props.addContact(this.state)
      }
      // clear out the form
      this.setState({ firstName: '', phone: '' })
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