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

import { useState } from "react";

import { BarChart } from "@mantine/charts";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import { blockText, educationText, experienceText } from "./Data/data";
import { accordionData } from "./Data/detailsData";
// Sample data for programming language experience (years)
const data = [
  { language: "Python", years: 5 },
  { language: "JavaScript", years: 4 },
  { language: "Java", years: 3 },
  { language: "C++", years: 2 },
  { language: "Go", years: 1 },
  { language: "Ruby", years: 1 },
];

// The Details component accepts a prop "setMain" for navigation
type DetailsProps = {
  setMain: (main: string) => void;
};

const Details: React.FC<DetailsProps> = ({ setMain }) => {
  return (
    // Outer Card container with shadow and border
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
          justifyContent: "space-between", // Distribute space evenly between child elements
        }}
      >
        <div>
          {/* Profile image */}
          <Card.Section>
            <Image src="/profile.jpg" height={450} alt="profile picture" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Profile</Text>
            <Badge variant="light" color="pink">
              Open to New Roles
            </Badge>
          </Group>

          {/* Contact Info */}
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

        {/* Short description about the profile */}
        <div>
          <Blockquote
            style={{ height: "90%", marginTop: "10px", marginBottom: "10px" }}
          >
            {blockText}
          </Blockquote>
        </div>

        {/* Contact button for reaching out */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={() => setMain("/contact")} // Navigates to the profile page
            variant="outline"
            size="lg"
            radius="xl"
          >
            Contact Me
          </Button>
        </div>
      </Card>

      {/* Section for programming language experience chart */}
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
              h={250}
              data={data}
              dataKey="language"
              series={[{ name: "years", color: "blue" }]}
              styles={{
                axis: { fontSize: "20px" },
                tooltip: { fontSize: "12px" },
              }}
            />
          </div>
        </Card>

        {/* Section for work experience and education */}
        <Card className="second-second-inner-container">
          <Title size={"16px"}>Work Experience:</Title>
          <Text>{experienceText}</Text>

          <Title size={"16px"} style={{ marginTop: "10px" }}>
            Education:
          </Title>
          <Text>{educationText}</Text>

          <Divider style={{ marginTop: "25px" }} />

          {/* Accordion component for detailed education and work experience timeline */}
          <Accordion style={{ overflowY: "scroll" }}>
            {accordionData.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control icon={item.emoji}>
                  {item.value}
                </Accordion.Control>
                <Accordion.Panel> {item.description}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card>
      </div>
    </Card>
  );
};

export default Details;
