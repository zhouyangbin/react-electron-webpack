import React from 'react';
import Head from './head.jsx';
class Home extends React.Component {
	constructor(props){
    super(props);
    this.state = {
        mode: "我是home",
    };
  }
  jump(){
  	// this.props.history.push('/detail')
  }
    render() {
        return (
            <div>
              <Head title="home"/>
              <li>{this.state.mode}</li>
            </div>
        )
    }
}
module.exports = Home;