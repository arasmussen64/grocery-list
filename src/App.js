import React, { Component } from 'react';
import List from './components/items/List';
import ItemForm from './components/items/ItemForm';

class App extends Component {
  state = { items: [] }
  
getUniqId = () => {
return Math.floor((1 + Math.random())*0x10000)
  .toString(16)
  .substring(1);
}

addItem = (name) => {
  const { items } = this.state;
  const item = { name, id: this.getUniqId(), complete: false }
  this.setState({ items: [item, ...items] });
}

  handleClick = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map( item => {
        if (item.id === id){
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  render() {
    const { items } = this.state;
    return(
      <div>
        <ItemForm addItem={this.addItem} />
        <List name="Grocery List" items={items} itemClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
