import React, { Component, Fragment } from 'react';
import { Row, Col, Tabs, Button, Card, Table, Tag } from 'antd';
import { StackedArea, StackedColumn, Donut } from '@antv/g2plot';
import PanelTopItem from '../../components/PanelTopItem';
import './style.scss';

const { TabPane } = Tabs;

const data = [
  { year: '2015', value: 6, type: '分类一' },
  { year: '2016', value: 4.9, type: '分类二' },
  { year: '2017', value: 6, type: '分类三' },
  { year: '2018', value: 14, type: '分类四' },
  { year: '2019', value: 9, type: '分类五' },
  { year: '2020', value: 5, type: '分类六' },
];

// 表格
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    tags: ['loser'],
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    tags: ['loser'],
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
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
];

export default class ControlPanel extends Component {
  componentDidMount() {
    const areaPlot = new StackedArea('canvas1', {
      data,
      xField: 'year',
      yField: 'value',
    });

    const columnPlot = new StackedColumn('canvas2', {
      forceFit: true,
      data,
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'sales',
      data,
      xField: 'year',
      yField: 'value',
      yAxis: {
        min: 0,
      },
      stackField: 'type',
    });

    const ringPlot = new Donut('canvas3', {
      forceFit: true,
      radius: 0.8,
      data,
      angleField: 'value',
      colorField: 'type',
    });

    ringPlot.render();

    areaPlot.render();
    columnPlot.render();
  }

  render() {
    const operations = <Button>Extra Action</Button>;
    return (
      <Fragment>
        <div className="panel-content">
          <div className="panel-top">
            <PanelTopItem />
            <PanelTopItem />
            <PanelTopItem />
            <PanelTopItem />
          </div>
          <Row>
            <Col span={12}>
              <Card
                style={{
                  marginTop: '18px',
                  marginRight: '15px',
                }}
                title="线上搜索"
              >
                <div className="canvas-container">
                  <div id="canvas1"></div>
                  <div id="canvas2"></div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="销售占比" style={{ marginTop: '18px' }}>
                <div id="canvas3"></div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card style={{ marginTop: '18px' }}>
                <Tabs tabBarExtraContent={operations}>
                  <TabPane tab="最近销售" key="1">
                    <Table dataSource={dataSource} columns={columns} />;
                  </TabPane>
                  <TabPane tab="最近访客" key="2">
                    <Table dataSource={dataSource} columns={columns} />;
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
