import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { Button, message } from "antd";
import { auth } from "@/api";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router";
import { SignupResponseError } from "@/api/errors";

export default function SignupPage() {
  const navigate = useNavigate();
  const { runAsync, loading } = useRequest(
    async (value) => {
      await auth.signup(value);
      navigate("/dashboard");
    },
    {
      manual: true,
      onError(e) {
        switch (e.message) {
          case SignupResponseError.AlreadyExist:
            message.error("И-Мэйл аль хэдийн бүртгүүлсэн байна");
            break;
          default:
            message.error(`Unknown error ${e.message}`);
        }
      },
    }
  );

  return (
    <>
      <ProForm
        layout="vertical"
        disabled={loading}
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
