import React from 'react';
import Sidernav from './Sidernav.jsx';
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;
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
          <Layout style={{ minHeight: '100vh' }}>
            <Sidernav></Sidernav>
              <Content>
                    Content  my home  Detail
              </Content>
          </Layout>
        </div>
        )
    }
}
module.exports = Detail;