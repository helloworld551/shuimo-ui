/**
 * @description border component
 * @author 阿怪
 * @date 2022/12/12 09:54
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


import { useBorder } from '@shuimo-design/core';
import { createMElement, MElement } from 'moelement';

const { options } = useBorder();

@createMElement({
  name: 'm-border',
  ...options
})
export default class MBorder extends MElement {
  constructor() {super();}
}
