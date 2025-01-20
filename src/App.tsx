import {
  AppShell,
  Blockquote,
  Burger,
  Flex,
  Paper,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Timeline,
  Accordion,
  Divider,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";
import { BarChart } from "@mantine/charts";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import Home from "./routes/Home";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const [main, setMain] = useState("/");
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <Sidebar setMain={setMain} main={main} />

      <AppShell.Main>
        {main === "/" ? (
          <Home setMain={setMain} />
        ) : main === "/profile" ? (
          <Profile />
        ) : (
          <Settings />
        )}
        <div
          style={{ background: "url(/background.svg)", opacity: "40%" }}
        ></div>
      </AppShell.Main>
    </AppShell>
  );
}
export default App;
