import { FormProps } from "@/components/table";
import {
  ModalForm,
  ProFormGroup,
  ProFormRadio,
  ProFormText,
} from "@ant-design/pro-components";

export default function CustomerCompanyForm({
  onFinish,
  onCancel,
  value,
  open,
}: FormProps<any>) {
  return (
    <ModalForm
      onFinish={onFinish}
      onOpenChange={(open) => !open && onCancel?.()}
      open={open}
    >
      <ProFormGroup direction="horizontal">
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
      </ProFormGroup>
      <ProFormRadio.Group
        label="Зууч эсэх?"
        name="isBroker"
        options={[
          { label: "Тийм", value: true },
          { label: "Үгүй", value: false },
        ]}
        initialValue={value?.isBroker}
      />
      <ProFormGroup direction="horizontal">
        <ProFormText
          label="Данс"
          name="account"
          initialValue={value?.account}
          required
        />
        <ProFormText
          label="Харилцах дугаар"
          name="contactNumber"
          initialValue={value?.contactNumber}
          required
        />
      </ProFormGroup>
    </ModalForm>
  );
}
