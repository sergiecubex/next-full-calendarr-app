import { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Calendar from "../Calendar";
import Users from "../Users";

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {current === "1" && <Calendar />}
            {current === "2" && <Users />}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AppLayout;