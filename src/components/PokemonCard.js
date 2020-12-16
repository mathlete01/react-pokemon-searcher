import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.props.front} alt={this.props.name}/>
          </div>
          <div className="content">
            <div className="header"><h1>{this.props.name}</h1></div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
