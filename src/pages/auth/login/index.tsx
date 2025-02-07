import { useRequest } from "ahooks";
import { auth } from "@/api";
import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { Button, message } from "antd";
import { useNavigate } from "react-router";
import { LoginResponseError } from "@/api/errors";

export default function LoginPage() {
  const navigate = useNavigate();
  const { runAsync, loading } = useRequest(
    async (value) => {
      await auth.login(value);
      navigate("/dashboard");
    },
    {
      manual: true,
      onError: (e) => {
        switch (e.message) {
          case LoginResponseError.NotFound:
            message.error("И-мэйл эсвэл нууц үг буруу байна");
            break;
          default:
            message.error(`Unknown error ${e.message}`);
            console.error(e);
        }
      },
    }
  );

  return (
    <>
      <ProForm
        layout="vertical"
        onFinish={runAsync}
        disabled={loading}
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
