import React, { Component } from 'react';
import List from './components/items/List';
import ItemForm from './components/items/ItemForm';

class App extends Component {
  state = { items: [
    { id: 1, name: 'Apple', complete: false },
    { id: 2, name: 'Fish', complete: false },
    { id: 3, name: 'Yogurt', complete: false },
  ]
};

  render() {
    const { items } = this.state;
    return(
      <div>
        <ItemForm />
        <List name="Grocery List" items={items} />
      </div>
    );
  }
}

export default App;
