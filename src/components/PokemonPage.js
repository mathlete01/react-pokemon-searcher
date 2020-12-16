import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searching: false,
    searchResults: []
  };

  search = (e) => {
    const query = e.target.value;
    if(query === "") {
      this.setState({ searching: false})
    } else {
      this.setState({ searching: true})
    }
    this.state.searchResults = this.state.pokemons.filter((x) => x.name.includes(query));
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

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search search={this.search} />
        <br />
        <PokemonCollection

          //pokemons={this.state.pokemons}
          pokemons={this.state.searchResults}
        ></PokemonCollection>
      </div>
    );
  }
}

export default PokemonPage;
