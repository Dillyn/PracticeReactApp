import {
  Button,
  Card,
  Divider,
  Paper,
  Text,
  Image,
  Center,
  Flex,
} from "@mantine/core";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";
import React from "react";
//import { Button } from '../components/Button'
import { useNavigate } from "react-router";

const Home = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <div
      style={{
        height: "calc(100vh - 40px)",
        width: "calc(100vw - 412px)",
        backgroundColor: "rgba(75, 136, 197, 0.998)",
        background: "linear-gradient(125deg,lightblue ,white )",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          shadow="1px 0px 27px 0px rgba(0,0,0,0.2)"
          p="xl"
          radius="xl"
          className="main-container"
        >
          <div className="main-container-column">
            <div
              style={{
                paddingTop: "100px",
                paddingLeft: "50px",
                lineHeight: "2.8",
              }}
            >
              <Text className="" h="64px" size="68px" fw={900} c={"black"}>
                I Build Custom
              </Text>
              <Text
                h="64px"
                size="68px"
                fw={900}
                variant="gradient"
                gradient={{ from: "black", to: "black", deg: 360 }}
              >
                Web Solutions
              </Text>
              <Text h="64px" size="68px" fw={900} c={"black"}>
                That Help Your
              </Text>
              <Text
                span
                h="70px"
                size="80px"
                fw={900}
                variant="gradient"
                gradient={{ from: "blue", to: "indigo", deg: 90 }}
              >
                Business Grow
              </Text>
              <Text
                c={"black"}
                size="16px"
                fw={450}
                style={{ paddingTop: "15px" }}
              >
                I help you increase conversion and performance in every possible
                way.
              </Text>

              <Button
                w={"500px"}
                variant="filled"
                rightSection={<IconArrowRight size={32} />}
                onClick={() => setMain("/details")}
                size="xl"
                radius="md"
                style={{ marginTop: "25px" }}
              >
                View Details Page
              </Button>
            </div>
            <div>
              <Image
                radius={400}
                height={800}
                w={640}
                src="/profile.jpg"
                alt="profile picture"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
