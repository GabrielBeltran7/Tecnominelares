import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import style from "./DropdownComp.module.css";
const onClick = ({ key }) => {
  
};
const items = [
  {
    label: (
      <a className={style.submenu} href={`/servicios/1`}>
        Descapotaje
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a className={style.submenu} href="/servicios/2">
        Excavacion
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a className={style.submenu} href="/servicios/3">
        Escombros
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a className={style.submenu} href="/servicios/4">
        Demolicion
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a className={style.submenu} href="/servicios/5">
        Alquiler de maquinaria
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a className={style.submenu} href="/servicios/6">
        Disposición
      </a>
    ),
    key: "6",
  },
];
const DropdownComp = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Servicios
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownComp;
