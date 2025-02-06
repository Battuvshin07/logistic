import { useRequest } from "ahooks";
import { auth } from "@/api";
import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { Button } from "antd";
import { useUser } from "@/providers/user";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const { setToken } = useUser();
  const navigate = useNavigate();
  const { runAsync, loading } = useRequest(
    async (value: auth.Login) => {
      const res = await auth.login(value);
      if (!res.ok) throw res.error;
      setToken(res.data);
      navigate("/dashboard");
    },
    {
      manual: true,
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return (
    <>
      <ProForm
        layout="vertical"
        onFinish={runAsync}
        loading={loading}
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
          <ProFormText.Password
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
