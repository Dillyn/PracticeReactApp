import { IconGitBranch, IconGitCommit } from "@tabler/icons-react";
import { Timeline, Text } from "@mantine/core";
import { timelineItem } from "./data";

// Define the timeline data dynamically (education)

export const educationTimelineData: timelineItem[] = [
  {
    title: "High School",
    description: "Cape Town High School",
    dateRange: "2016-2020",
    bullet: <IconGitBranch />,
  },
  {
    title: "University",
    description: "Cape Peninsula University of Technology",
    dateRange: "2021-2025",
    bullet: <IconGitCommit size={12} />,
  },
  {
    title: "Super University",
    description: "Udemy",
    dateRange: "2025-Present",
    bullet: <IconGitCommit size={12} />,
  },
];

export const experienceTimelineData: timelineItem[] = [
  {
    bullet: <IconGitBranch size={12} />,
    title: "Free Lancing",
    description: "Java Developer",
    dateRange: "2024-2025",
  },
  {
    bullet: <IconGitCommit size={12} />,
    title: "Developer Intern",
    description: "Full Stack intern",
    dateRange: "2025-2026",
  },
  {
    bullet: <IconGitCommit size={12} />,
    title: "Full Stack Developer",
    description: "Junior Developer",
    dateRange: "2026 - present",
  },
];

// Data for accordion items (timeline for education and work experience)
export const accordionData = [
  {
    emoji: "📚",
    value: "Education",
    description: (
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        {/*builds timeline item component data dynamically */}
        {educationTimelineData.map((item, index) => (
          <Timeline.Item key={index} bullet={item.bullet} title={item.title}>
            <Text c="dimmed" size="sm">
              {item.description}
            </Text>
            <Text size="xs" mt={4}>
              {item.dateRange}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    ),
  },
  {
    emoji: "💻",
    value: "Work Experience",
    description: (
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        {/*builds timeline item  component data dynamically */}
        {experienceTimelineData.map((item, index) => (
          <Timeline.Item key={index} bullet={item.bullet} title={item.title}>
            <Text c="dimmed" size="sm">
              {item.description}
            </Text>
            <Text size="xs" mt={4}>
              {item.dateRange}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    ),
  },
];
