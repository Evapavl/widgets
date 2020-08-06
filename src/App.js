import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const options = [
  {
    label: 'color is red',
    value: 'red'
  },
  {
    label: 'color is blue',
    value: 'blue'
  },
  {
    label: 'color is black',
    value: 'black'
  }
]

const items = [
  {
    title: 'What is React',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite javascript framework'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
]

export default () => {

  const [selected, setSelected] = useState(options[0]);

  return <div>
    <Header />
    <Route path="/" >
      <Accordion items={items} />
    </Route>
    <Route path="/list" >
      <Search />
    </Route>
    <Route path="/dropdown" >
    <DropDown
      selected={selected}
      options={options}
      onSelectedChange={setSelected}
    />
    </Route>
    <Route path="/translate" >
    <Translate />
    </Route>
  </div>
}
