import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searching: false,
    searchResults: [],
  };

  search = (e) => {
    const query = e.target.value;
    if (query === "") {
      this.setState({ searching: false });
    } else {
      this.setState({ searching: true });
    }
    this.setState({
      searchResults: this.state.pokemons.filter((x) => x.name.includes(query)),
    });
    //let found = this.state.pokemons.find(({ name }) => name === query);
    // console.log(found);
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          pokemons: data,
          searchResults: data,
        });
      });
  }

  addPokemon = (e) => {
    let formData = {
      name: e.target.elements.name.value,
      hp: e.target.elements.hp.value,
      sprites: {
        front: e.target.elements.frontUrl.value,
        back: e.target.elements.backUrl.value,
      },
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:3000/pokemon", configObj)
      .then((res) => res.json())
      // .then((data) => {
      //   this.setState({
      //     searchResults: data,
      //   });
      // });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search search={this.search} />
        <br />
        <PokemonCollection
          //pokemons={this.state.pokemons}
          pokemons={this.state.searchResults}
        ></PokemonCollection>
      </Container>
    );
  }
}

export default PokemonPage;
