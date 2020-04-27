import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Button,
  Divider,
  Tag,
  Card,
  Input,
  Breadcrumb,
  Popconfirm,
  Icon,
  message,
} from 'antd';

const { Search } = Input;

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default class UserInfo extends Component {
  state = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags) => (
          <span>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Popconfirm
              title="Are you sure edit this item?"
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText="Confirm"
              cancelText="Cancel"
            >
              <Button type="primary">Edit</Button>
            </Popconfirm>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure delete this item?"
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText="Confirm"
              cancelText="Cancel"
            >
              <Button type="danger">Delete</Button>
            </Popconfirm>
          </span>
        ),
      },
    ],
  };

  confirm = (e) => {
    console.log(e);
    message.success('Click on Confirm...');
  };

  cancel = () => {
    message.warning('You clicked cancel...');
  };

  render() {
    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '12px' }}>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/home/user">User Info</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Search
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            enterButton
            style={{ width: '300px' }}
          />
        </Card>
        <Card style={{ marginTop: '15px' }}>
          <Table columns={this.state.columns} dataSource={data} />
        </Card>
      </Fragment>
    );
  }
}
