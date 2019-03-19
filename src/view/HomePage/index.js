import React from 'react';
import styles from './index.less'

export default class HomePage extends React.Component {
  render() {
    return <p className={styles['homepage']}>
      请根据每个Demo的文档提示完成功能<br />
      先来个小练习：使文字上下居中
    </p>
  }
}
