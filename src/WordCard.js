/*import React from 'react';
import CharacterCard from './CharacterCard';

export default function WordCard(props){

   const activationHandler = c => { 
      console.log(`${c} has been activated.`)
   }
 return (
 <div>
    { 
    Array.from(props.value).map((c, i) =>
    <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
    }
 </div>
 );
}*/

import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

export default class WordCard extends Component {

    activationHandler = c => {
        console.log(${c} has been activated.) 
    }

    render() {
        return (
            <div>
                { 
                    Array.from(this.props.value).map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>)
                
                }
            </div>
        );
    }
}