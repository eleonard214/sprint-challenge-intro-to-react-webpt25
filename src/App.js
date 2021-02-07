import React, { useState, useEffect } from 'react';
import  axios from 'axios'
import Character from './components/Character'
import SearchText from './components/SearchText'
import styled from 'styled-components'

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const[data,setdata]=useState([]);
  const[choice,setChoice]=useState('people')

  const styledDiv= styled.div`
      background-color:purple;
      font-size:25px;
      color:cyan;

  useEffect(()=>{

    function callData(){
      axios
        .get('https:swapi.dev/api/${choice}')
        .then(res=>{
          console.log(res.data)
          setData(re.data.results);
        })
    }
    callData();
  }, [choice])




  return (
    <styledDiv className="App">
      <h1 className="Header">Star Wars Characters</h1>
    </styledDiv>
  );
}

export default App;
