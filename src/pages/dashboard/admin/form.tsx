import {
  ModalForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { REGISTER_BY_PROPS, ROLE_TAG_PROPS } from ".";
import { FormProps } from "@/components/table";
import { AdminTableSchema } from "@/api/admin";

function formText<T>(
  name: string,
  label: string,
  value?: T,
  rules: any[] = []
) {
  return (
    <ProFormText
      name={name}
      label={label}
      initialValue={value}
      rules={[{ required: true }, ...rules]}
    />
  );
}
function formSelect<T>(
  name: string,
  options: { value: any; label: string }[],
  fieldProps: any,
  label: string,
  value?: T,
  rules: any[] = []
) {
  return (
    <ProFormSelect
      name={name}
      label={label}
      options={options}
      fieldProps={fieldProps}
      initialValue={value}
      rules={[{ required: true, message: "Заавал сонгоно уу" }, ...rules]}
    />
  );
}

export default function AdminForm({
  value,
  open,
  onFinish,
  onCancel,
}: FormProps<AdminTableSchema>) {
  return (
    <ModalForm
      onFinish={onFinish}
      onOpenChange={(open) => !open && onCancel?.()}
      open={open}
      modalProps={{
        style: { maxWidth: "max-content" },
      }}
    >
      {formText("name", "Нэр", value?.name)}
      {formText("surname", "Овог", value?.surname)}
      {formSelect(
        "role",
        Object.entries(ROLE_TAG_PROPS).map(([value, { text }]) => ({
          label: text,
          value,
        })),
        {},
        "Үүрэг",
        value?.role
      )}
      {formText(
        "registrationNumber",
        "Регистрийн дугаар",
        value?.registrationNumber
      )}
      <ProFormDigit
        name="age"
        label="Нас"
        initialValue={value?.age}
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      />
      {formSelect(
        "isMale",
        [
          { value: true, label: "Эр" },
          { value: false, label: "Эм" },
        ],
        {},
        "Хүйс",
        value?.isMale
      )}
      {formText("email", "И-мэйл", value?.email, [{ type: "email" }])}
      {formText("phoneNumber", "Утасны дугаар", value?.phoneNumber)}
      {formSelect(
        "registeredBy",
        Object.entries(REGISTER_BY_PROPS).map(([value, text]) => ({
          value,
          label: text,
        })),
        {},
        "Бүртгэсэн ажилтан",
        value?.registeredBy
      )}
      <ProFormDatePicker
        name="registeredDate"
        label="Бүртгэсэн огноо"
        initialValue={value?.registeredDate}
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      ></ProFormDatePicker>
    </ModalForm>
  );
}
