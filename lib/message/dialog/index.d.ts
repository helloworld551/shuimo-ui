/**
 * @description dialog api type
 * @author 阿怪
 * @date 2022/4/16 23:11
 * @version v1.0.0
 *
 * @name w-dialog
 * @docDescription Dialog component with wash-painting-ui style.
 *                 水墨组件弹窗交互的组件。
 * @docUrl https://wash-painting.com/dialog
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

export declare type DialogProps = {
  /**
   * @description dialog mask option
   *              弹窗背景配置
   * @type DialogMask
   * @default show:true, clickClose:true
   */
  mask?: DialogMask,
  /**
   * @description dialog visible value
   *              弹窗是否显示参数
   * @type boolean
   * @default false
   */
  visible?: boolean,
  /**
   * @description confirmText button text
   *              确认按钮文本
   * @type string
   * @default ''
   */
  confirmText?: string,
}


export declare type DialogMask = {
  /**
   * @description dialog mask show
   *              弹窗背景是否显示
   * @type boolean
   * @default true
   */
  show?: boolean,
  /**
   * @description dialog click mask close
   *              弹窗背景点击是否关闭
   * @type boolean
   * @default true
   */
  clickClose?: boolean
}
