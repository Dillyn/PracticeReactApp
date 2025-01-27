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
import Settings from "./routes/HobbiesPage/Hobbies";
import { BarChart } from "@mantine/charts";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import Home from "./routes/Home/Home";
import Details from "./routes/Details/Details";
import Hobbies from "./routes/HobbiesPage/Hobbies";
import ContactMe from "./routes/ContactPage/ContactMe";

function App() {
  const [opened, { toggle }] = useDisclosure(false);

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

      <AppShell.Main
        style={{
          width: "100vw",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(lightblue ,white )",
        }}
      >
        {main === "/" ? (
          <Home setMain={setMain} />
        ) : main === "/details" ? (
          <Details setMain={setMain} />
        ) : main === "/hobbies" ? (
          <Hobbies setMain={setMain} />
        ) : (
          <ContactMe />
        )}
      </AppShell.Main>
    </AppShell>
  );
}
export default App;
