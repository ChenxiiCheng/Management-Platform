import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './style.scss';

const { SubMenu } = Menu;

class MenuBar extends Component {
  state = {
    current: 'control',
  };

  handleClick = (e) => {
    this.setState({
      current: e.target,
    });
    this.props.history.push(`/home/${e.key}`);
  };

  //color: '#314659'
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ color: '#fff', paddingTop: '16px' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="setting" />
              <span>控制面板</span>
            </span>
          }
        >
          <Menu.Item key="control">
            <Icon type="line-chart" />
            数据分析
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>用户管理</span>
            </span>
          }
        >
          <Menu.Item key="user">
            <Icon type="user" />
            用户信息
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="bank" />
              <span>保险管理</span>
            </span>
          }
        >
          <Menu.ItemGroup key="houseInsu" title="房屋保险">
            <Menu.Item key="house">
              <Icon type="property-safety" />
              房屋保险
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="autoInsu" title="车辆保险">
            <Menu.Item key="auto">
              <Icon type="car" />
              车辆保险
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(MenuBar);
