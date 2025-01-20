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

const data = [
  { language: "Python", years: 5 },
  { language: "JavaScript", years: 4 },
  { language: "Java", years: 3 },
  { language: "C++", years: 2 },
  { language: "Go", years: 1 },
  { language: "Ruby", years: 1 },
];
const groceries = [
  {
    emoji: "📚",
    value: "Education",
    description: (
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="High School">
          <Text c="dimmed" size="sm">
            Cape Town High
          </Text>
          <Text size="xs" mt={4}>
            2016-2020
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="University">
          <Text c="dimmed" size="sm">
            Cape Peninsula University of Technology
          </Text>
          <Text size="xs" mt={4}>
            2021-2025
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconGitCommit size={12} />}
          title="Super University"
        >
          <Text c="dimmed" size="sm">
            Udemy
          </Text>
          <Text size="xs" mt={4}>
            2025 - present
          </Text>
        </Timeline.Item>
      </Timeline>
    ),
  },
  {
    emoji: "💻",
    value: "Work Experience",
    description: (
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<IconGitBranch size={12} />}
          title="Free Lancing"
        >
          <Text c="dimmed" size="sm">
            Java Developer
          </Text>
          <Text size="xs" mt={4}>
            2024-2025
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconGitCommit size={12} />}
          title="Devloper Intern"
        >
          <Text c="dimmed" size="sm">
            Full Stack intern
          </Text>
          <Text size="xs" mt={4}>
            2025-2026
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconGitCommit size={12} />}
          title="Full Stack Developer"
        >
          <Text c="dimmed" size="sm">
            Junior Developer
          </Text>
          <Text size="xs" mt={4}>
            2026 -
          </Text>
        </Timeline.Item>
      </Timeline>
    ),
  },
];
function App() {
  console.log("hello");
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
type HomeProps = {
  setMain: (main: string) => void;
};
const Home: React.FC<HomeProps> = ({ setMain }) => {
  return (
    <Card shadow="sm" radius="md" className="outer-container">
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{
          width: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Section>
            <Image src="/profile.jpg" height={450} alt="profile picture" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Profile</Text>
            <Badge variant="light" color="pink">
              Open to New Roles
            </Badge>
          </Group>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Dillyn Lakey</Text>
            <Text size="sm" c="dimmed">
              084 2654 522
            </Text>
          </div>
          <Group>
            <Text>dillyn32lakey23@gmail.com</Text>
          </Group>
        </div>
        <div>
          <Blockquote
            style={{ height: "90%", marginTop: "10px", marginBottom: "10px" }}
          >
            {/* <Paper shadow="md" p="xl" style={{ marginBottom: "15px" }}>A */}
            A passionate developer skilled in building sleek UIs with React.js
            and scalable backends with Node.js. Expert in JavaScript/TypeScript,
            focused on clean code and solving problems efficiently. A team
            player who thrives on challenges and keeps up with the latest tech
            trends.
            {/* </Paper> */}
          </Blockquote>
        </div>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={() => setMain("/profile")}
            variant="outline"
            size="lg"
            radius="xl"
          >
            View full profile
          </Button>
        </div>
      </Card>
      <div className="second-inner-container">
        <Card className="first-second-inner-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text>Programming language experience in years</Text>
            <BarChart
              yAxisLabel="Years"
              xAxisLabel="Languages"
              h={300}
              data={data}
              dataKey="language" // X-axis labels
              series={[{ name: "years", color: "blue" }]}
              styles={{
                axis: { fontSize: "20px" }, // Axis labels
                tooltip: { fontSize: "12px" },
              }}
            />
          </div>
        </Card>
        <Card className="second-second-inner-container">
          <Title size={"16px"}>Work Experience:</Title>
          <Text>
            As a freelance developer, I’ve delivered custom web and mobile
            applications, specializing in both frontend and backend development.
            I’ve worked on various projects, including e-commerce platforms and
            content management systems, using technologies like React, Node.js,
            and PHP to create responsive, user-friendly solutions.
          </Text>
          <Title size={"16px"} style={{ marginTop: "10px" }}>
            Education:
          </Title>
          <Text>
            I’m currently studying Application Development at Cape Peninsula
            University, where I’ve gained a solid foundation in programming,
            software development, and building efficient applications.
          </Text>

          <Divider style={{ marginTop: "25px" }} />
          <Accordion style={{ overflowY: "scroll" }}>
            {groceries.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control icon={item.emoji}>
                  {item.value}
                </Accordion.Control>
                <Accordion.Panel>{item.description}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card>
      </div>
    </Card>
  );
};
export default App;
