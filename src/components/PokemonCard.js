import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(`Pokemon Card Drawn to screen supposedly`)
    //console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">Name: {this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
