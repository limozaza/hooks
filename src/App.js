import React from 'react';
import Accordion from './components/Accordion';


const items = [
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
];


export default  () =>{
  return <div>
    <Accordion items={items}/>
  </div>
}

