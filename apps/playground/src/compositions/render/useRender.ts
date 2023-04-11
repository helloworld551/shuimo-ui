/**
 * @description
 * @author 阿怪
 * @date 2023/3/24 01:34
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import useVueRender from './useVueRender';
import { Ref } from 'vue';
import useWebComponentRender from './useWebComponentRender';
import useReactRender from './useReactRender';


export default function useRender(type: Ref<TemplateType>) {


  let handler: ReturnType<typeof useVueRender>;
  const registerHandler = new Map<TemplateType, IRender>;
  const initRender = async () => {
    if (registerHandler.has(type.value)) {
      handler = registerHandler.get(type.value)!;
      return;
    }
    if (type.value === 'vue') {
      const vueRender = await useVueRender();
      handler = vueRender;
      registerHandler.set('vue', vueRender);
    }
    if (type.value === 'react') {
      const vueRender = await useReactRender();
      handler = vueRender;
      registerHandler.set('react', vueRender);
    }
    if (type.value === 'web-component') {
      const wcRender = await useWebComponentRender();
      handler = wcRender;
      registerHandler.set('web-component', wcRender);
    }
  };

  const handlerError = (e?: unknown) => {
    console.log('some error');
    console.error(e);
    // todo use dialog to show error
  };

  const updateRender = async (code: TemplateCode) => {
    try {
      await clear();
      await initRender();
      await init(code);
    } catch (e) {
      handlerError(e);
    }
  };


  const init = async (code: TemplateCode) => {
    try {
      await handler?.init(code);
    } catch (e) {
      handlerError(e);
    }
  };

  const clear = async () => {
    await handler?.clear();
  };

  const update = async (code: TemplateCode) => {
    if (handler && handler.update) {
      try {
        await handler.update(code);
      } catch (e) {
        handlerError(e);
      }
    }
  };

  return {
    initRender,
    updateRender,
    init,
    update
  };

}
