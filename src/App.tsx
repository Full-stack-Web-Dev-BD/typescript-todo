import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';
//  ? is use to  make a filed optional .
export interface IState{ // interface use to define  variable type .
  people:{
    name: string,
    age: number,
    url: string,
    notes?: string
  }[]
}

function App() {
  const [people,setPeople]= useState<IState["people"]>([
    {
      name: "John",
      age: 36,
      url: "http://example.com",
      notes: "this is example"
    }
  ])

  return (
    <div className="App mt-5"> 
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
