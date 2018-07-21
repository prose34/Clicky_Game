import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/ComicCards";
import comics from "./comics.json";
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";


class App extends Component {

  state = {
    comics
  };

  render() {

    return (

      <div>
        <Title>Marvel Comics | Current Game Score: {this.score} | Max Score: {this.maxScore}</Title>
        <Wrapper>
          {this.state.comics.map(comics => (
          <Card
            name={comics.name}
            image={comics.image}
            significance={comics.significance}
          />
          ))}
        </Wrapper>




      
      </div>
    );
  }
}

export default App;
