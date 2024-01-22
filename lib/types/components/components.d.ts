/**
 * @description 简单组件类型
 * @author 阿怪
 * @date 2021/8/11 4:57 下午
 * @version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import avatar from '../../components/base/avatar/MAvatar';
import button from '../../components/base/button/MButton';
// import checkbox from '../../components/base/checkbox/MCheckbox';
// import checkboxGroup from '../../components/base/checkbox/MCheckboxGroup';
// import datepicker from '../../components/base/MDatePicker';
// import input from '../../components/base/MInput';
// import inputNumber from '../../components/base/MInputNumber';
// import radio from '../../components/base/MRadio';
// import select from '../../components/base/MSelect';
// import li from '../../components/base/MLi';
// import list from '../../components/base/MList';
// import tag from '../../components/base/MTag';
// import progress from '../../components/base/MProgress';
//
//
// import dialog from '../../components/message/MDialog';
// import drawer from '../../components/message/MDrawer';
// import popover from '../../components/message/MPopover';
// import tooltip from '../../components/message/MTooltip';
// import message from '../../components/message/message/MMessageItem';
//
// import divider from '../../components/other/MDivider';
// import darkMode from '../../components/other/MDarkMode';
// import loading from '../../components/other/loading/MLoading';
//
// import border from '../../components/template/border/MBorder';
// import form from '../../components/template/MForm';
// import formItem from '../../components/template/MFormItem';
// import pagination from '../../components/template/MPagination';
// import table from '../../components/template/MTable';
// import tableColumn from '../../components/template/MTableColumn';
// import ricePaper from '../../components/template/ricePaper/MRicePaper';
// import menu from '../../components/template/menu/MMenu';
// import menuItem from '../../components/template/menu/MMenuItem';


export type keyType = any;

export type MenuType = {
  title: string,
  key: keyType,
  isActive: boolean,
  index?: number[],
  children?: MenuTypeArr
}
export type MenuTypeArr = Array<MenuType>;

export declare const MAvatar: typeof avatar;
export declare const MButton: typeof button;
// export declare const MInput: typeof input;
// export declare const MCheckbox: typeof checkbox;
// export declare const MCheckboxGroup: typeof checkboxGroup;
// export declare const MDatePicker: typeof datepicker;
// export declare const MRadio: typeof radio;
// export declare const MSelect: typeof select;
// export declare const MLi: typeof li;
// export declare const MList: typeof list;
// export declare const MTag: typeof tag;
// export declare const MProgress: typeof progress;
//
// export declare const MDialog: typeof dialog;
// export declare const MDrawer: typeof drawer;
// export declare const MPopover: typeof popover;
// export declare const MTooltip: typeof tooltip;
// export declare const MMessage: typeof message;
//
// export declare const MBorder: typeof border;
// export declare const MDivider: typeof divider;
// export declare const MDarkMode: typeof darkMode;
// export declare const MLoading: typeof loading;
// export declare const MInputNumber: typeof inputNumber;
// // export declare const MMenu: typeof menu;
//
// export declare const MForm: typeof form;
// export declare const MFormItem: typeof formItem;
// export declare const MPagination: typeof pagination;
// export declare const MTable: typeof table;
// export declare const MTableColumn: typeof tableColumn;
// export declare const MRicePaper: typeof ricePaper;
// export declare const MMenu: typeof menu;
// export declare const MMenuItem: typeof menuItem;
