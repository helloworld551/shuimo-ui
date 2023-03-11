/**
 * @description
 * @author 阿怪
 * @date 2022/12/12 14:13
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import useGlobal from './useGlobal';
// [base]
import { buttonProps, useButton } from './base/button/useButton';
import { inputProps, useInput } from './base/input/useInput';
import { checkboxProps, useCheckbox } from './base/checkbox/useCheckbox';
import { liProps, useLi } from './base/list/li/useLi';
import { switchProps, useSwitch } from './base/switch/useSwitch';
import { selectProps, useSelect } from './base/select/useSelect';
import { useOption } from './base/option/useOption';
import { radioProps, useRadio } from './base/radio/useRadio';
import { tagProps, useTag } from './base/tag/useTag';
import { progressProps, useProgress } from './base/progress/useProgress';

// [message]
import { usePopover } from './message/popover/usePopover';

// [template]
import { useBorder } from './template/border/useBorder';
import { menuProps, useMenu } from './template/menu/useMenu';
import { useMenuItem } from './template/menu/useMenuItem';
import { ricePaperProps, useRicePaper } from './template/ricePaper/useRicePaper';
import { formProps, useForm } from './template/form/useForm';
import { formItemProps, useFormItem } from './template/form/useFormItem';

// [other]
import { useTaiChi } from './other/TaiChi/useTaiChi';
import { dividerProps, useDivider } from './other/divider/useDivider';
import { loadingProps, useLoading } from './other/loading/useLoading';

export {
  useGlobal,
  // [base]
  buttonProps, useButton,
  inputProps, useInput,
  checkboxProps, useCheckbox,
  liProps, useLi,
  switchProps, useSwitch,
  selectProps, useSelect,
  useOption,
  radioProps, useRadio,
  tagProps, useTag,
  progressProps, useProgress,

  // [message]
  usePopover,

  // [template]
  useBorder,
  menuProps, useMenu, useMenuItem,
  ricePaperProps, useRicePaper,
  formProps, useForm,
  formItemProps, useFormItem,

  // [other]
  useTaiChi,
  dividerProps, useDivider,
  loadingProps, useLoading,
};
