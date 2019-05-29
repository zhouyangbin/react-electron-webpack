import React from 'react';
import './head.less';
class Head extends React.Component {
	constructor(props){
    super(props);
    this.state = {
        home: "去home",
        detail: "去detail",
        active:1,
    };
  }
  componentWillMount(){
    document.title= this.props.title;
  }
  jump(path,index){
      window.location.href=path;
  }
    render() {
        return (
            <div className="head">
                  <span className={this.props.title == 'home' ? 'active' :''}  onClick={this.jump.bind(this,'#/',1)}>{this.state.home}
                  </span>
                   <span className={this.props.title == 'detail' ? 'active' :''} onClick={this.jump.bind(this,'#/detail',2)}>
                   {this.state.detail}
                   </span>
            </div>
        )
    }
}
module.exports = Head;