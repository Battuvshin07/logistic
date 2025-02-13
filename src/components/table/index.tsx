import { ProColumns, ProTable } from "@ant-design/pro-components";
import { useRequest } from "ahooks";
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
  columns?: ProColumns<T, "text">[];
  form?: FC<FormProps<T>>;
  onData?: () => Promise<T[]>;
  onDelete?: (value: T) => Promise<void>;
  onEdit?: (value: T, formValue: Record<string, any>) => Promise<void>;
  onAdd?: (value: Record<string, any>) => Promise<void>;
};
export default function Table<T extends Record<string, any>>({
  columns,
  form: FormFC,
  onDelete,
  onData,
  onEdit,
  onAdd,
}: Props<T>) {
  const [editForm, setEditForm] = useState<T | null>(null);
  const [newForm, setNewForm] = useState(false);
  const {
    loading,
    run: requestData,
    data,
  } = useRequest(async () => onData && (await onData()), {
    refreshDeps: [onData],
  });
  const { loading: deleting, run: runDelete } = useRequest(
    async (value: T) => onDelete && (await onDelete(value)),
    {
      manual: true,
      refreshDeps: [onDelete],
    }
  );
  const runForm = async (
    formPromise: Promise<void>,
    successMessage: string
  ) => {
    try {
      await formPromise;
      message.success(successMessage);
      requestData();
      setNewForm(false);
      setEditForm(null);
    } catch (e) {
      console.error(e);
      message.error("Алдаа гарлаа");
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
            fixed: "right",
            render: (_, record) => (
              <div className="flex gap-4">
                <Button icon={<FiEye />} type="default" />
                <Button
                  icon={<FiEdit3 />}
                  type="default"
                  style={{ aspectRatio: 1 }}
                  onClick={() => setEditForm(record)}
                >
                  {FormFC && editForm === record && (
                    <FormFC
                      open
                      onFinish={async (value) =>
                        onEdit &&
                        (await runForm(
                          onEdit(record, value),
                          "Амжилттай өөрчиллөө"
                        ))
                      }
                      onCancel={() => setEditForm(null)}
                      value={record}
                    />
                  )}
                </Button>
                <Button
                  icon={<LuCircleMinus />}
                  onClick={() => runDelete(record)}
                  loading={deleting}
                  type="default"
                  className="aspect-square"
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
          <p>Нийт ({data?.length})</p>
          <DatePicker.RangePicker />
        </div>
      }
      toolBarRender={() => [
        <Input.Search placeholder="Хайх" />,
        <Button
          icon={<TbReload />}
          onClick={requestData}
          loading={loading}
          className="aspect-square"
          type="default"
        />,
        <Button
          icon={<IoMdAdd />}
          type="primary"
          loading={loading}
          onClick={() => setNewForm(true)}
        >
          Нэмэх
          {FormFC && newForm && (
            <FormFC
              open
              onFinish={async (value) =>
                onAdd && (await runForm(onAdd(value), "Амжилттай нэмлээ"))
              }
              onCancel={() => setNewForm(false)}
            />
          )}
        </Button>,
      ]}
    />
  );
}
