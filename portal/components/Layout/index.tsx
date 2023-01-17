import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, Space, Tooltip, theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "../Calendar";
import Users from "../Users";
import Form from "../Form";
import { state, logOut } from "../../store/reducers/auth";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Calendar",
    key: "1",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Users",
    key: "2",
    icon: <MailOutlined />,
  },
];

const AppLayout: React.FC = () => {
  const { isAuthenticated } = useSelector(state);
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const logoutHandler = () => {
    dispatch(logOut())
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu
          style={{ width: "75%" }}
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        {isAuthenticated && <Space>
          <Tooltip title="logout">
            <Button icon={<LogoutOutlined />} onClick={logoutHandler} />
          </Tooltip>
        </Space>}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {!isAuthenticated && <Form />}
            {isAuthenticated && current === "1" && <Calendar />}
            {isAuthenticated && current === "2" && <Users />}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AppLayout;
