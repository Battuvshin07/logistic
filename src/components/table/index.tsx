import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, DatePicker, Input, message } from "antd";
import { FC, useState } from "react";
import { FiEdit3, FiEye } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

export type FormProps<T> = {
  value?: T;
  onFinish?: (value: Record<string, any>) => Promise<void>;
  onCancel?: () => void;
  open?: boolean;
};
type Props<T> = {
  data?: T[];
  loading?: boolean;
  columns?: ProColumns<T, "text">[];
  form?: FC<FormProps<T>>;
  onReload?: () => void;
  onDelete?: (value: T) => void;
  onEdit?: (value: T, formValue: Record<string, any>) => Promise<void>;
  onAdd?: (value: Record<string, any>) => Promise<void>;
};
export default function Table<T extends Record<string, any>>({
  data,
  loading,
  columns,
  form: FormFC,
  onDelete,
  onReload,
  onEdit,
  onAdd,
}: Props<T>) {
  const [editForm, setEditForm] = useState<T | null>(null);
  const [newForm, setNewForm] = useState(false);
  const runForm = async (promise: Promise<void>) => {
    try {
      await promise;
      message.success("Амжилттай");
      setEditForm(null);
      setNewForm(false);
      onReload?.();
    } catch (error: any) {
      message.error(error.message);
    }
  };

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
            align: "center",
            render: (_, record) => (
              <div className="flex gap-4">
                <Button icon={<FiEye />} type="default" />
                <Button
                  icon={<FiEdit3 />}
                  type="default"
                  style={{ aspectRatio: 1 }}
                  onClick={() => setEditForm(record)}
                >
                  {FormFC && (
                    <FormFC
                      open={editForm === record}
                      onFinish={async (value) =>
                        onEdit && (await runForm(onEdit(record, value)))
                      }
                      onCancel={() => setEditForm(null)}
                      value={record}
                    />
                  )}
                </Button>
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
          {FormFC && (
            <FormFC
              open={newForm}
              onFinish={async (value) => onAdd && (await runForm(onAdd(value)))}
              onCancel={() => setNewForm(false)}
            />
          )}
        </Button>,
      ]}
    />
  );
}
