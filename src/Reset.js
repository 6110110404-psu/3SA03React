import React, { Component } from 'react'

class Reset extends Component {

    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }
   
    Reset = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: false})
        }
    }

  render() {
    return (
      <React.Fragment>
        <button id = "reset" class="button" onClick = {this.reset}>RESET</button>
      </React.Fragment>
    )
  }
}
export default Reset