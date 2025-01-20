import React from "react";
import { useNavigate } from "react-router";
import { AppShell } from "@mantine/core";
import { NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";

const links = [
  {
    icon: <IconHome2 size={16} stroke={1.5} />,
    title: "home",
    route: "/",
  },
  {
    title: "profile",
    route: "/profile",
  },
  {
    title: "settings",
    route: "/settings",
  },
];
type SidebarProps = {
  setMain: (main: string) => void;
  main: string;
};
const Sidebar: React.FC<SidebarProps> = ({ setMain, main }) => {
  let navigate = useNavigate();
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
