import React, { Component } from 'react';
import List from './components/items/List';
import ItemForm from './components/items/ItemForm';

class App extends Component {
  state = { items: [ {name: 'Apple', price: '$2.50', complete: false},
  {name: 'Orange', price: '$2.00', complete: false},
  {name: 'Ice Cream', price: '$3.00', complete: false},
] 
};
  
getUniqId = () => {
return Math.floor((1 + Math.random())*0x10000)
  .toString(16)
  .substring(1);
}

addItem = (incomingItem) => {
  const { items } = this.state;
  const item = { ...incomingItem, id: this.getUniqId(), complete: false }
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
        <List name="Grocery List" items={this.state.items} itemClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
