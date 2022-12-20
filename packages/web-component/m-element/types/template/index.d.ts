/**
 * @description
 * @author 阿怪
 * @date 2022/12/20 15:47
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MCOPO } from '../template/props';
import { MNodeTemplate } from '../template/template';


export declare type VNodeType = {
  name?: string,
  options?: MNodeTemplate,
  dom?: HTMLElement,
}


export interface IMElement extends HTMLElement {
  VNode: VNodeType;
  /**
   * @description before element constructor called
   */
  beforeInit(): void;

  /**
   * @description after element constructor called
   */
  afterInit(): void;

  beforeMount(): void;

  afterMount(): void;
}

export declare type MElementOptions = {
  name: string,
  style?: string,
  template?: MNodeTemplate,
  props?: MCOPO<any>
}
