import React, {Component} from 'react';
import TabsSelector from "./SelectorTab"



export default class Event extends Component{

  render(){
    return(
      <div style={{width:'90%',textAlign:"center", margin:'auto'}}>
        <h2>Event</h2>
        <TabsSelector/>
      </div>
    );
  }
}
