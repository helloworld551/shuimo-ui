/**
 * @description vue vite build config
 * @author 阿怪
 * @date 2023/6/7 22:54
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineConfig } from 'vite';
import lightningcss from 'vite-plugin-lightningcss';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import * as path from 'path';

// windows sep error?
const outputRoot = path.resolve(__dirname, '../../../lib/dist');
const getPath = (url: string) => {
  const p =  path.resolve(__dirname, `../../../lib/${url}`);
  return p
};

export default defineConfig({
  plugins: [
    lightningcss({ browserslist: '>= 0.25%' }),
    vue({ include: [/\.vue$/], exclude: ['**/react/*.tsx'] }),
    vueJSX()
  ],
  build: {
    outDir: outputRoot,
    target: 'esnext',
    lib: {
      name: 'shuimo-ui',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format, entryName) => {
        switch (format) {
          case 'es':
            return `es/shuimo-ui.mjs`;
          case 'cjs':
            return `cjs/shuimo-ui.cjs`;
          case 'umd':
            return `umd/shuimo-ui.umd.js`;
        }
        return entryName;
      },
      entry: getPath('./index.ts')
    },
    rollupOptions: {
      external: ['vue']
    }
  }
});
