import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TagOutlined,
  SettingOutlined,
  TeamOutlined,
  GlobalOutlined,
  BarChartOutlined,
  TransactionOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu  style={{padding:"15px",fontSize:"15px"}}
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Products",
            key: "/product-list",
            icon: <InboxOutlined />,
          },

          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <TeamOutlined />,
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Users",
            key: "/user-list",
            icon: <UserOutlined />,
          },

          {
            label: "Statistics",
            key: "/ ",
            icon: <BarChartOutlined />,
          },

          {
            label: "Transactions",
            key: "/ ",
            icon: <TransactionOutlined />,
          },
          {
            label: "Sellers",
            key: "/ ",
            icon: <GlobalOutlined />,
          },
          {
            label: "Hot Offers",
            key: "/ ",
            icon: <TagOutlined />,
          },

          {
            label: "Settings",
            key: "/ ",
            icon: <SettingOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
