import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true,
  }
  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front,
    })
    console.log(this.state.front)
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.front ? this.props.front :this.props.back} alt={this.props.name}/>
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
