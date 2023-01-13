/**
 * @description
 * @author 阿怪
 * @date 2023/1/4 11:15
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { createMElement, MElement } from 'moelement';
import { useLi, type LiProps } from '@shuimo-design/core';


const { options } = useLi();
@createMElement({
  name: 'm-li',
  ...options
})
export default class MLi extends MElement implements LiProps {
  active?: boolean;

  constructor() {super();}

  beforeRender() {
    this.template.props!.class = ['m-li', this.active ? 'm-active' : undefined].join(' ');
  }
}
