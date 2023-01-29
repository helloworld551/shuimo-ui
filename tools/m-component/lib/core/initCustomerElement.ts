/**
 * @description
 * @author 阿怪
 * @date 2022/12/20 15:49
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import MElement from '../MElement';
import { MElementOptions } from '../../types/template';
import { MNodeTemplate } from '../../types/template/template';
import { renderDecorator } from './decorator/render';
import { initDecorator } from './decorator/init';
import { lifecycleDecorator } from './decorator/mount';
import { initElementProps } from './hooks/props';


export default function initCustomerElement(target: typeof MElement, options: Readonly<MElementOptions>) {
  const { style, props } = options;

  @lifecycleDecorator()
  @renderDecorator(options)
  @initDecorator(options)
  class CustomMElement extends target {

    shadow: ShadowRoot = this.attachShadow({ mode: 'open' });

    currentTemplate: MNodeTemplate | null = null;

    constructor() {
      super();
    }

    static get observedAttributes() {
      if (!props) {return [];}
      return Object.keys(props);
    }

    protected initProps(){
      initElementProps.call(this, props);
    }

    // not support setAttribute now
    // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    //   this.update();
    // }

    afterMount() {
      super.afterMount();
      this.initStyle();
    }

    private initStyle() {
      if (style) {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = style;
        this.shadow.appendChild(styleTag);
      }
    }
  }

  return CustomMElement;
}
