/**
 * @description popover组件测试用例
 * @author 阿怪
 * @date 2022/5/2 08:47
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { beforeAll, describe, expect, test,vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { MPopover } from '../../../index';
import { PopoverProps } from '@shuimo-design/core/lib/message/popover';


beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}

    unobserve() {}

    disconnect() {}
  };
});

describe('popover', () => {
  const getWrapper = (props: PopoverProps, slots: {
    default: any,
    content: any,
  }) => {
    return mount(MPopover, {
      props,
      slots
    });
  };


  test('render', () => {
    const wrapper = getWrapper({}, {
      default: () => 'hello',
      content: () => 'world'
    });
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"m-popover\\">
        <div class=\\"m-popover-default-wrapper\\">hello</div>
        <div class=\\"m-popover-content\\">
          <!---->
        </div>
      </div>"
    `);
  });


  describe('event',()=>{
    test('click',async () => {
      vi.useFakeTimers();
      const wrapper = getWrapper({}, {
        default: () => 'hello',
        content: () => 'world'
      });
      wrapper.find('.m-popover-default-wrapper').trigger('click');
      await vi.runOnlyPendingTimersAsync();
      expect(wrapper.find('.m-popover-content').html()).toContain('world');
    })
  })

});