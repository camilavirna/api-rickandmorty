import React from "react";
import Character from "./components/Character";
import { Container } from "./components/Character/styled";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {characterList:[]}
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")

  .then(res => res.json())
  .then(
    (result) => {
      this.setState({characterList: [...result.results]})
    }
  )
  }

  render(){
    return (
      <div className="App">
        {this.state.characterList.map(character => {
          return <Character character={character}/>})}
      </div>
    )
  }
  
}

export default App;
