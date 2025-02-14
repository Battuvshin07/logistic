import { FormProps } from "@/components/table";
import { ModalForm, ProFormText } from "@ant-design/pro-components";

export default function Form({
  value,
  open,
  onCancel,
  onFinish,
}: FormProps<any>) {
  return (
    <ModalForm open={open}>
      <div className="flex gap-8">
        <ProFormText
          label="Товчлол"
          name="abbreviation"
          initialValue={value?.abbreviation}
          required
        />
        <ProFormText
          label="Компаны нэр"
          name="companyName"
          initialValue={value?.companyName}
          required
        />
      </div>
    </ModalForm>
  );
}
