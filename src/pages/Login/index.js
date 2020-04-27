import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form, message, Icon } from 'antd';
import LinkIcon from '../LinkIcon';
import { login } from '../../utils/auth';
import './style.scss';

const Login = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const { getFieldDecorator } = props.form;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { form, history } = props;
    form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;
        // const loginConfig = {
        //   url: '/login',
        //   method: 'POST',
        //   params: { username, password },
        //   config: {}
        // }
        // setFetchConfig(Object.assign({}, loginConfig))
        if (login(username, password)) {
          message.success('Login success!');
          console.log(history);
          history.push('/home/control');
        } else {
          message.error('Username or Password incorrect!');
        }
      }
    });
  };

  const handleEnterPress = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      handleFormSubmit(e);
    }
  };

  const handleMaskClick = () => {
    setIsModalOpened(false);
  };

  return (
    <div className="login__container">
      <div
        className="login__mask"
        hidden={!isModalOpened}
        onClick={handleMaskClick}
      >
        <div className="login__mask__container">
          <div className="tips">Not yet supported</div>
          <img src={require('../../utils/imgs/wechat.jpeg')} alt="wechat" />
        </div>
      </div>
      <div className="login__wrap">
        <div className="login__wrap--left">
          <img
            className="img1"
            src={require('../../utils/imgs/login_bg.png')}
            alt="bg-1"
          />
          <img
            className="img2"
            src={require('../../utils/imgs/login_bg2.png')}
            alt="bg-2"
          />
        </div>
        <div className="login__wrap--right">
          <div className="form__decoration">
            <div className="logo1">D</div>
          </div>
          <div className="form__container">
            <div className="form__title">
              Login
              <br />
              Mangemant System
            </div>
            <Form onSubmit={handleFormSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      min: 2,
                      message: 'Please enter at least 2 characters!',
                    },
                    { required: true, message: 'Please enter username!' },
                  ],
                })(
                  <div className="form__wrap">
                    {/* <i className="form__icon iconfont icon-yonghu" /> */}
                    <Icon type="user" />
                    <input
                      className="form__input"
                      placeholder="Username: test username is admin"
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      min: 6,
                      message: 'Please enter at least 6 characters!',
                    },
                    {
                      max: 15,
                      message: 'Please enter at most 15 characters!',
                    },
                    { required: true, message: 'Please enter password!' },
                  ],
                })(
                  <div className="form__wrap">
                    {/* <i className="form__icon iconfont icon-mima" /> */}
                    <Icon type="eye" />
                    <input
                      className="form__input"
                      type="password"
                      placeholder="Password: test password is 123456"
                      onKeyUp={handleEnterPress}
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('isRemember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(<Checkbox className="form__remember">Remember me</Checkbox>)}
              </Form.Item>
              <button className="form__button" type="submit">
                Login
              </button>
            </Form>
            <div className="form__footer">
              <Link to="/register">Haven't registered yet?</Link>
              <div className="form__link">
                Other ways
                <LinkIcon
                  icon="wechat.png"
                  onClick={() => setIsModalOpened(true)}
                />
                <LinkIcon
                  icon="qq.png"
                  onClick={() => setIsModalOpened(true)}
                />
                <LinkIcon
                  icon="weibo.png"
                  onClick={() => setIsModalOpened(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form.create({ name: 'loginForm' })(Login);
