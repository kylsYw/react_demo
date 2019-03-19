import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { LocaleProvider, Layout } from 'antd';
import Router from '../Router';
//引入antd样式
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from  './index.less';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <BrowserRouter>
          <Layout>
            <Header>
              <nav className={styles['nav-bar']}>
                <NavLink to='/' exact activeClassName={styles['nav-—selected']} >首页</NavLink>
                <NavLink to='/demo1' activeClassName={styles['nav-—selected']}>练习1</NavLink>
                <NavLink to='/demo2' activeClassName={styles['nav-—selected']}>练习2</NavLink>
              </nav>
            </Header>
            <Content>
              <div className={styles['content-container']}>
                <Router />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              REACT-DEMO ©2018 Created by Kyls丶yw
            </Footer>
          </Layout>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}

export default App;
