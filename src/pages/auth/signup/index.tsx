import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { Button } from "antd";
import { auth } from "@/api";
import { useRequest } from "ahooks";

export default function SignupPage() {
  const { runAsync } = useRequest(
    (value) => auth.signup(value).then(console.log),
    { manual: true }
  );

  return (
    <>
      <ProForm
        layout="vertical"
        onFinish={runAsync}
        submitter={{
          render({ submit }) {
            return (
              <Button type="primary" htmlType="submit" onClick={submit}>
                Бүртгүүлэх
              </Button>
            );
          },
        }}
      >
        <ProFormGroup title="Бүртгүүлэх" direction="vertical">
          <ProFormText
            name="email"
            label="И-мэйл"
            rules={[{ required: true }, { type: "email" }]}
          />
          <ProFormText
            name="fullName"
            label="Овог нэр"
            rules={[{ required: true }, { min: 4 }]}
          />
          <ProFormText
            name="phoneNumber"
            label="Утасны дугаар"
            rules={[
              {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: "Утасны дугаар буруу байна",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            label="Нууц үг"
            rules={[{ required: true }, { min: 8 }]}
          />
        </ProFormGroup>
      </ProForm>
    </>
  );
}
