import React, { useState, useEffect } from 'react';
import { SelectInput } from 'tdesign-react';
import { ChevronDownIcon } from 'tdesign-icons-react';

import type { SelectInputValueChangeContext } from 'tdesign-react';

const classStyles = `
<style>
.tdesign-demo__select-input-ul-auto-width {
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__select-input-ul-auto-width > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-auto-width > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`;

const OPTIONS = [
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default function SelectInputAutocomplete() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectValue, setSelectValue] = useState({ label: 'tdesign-vue', value: 1 });

  const onOptionClick = (item: { label: string; value: number }) => {
    setSelectValue(item);
    setPopupVisible(false);
  };

  const onClear = () => {
    setSelectValue(undefined);
  };

  const onPopupVisibleChange = (val: boolean) => {
    setPopupVisible(val);
  };

  const onInputChange = (val: string, context: SelectInputValueChangeContext) => {
    // 过滤功能
    console.log(val, context);
  };

  useEffect(() => {
    // 添加示例代码所需样式
    document.head.insertAdjacentHTML('beforeend', classStyles);
  }, []);

  // 如果需要输入框宽度自适应，可以使用 autoWidth
  return (
    <SelectInput
      value={selectValue}
      popupVisible={popupVisible}
      placeholder="Please Select"
      clearable
      autoWidth
      allowInput
      onPopupVisibleChange={onPopupVisibleChange}
      onClear={onClear}
      onInputChange={onInputChange}
      suffixIcon={<ChevronDownIcon />}
      panel={
        <ul className="tdesign-demo__select-input-ul-auto-width">
          {OPTIONS.map((item) => (
            <li key={item.value} onClick={() => onOptionClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      }
    />
  );
}
