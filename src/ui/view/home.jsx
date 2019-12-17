import React from 'react';
import Sidernav from './Sidernav.jsx';
import { Layout } from 'antd';
const { Content } = Layout;
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
          <Layout style={{ minHeight: '100vh' }}>
            <Sidernav></Sidernav>
            <Content style={{ margin: '0 0' }}>
              123
            </Content>
          </Layout>
        )
    }
}
module.exports = Home;