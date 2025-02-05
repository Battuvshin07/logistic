import { useRequest } from "ahooks";
import { auth } from "@/api";
import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { Button } from "antd";

export default function LoginPage() {
  const { runAsync } = useRequest(
    (value) => auth.login(value).then(console.log),
    {
      manual: true,
      onSuccess(response) {
        console.log(response);
      },
    }
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
                Нэвтрэх
              </Button>
            );
          },
        }}
      >
        <ProFormGroup title="Нэвтрэх">
          <ProFormText
            rules={[{ required: true }, { type: "email" }]}
            width="md"
            name="email"
            label={"И-мэйл"}
          />
          <ProFormText
            width="md"
            name="password"
            label={"Нууц үг"}
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProFormGroup>
      </ProForm>
    </>
  );
}
