/**
 * @description vue version drawer
 * @author 阿怪
 * @date 2023/05/08 00:53
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineComponent, h } from 'vue';
import useModel from '../../../../lib/compositions/useModel';
import { props } from './api.ts';
import MBorder from '../../template/border/MBorder.tsx';
import './drawer.css';
import { DrawerProps } from './index';

export default defineComponent((_props: DrawerProps, { emit, slots }) => {
  const props = _props as Required<DrawerProps>;

  const {
    visible,
    getModel,
    getModelActive,
    handleModelClickPropagation,
  } = useModel({
    ...props,
    maskClass: ['m-drawer-mask', `m-drawer-mask-${props.direction}`],
  }, { emit });

  return () => {

    const getActive = () => {
      return getModelActive(slots.active?.());
    };

    const getDrawer = () => {
      // 根据direction判断是横向还是纵向
      return getModel(<div class={['m-drawer', `m-drawer-${props.direction}`, ...props.drawerClass]}
                           onClick={handleModelClickPropagation}>
        {/* {props.closeBtn ? getClose() : null} */}
        {h(MBorder, {}, () => slots.default?.())}
      </div>);
    };

    return <div class="m-drawer-wrapper">
      {getActive()}
      {visible.value ? getDrawer() : ''}
    </div>;
  };
}, {
  name: 'MDrawer',
  props,
});
