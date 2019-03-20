import React from 'react';
import styles from './index.less'
import { randomNum } from '../../util/tool'

export default class HomePage extends React.Component {
  child = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6']
  render() {
    return <div className={styles['homepage']}>
      <p>
        请根据每个Demo的文档提示完成功能<br />
        先来个小练习:遍历代码中的‘child’并生成对应的div元素，使之紧凑居中显示
      </p>
      <div className={styles['homepage-box']}>
        {/* 用来填写内容，使用this.child来遍历 */}
      </div>
    </div>
  }
}
