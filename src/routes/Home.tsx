import {
  Button,
  Card,
  Divider,
  Paper,
  Text,
  Image,
  Center,
  Flex,
  Container,
} from "@mantine/core";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";
import React from "react";
//import { Button } from '../components/Button'
import { useNavigate } from "react-router";

const Home = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
   
        
          <Card
            shadow="1px 0px 27px 0px rgba(0,0,0,0.2)"
            p="xl"
            radius="xl"
          >
            <div className="main-container-column">
              <div
                style={{
                  paddingTop: "0px",
                  paddingLeft: "50px",
                }}
              >
                <Text size="xl" fw={900} c={"black"}>
                  I Build Custom
                </Text>
                <Text
                  h="64px"
                  size="xl"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "black", to: "black", deg: 360 }}
                >
                  Web Solutions
                </Text>
                <Text h="64px" size="xl" fw={900} c={"black"}>
                  That Help Your
                </Text>

                <Text
                  span
                  h="70px"
                  size="xl"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "blue", to: "indigo", deg: 90 }}
                >
                  Business Grow
                </Text>
                <Text
                  c={"black"}
                  size="xl"
                  fw={450}
                  style={{ paddingTop: "15px" }}
                >
                  I help you increase conversion and performance in every
                  possible way.
                </Text>

                <Button
                  w={"100%"}
                  variant="filled"
                  rightSection={<IconArrowRight size={32} />}
                  onClick={() => setMain("/details")}
                  size="lg"
                  radius="md"
                  style={{ marginTop: "25px" }}
                >
                  View Details Page
                </Button>
              </div>
              <div>
                <Image
                  radius={200}
                  height={400}
                  w={400}
                  src="/profile.jpg"
                  alt="profile picture"
                />
              </div>
            </div>
          </Card>
  );
};

export default Home;
