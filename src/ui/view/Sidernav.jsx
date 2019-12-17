import React from 'react';
import './Sidernav.less';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;
class Sidernav extends React.Component {
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
            <Sider>
              <Menu className="sider_nav_menu" theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item className="sider_nav_menu_item">
                  <Icon type="desktop" />
                  index
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span><a href="#/detail">production</a></span>
                </Menu.Item>
                <SubMenu
                  title={
                    <span>
                      <Icon type="user" />
                      <span>User</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">3</Menu.Item>
                  <Menu.Item key="4">4</Menu.Item>
                  <Menu.Item key="5">5</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
        )
    }
}
module.exports = Sidernav;