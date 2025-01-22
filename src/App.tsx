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
import Settings from "./routes/Hobbies";
import { BarChart } from "@mantine/charts";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Hobbies from "./routes/Hobbies";
import ContactMe from "./routes/ContactMe";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const [main, setMain] = useState("/");

  const routeComponents = {
    "/": <Home setMain={setMain} />,
    "/details": <Details setMain={setMain} />,
    "/hobbies": <Hobbies setMain={setMain} />,
    "/contact": <ContactMe setMain={setMain} />,
  };
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
        ) : main === "/details" ? (
          <Details setMain={setMain} />
        ) : main ==="/hobbies" ? (
          <Hobbies setMain={setMain}/>
        ): (
          <ContactMe setMain={function (main: string): void {
                  throw new Error("Function not implemented.");
                } } />
      )}
        <div
          style={{ background: "url(/background.svg)", opacity: "40%" }}
        ></div>
      </AppShell.Main>
    </AppShell>
  );
}
export default App;
