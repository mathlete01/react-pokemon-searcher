import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searching: false,
    almost: []
  };

  search = (e) => {
    const query = e.target.value;
    // query === "" ? this.setState({ searching == false}) : this.setState({searching==true})
    if(query === "") {
      this.setState({ searching: false})
    } else {
      this.setState({ searching: true})
    }
    console.log(`this.state.searching = ${this.state.searching}`)
    console.log(query);
    this.state.almost = this.state.pokemons.filter((x) => x.name.includes(query));
    console.log(this.state.almost);
    //let found = this.state.pokemons.find(({ name }) => name === query);
    // console.log(found);
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          pokemons: data,
          almost: data,
          color: "blue",
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
          color={this.state.color}
          //pokemons={this.state.pokemons}
          pokemons={this.state.almost}
        ></PokemonCollection>
      </div>
    );
  }
}

export default PokemonPage;
