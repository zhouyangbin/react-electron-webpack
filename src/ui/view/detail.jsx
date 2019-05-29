import React from 'react';
import Head from './head.jsx';
class Detail extends React.Component {
	constructor(props){
    super(props);
    this.state = {
        mode: "我是detail",
    };
  }
  jump(){
  	// this.props.history.push('/')
  }
    render() {
        return (
            <div>
              <Head title="detail"/>
              <li>{this.state.mode}</li>
            </div>
        )
    }
}
module.exports = Detail;