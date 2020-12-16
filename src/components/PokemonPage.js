import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          pokemons: data,
          color: "blue"
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection color={this.state.color} pokemons={this.state.pokemons}></PokemonCollection>
      </div>
    );
  }
}

export default PokemonPage;
