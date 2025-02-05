import { useLocale } from "../../providers/LocaleProvider";
import { useRequest } from "ahooks";
import { auth } from "../../api";
import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { Button } from "antd";

export default function LoginPage() {
  const { locale } = useLocale();
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
                {locale.login.submit}
              </Button>
            );
          },
        }}
      >
        <ProFormGroup title={locale.login.title}>
          <ProFormText
            rules={[
              { required: true, message: locale.login.validate.required.email },
              { type: "email", message: locale.login.validate.email },
            ]}
            width="md"
            name="email"
            label={locale.login.email}
          />
          <ProFormText
            width="md"
            name="password"
            label={locale.login.password}
            rules={[
              {
                required: true,
                message: locale.login.validate.required.password,
              },
            ]}
          />
        </ProFormGroup>
      </ProForm>
    </>
  );
}
