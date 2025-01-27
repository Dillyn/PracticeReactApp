import React from "react";
import { Anchor, AppShell } from "@mantine/core";
import { NavLink } from "@mantine/core";
import {
  IconActivity,
  IconDeviceGamepad,
  IconDownload,
  IconHome2,
  IconInfoCircle,
  IconInfoCircleFilled,
  IconPhone,
  IconSettings,
} from "@tabler/icons-react";

// Function to handle the download action with confirmation
const handleDownloadClick = (e: any) => {
  e.preventDefault(); // Prevent the default action (no immediate download)

  // Show confirmation dialog
  const userConfirmed = window.confirm(
    "Are you sure you want to download this file?"
  );

  if (userConfirmed) {
    // If the user confirms, proceed with downloading
    const link = document.createElement("a");
    link.href = "CV.pdf";
    link.download = "CV.pdf"; // Optional: specify the file name
    link.click();
  }
};

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
    icon: <IconDeviceGamepad size={32} stroke={1.5} />,
    title: "Hobbies",
    route: "/hobbies",
  },
  {
    icon: <IconPhone size={32} stroke={1.5} />,
    title: "Contact Me",
    route: "/contact",
  },
  {
    icon: <IconDownload size={32} stroke={1.5} />,
    title: (
      <Anchor
        href="#"
        onClick={(e) => handleDownloadClick(e)} // Prevent default behavior and handle download
        color="blue"
        style={{ textDecoration: "none" }}
      >
        Download My CV
      </Anchor>
    ),
    route: "/download",
  },
];
type SidebarProps = {
  setMain: (main: string) => void;
  main: string;
};
const Sidebar: React.FC<SidebarProps> = ({ setMain, main }) => {
  return (
    <AppShell.Navbar p="md">
      {links.map((link, key) => {
        const isDownloadLink = link.route === "/download";
        return (
          <NavLink
          key={key}
            leftSection={link.icon}
            active={main === link.route && !isDownloadLink} // Prevent marking 'Download My CV' link as active
            onClick={() => {
              // Skip setting active state for the download link
              if (!isDownloadLink) {
                setMain(link.route);
              }
            }}
            label={link.title}
          />
        );
      })}
    </AppShell.Navbar>
  );
};

export default Sidebar;
