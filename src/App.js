import React, { useState } from 'react';
//import Accordion from './components/Accordion';

import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


/*const items = [
  {
    title: 'What is React ?',
    content: 'React is FRONT end js framework'
  },
  {
    title: 'Why use React ?',
    content: 'React is my favorite FRONT end js framework'
  },
  {
    title: 'Who do you useReact ?',
    content: 'React is my good'
  }
];*/

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];


 const App = () =>{

  const [selected,setSelected] = useState(options[0]);


  return (
    <div>
      <Translate/> 
        
    </div>
  );
}

export default App;

