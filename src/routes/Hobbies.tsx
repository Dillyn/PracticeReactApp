import {
  Button,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  Image,
  Title,
  Text,
} from "@mantine/core";
import React from "react";
//import { Button } from '../components/Button'
import { useNavigate } from "react-router";

const Hobbies = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <Card
      style={{
        backgroundColor: "rgb(243, 243, 243)",
        width: "60%",

        display: "flex",
        flexDirection: "row",
        flexGrow: 0,
        padding: 20,
      }}
    >
      <div style={{ width: "50%" }}>
        <div style={{ height: "50%" }}>
          <Image src="/online-gaming.jpg" w="100%" h="100%" />
        </div>
        <div
          style={{
            alignContent:"center",
            height: "50%",
            paddingLeft: "15px",
            paddingRight: "15px",
            
          }}
        >
          <Title>My Online Gaming Hobby</Title>
          <Text size="md">
            Online gaming has become a major part of my life, providing a fun
            and exciting escape. Whether I'm teaming up with friends or
            challenging myself in competitive matches, gaming gives me a sense
            of achievement and connection. I love exploring new virtual worlds,
            taking on tough challenges, and sometimes just unwinding with a
            casual game.
          </Text>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div
        
          style={{
            alignContent:"center",
            height: "50%",
            paddingLeft: "15px",
            paddingRight: "15px",
            
          }}
        >
          <Title>My Online Gaming Hobby</Title>
          <Text size="md">
            Online gaming has become a major part of my life, providing a fun
            and exciting escape. Whether I'm teaming up with friends or
            challenging myself in competitive matches, gaming gives me a sense
            of achievement and connection. I love exploring new virtual worlds,
            taking on tough challenges, and sometimes just unwinding with a
            casual game.
          </Text>
        </div>
        <div style={{ height: "50%" }}>
          <Image src="/hike.jpg" w="100%" h="100%" />
        </div>
      </div>
    </Card>
  );
};

export default Hobbies;
