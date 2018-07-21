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

    // card score
  score=0;
  maxScore=0;

  // ES6 click, resetgame, shuffle & render
  Click = id => {    
    const comics = this.state.comics.map(comics => {
      // this.score++;
      if (comics.id===id){
        if(comics.click===false){  //comic/card clicked
          comics.click=true;
          this.score++;
          if(this.score>this.maxScore){
            this.maxScore=this.score;
          }
        } else {//update score for comic/card clicked again
          // aler
          // alert("what happens")
          this.resetGame();
        }
      }
      return comics;
    });
    // Set this.state.comics equal to the new comics array
    this.setState({ comics });
  };

  resetGame = () =>{//reset game 
    this.score = 0;
    const comics = this.state.comics.map(comics =>{
      comics.click=false;
      return comics;
    })
  }
  // react-shuffle package based on the comics/cards array
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;


    while (0 !== currentIndex) {
    // Math random to shuffle comics/cards
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Exchange with the current comic/card.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  render() {

    return (

      <div>
        <Title>Marvel Comics | Current Game Score: {this.score} | Max Score: {this.maxScore}</Title>
        <Wrapper>
          {this.shuffle(this.state.comics).map(comics => (
          <Card
            Click={this.Click}
            id={comics.id}
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
