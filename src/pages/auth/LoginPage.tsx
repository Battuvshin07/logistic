import { Button, Form, Input } from "antd";
import { useLocale } from "../../providers/LocaleProvider";
import { useRequest } from "ahooks";
import { auth } from "../../api";

export default function LoginPage() {
  const { locale } = useLocale();
  const { run } = useRequest(auth.login, {
    manual: true,
    onSuccess(response) {
      console.log(response);
    },
  });
  return (
    <>
      <Form title={locale.login.title} layout="vertical" onFinish={run}>
        <Form.Item
          label={locale.login.email}
          name="email"
          rules={[
            { required: true, message: locale.login.validate.required.email },
            { type: "email", message: locale.login.validate.email },
          ]}
        >
          <Input placeholder="example@mail.com" />
        </Form.Item>
        <Form.Item
          label={locale.login.password}
          name="password"
          rules={[
            {
              required: true,
              message: locale.login.validate.required.password,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {locale.login.submit}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
