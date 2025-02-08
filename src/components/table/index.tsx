import { ModalForm, ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, DatePicker, Input } from "antd";
import { useState } from "react";
import { FiEdit3, FiEye } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

export type FormProp<T> = {
  [K in keyof T]?: (value: T[K] | null) => JSX.Element;
};
type Props<T> = {
  data?: T[];
  loading?: boolean;
  columns?: ProColumns<T, "text">[];
  formElements?: FormProp<T>;
  onReload?: () => void;
  onEdit?: (value: T, newValue: any) => void;
  onNew?: (value: any) => void;
  onDelete?: (value: T) => void;
};
export default function Table<T extends Record<string, any>>({
  data,
  loading,
  columns,
  formElements,
  onEdit,
  onDelete,
  onReload,
  onNew,
}: Props<T>) {
  const [newForm, setNewForm] = useState(false);
  const [editForm, setEditForm] = useState<number | null>(null);

  return (
    <ProTable<T>
      loading={loading}
      rowKey="id"
      dataSource={data}
      columns={
        columns && [
          ...columns,
          {
            title: "Үйлдэл",
            render: (_, record) => (
              <div className="flex gap-8">
                <Button icon={<FiEye />} type="default" />
                <Button
                  icon={<FiEdit3 />}
                  type="default"
                  onClick={() => setEditForm(record.id)}
                />
                <Button
                  icon={<LuCircleMinus />}
                  onClick={() => onDelete?.(record)}
                  type="default"
                  danger
                />
              </div>
            ),
          },
        ]
      }
      search={false}
      options={false}
      headerTitle={
        <div className="flex gap-8 items-center">
          <p>Нийт: ({data?.length})</p>
          <DatePicker.RangePicker />
        </div>
      }
      toolBarRender={() => [
        <Input.Search placeholder="Хайх" />,
        <Button icon={<TbReload />} type="default" onClick={onReload}></Button>,
        <Button
          icon={<IoMdAdd />}
          type="primary"
          onClick={() => setNewForm(true)}
        >
          Нэмэх
        </Button>,
      ]}
    >
      {formElements && editForm !== null && (
        <ModalForm
          open
          onOpenChange={(open) => setEditForm(open ? editForm : null)}
          onFinish={async (value) => onEdit?.(data![editForm], value)}
          title="Засах"
        >
          {Object.entries(formElements).map(([key, element]) =>
            element(data![editForm][key])
          )}
        </ModalForm>
      )}
      {formElements && newForm && (
        <ModalForm
          open
          onOpenChange={setNewForm}
          title="Нэмэх"
          onFinish={async (value) => onNew?.(value)}
        >
          {Object.values(formElements).map((element) => element())}
        </ModalForm>
      )}
    </ProTable>
  );
}
