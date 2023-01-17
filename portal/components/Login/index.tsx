import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { login, signup } from "../../store/reducers/auth";

interface Params {
  email: string;
  password: string;
}

const Login: React.FC = (props: any) => {
  const dispatch: (arg: any) => void = useDispatch();

  const onFinish = (values: Params) => {
    if(!!props.addUser) {
      // @ts-ignore
      dispatch(signup(values));
      return props.onAddUser();
    } else {
      // @ts-ignore
      dispatch(login(values));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {props.addUser && (
        <Form.Item
          label="Name"
          name="name"
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
