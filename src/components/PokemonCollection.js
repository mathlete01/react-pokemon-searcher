import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPokemonCards = () => {
    return this.props.pokemons.map(
      pokemon => 
      <PokemonCard name={pokemon.name} front={pokemon.sprites.front} back={pokemon.sprites.back} hp = {pokemon.hp}/>
    )
  };

  render() {
    if (this.props.pokemons.length === 0) {
      return <div>Loading!</div>;
    } else {
      return (
        <Card.Group itemsPerRow={6}>
          <div>{this.renderPokemonCards()}</div>
        </Card.Group>
      );
    }
  }
}

export default PokemonCollection;
