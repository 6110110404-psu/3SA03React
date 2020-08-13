/*import React, { useState, useEffect, useRef } from 'react';

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.attempt);

    const activate = () => {
        if(!active){
        setActive(true)
        props.activationHandler(props.value)
        }
    }

    useEffect(() => {
        if(attemptRef.current != props.attempt){
            setActive(false)
            attemptRef.current = props.attempt
        }
    })
       
 const className = `card ${active ? 'activeCard': ''}`
 return (
 <div className={className} onClick={activate}>{props.value}</div>
 )

}*/

import React, { Component } from 'react';

export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
            setTimeout(() => { this.setState({active :false})},500)
        }
       }
       

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
        }

    }


    render(){
        let className = `card ${this.state.active ? 'activeCard': ''}`
        return (
            <div className ={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}
    


