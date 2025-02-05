import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-components";
import { useLocale } from "../../providers/LocaleProvider";
import { Button } from "antd";
import { auth } from "../../api";
import { useRequest } from "ahooks";

export default function SignupPage() {
  const { locale } = useLocale();
  const { runAsync } = useRequest(
    (value) => auth.signup(value).then(console.log),
    {
      manual: true,
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
                {locale.signup.submit}
              </Button>
            );
          },
        }}
      >
        <ProFormGroup title={locale.signup.title}>
          <ProFormText
            name="email"
            label={locale.signup.email}
            rules={[
              {
                required: true,
                message: locale.signup.validate.required.email,
              },
              { type: "email", message: locale.signup.validate.email },
            ]}
          />
          <ProFormText
            name="fullName"
            label={locale.signup.fullName}
            rules={[
              {
                required: true,
                message: locale.signup.validate.required.fullName,
              },
              { min: 4, message: locale.signup.validate.minimum.fullName },
            ]}
          />
          <ProFormText
            name="phoneNumber"
            label={locale.signup.phoneNumber}
            rules={[
              {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: locale.signup.validate.phoneNumber,
              },
            ]}
          />
          <ProFormText
            name="password"
            label={locale.signup.password}
            rules={[
              {
                required: true,
                message: locale.signup.validate.required.password,
              },
              { min: 8, message: locale.signup.validate.minimum.password },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])$/,
                message: locale.signup.validate.password,
              },
            ]}
          />
        </ProFormGroup>
      </ProForm>
    </>
  );
}
