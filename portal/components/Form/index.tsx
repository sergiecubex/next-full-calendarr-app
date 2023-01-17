import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { login, addUser, updateUser } from "../../store/reducers/auth";

interface Params {
  email: string;
  password: string;
}

const Login: React.FC = (props: any) => {
  const dispatch: (arg: any) => void = useDispatch();
console.log(props.editUser)
  const onFinish = (values: Params) => {
    if (!!props.addUser) {
      // @ts-ignore
      dispatch(addUser(values));
      return props.onCloseForm();
    } else if (props.editUser) {
      // @ts-ignore
      dispatch(updateUser({...values, _id: props.editUser._id}));
      return props.onCloseForm();
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
      initialValues={props.editUser || {}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {props.addUser ||
        (props.editUser && (
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
        ))}
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
        rules={[{ required: !props.editUser, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: 20 }} onClick={() => props.onCloseForm()}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
