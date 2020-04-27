import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon, Descriptions, Card, Table } from 'antd';

const columns = [
  {
    title: 'Product Number',
    dataIndex: 'pro_id',
    key: 'pro_id',
  },
  {
    title: 'Product Name',
    dataIndex: 'pro_name',
    key: 'pro_name',
  },
  {
    title: 'User ID',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'User Name',
    dataIndex: 'user_name',
    key: 'user_name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const dataSource = [
  {
    key: '1',
    pro_id: '00000001',
    pro_name: 'house insurance',
    user_id: '10000001',
    user_name: 'xxxx',
    price: 10000,
  },
  {
    key: '2',
    pro_id: '00000001',
    pro_name: 'house insurance',
    user_id: '10000001',
    user_name: 'xxxx',
    price: 10000,
  },
  {
    key: '3',
    pro_id: '00000001',
    pro_name: 'house insurance',
    user_id: '10000001',
    user_name: 'xxxx',
    price: 10000,
  },
  {
    key: '4',
    pro_id: '00000001',
    pro_name: 'house insurance',
    user_id: '10000001',
    user_name: 'xxxx',
    price: 10000,
  },
  {
    key: '5',
    pro_id: '00000001',
    pro_name: 'house insurance',
    user_id: '10000001',
    user_name: 'xxxx',
    price: 10000,
  },
  {
    key: '6',
    pro_id: '00000001',
    pro_name: 'house insurance',
    user_id: '10000001',
    user_name: 'xxxx',
    price: 10000,
  },
];

export default class AutoInsu extends Component {
  render() {
    return (
      <Fragment>
        {/* 面包屑 */}
        <Breadcrumb style={{ marginBottom: '12px' }}>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/home/auto">Auto Insurance</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Descriptions title="Auto Insurance Info">
            <Descriptions.Item label="Insurance Name">
              Auto Insurance
            </Descriptions.Item>
            <Descriptions.Item label="Insurance Type">
              Auto Insurance
            </Descriptions.Item>
            <Descriptions.Item label="Insurance Year">2020</Descriptions.Item>
            <Descriptions.Item label="Status">Open</Descriptions.Item>
            <Descriptions.Item label="Cover Range">
              xxxx, xxxx, xxxx, xxxx
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card title="User Purchase Record" style={{ marginTop: '15px' }}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </Fragment>
    );
  }
}
