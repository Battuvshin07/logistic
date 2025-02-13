import { Radio } from "antd";
import { ReactNode, useState } from "react";

export type Tab = {
  value: string;
  label: string;
  children?: ReactNode;
};
type Props = {
  tabs: Tab[];
  defaultTab?: number;
};
export default function Tabs({ tabs, defaultTab = 0 }: Props) {
  const [value, setValue] = useState(tabs[defaultTab].value);
  return (
    <div className="flex flex-col gap-4">
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        {tabs.map(({ value, label }) => (
          <Radio.Button key={value} value={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
      {tabs.find((tab) => tab.value === value)?.children}
    </div>
  );
}
