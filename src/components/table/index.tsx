import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, DatePicker, Input } from "antd";
import { IoMdAdd } from "react-icons/io";
import { TbReload } from "react-icons/tb";

type Props<T> = {
  data: T[];
  columns: ProColumns<T, "text">[];
};
export default function Table<T extends Record<string, any>>({
  data,
  columns,
}: Props<T>) {
  return (
    <ProTable<T>
      rowKey="id"
      dataSource={data}
      columns={columns}
      search={false}
      options={false}
      headerTitle={
        <div className="flex gap-8 items-center">
          <p>Нийт: ({data.length})</p>
          <DatePicker.RangePicker />
        </div>
      }
      toolBarRender={() => [
        <Input.Search placeholder="Хайх" />,
        <Button icon={<TbReload />} type="default" onClick={() => {}}></Button>,
        <Button icon={<IoMdAdd />} type="primary">
          Нэмэх
        </Button>,
      ]}
    />
  );
}
