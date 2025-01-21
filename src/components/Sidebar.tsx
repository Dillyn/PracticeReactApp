import React from "react";
import { AppShell } from "@mantine/core";
import { NavLink } from "@mantine/core";
import {
  IconHome2,
  IconInfoCircle,
  IconInfoCircleFilled,
  IconSettings,
} from "@tabler/icons-react";


const links = [
  {
    icon: <IconHome2 size={32} stroke={1.5} />,
    title: "Home",
    route: "/",
  },
  {
    icon: <IconInfoCircle size={32} stroke={1.5} />,
    title: "Details",
    route: "/details",
  },
  {
    icon: <IconSettings size={32} stroke={1.5}/>,
    title: "Settings",
    route: "/settings",
  },
];
type SidebarProps = {
  setMain: (main: string) => void;
  main: string;
};
const Sidebar: React.FC<SidebarProps> = ({ setMain, main }) => {
  return (
    <AppShell.Navbar p="md">
      {links.map((link) => {
        return (
          <NavLink
            leftSection={link.icon}
            active={main === link.route}
            href="#required-for-focus"
            onClick={() => setMain(link.route)}
            label={link.title}
          />
        );
      })}
    </AppShell.Navbar>
  );
};

export default Sidebar;
