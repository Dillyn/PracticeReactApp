import {
  Button,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  Image,
  Title,
  Text
} from "@mantine/core";
import React from "react";
//import { Button } from '../components/Button'
import { useNavigate } from "react-router";

const Hobbies = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <Container className="hobbies-main">
      <Card
        style={{
          backgroundColor: "yellow",
          height: "80%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "50%" }}>
          <Image src="/online-gaming.jpg" />
          <Title>My Online Gaming Hobby</Title>
          <Text>
            Online gaming has become a major part of my life, providing a fun
            and exciting escape. Whether I'm teaming up with friends or
            challenging myself in competitive matches, gaming gives me a sense
            of achievement and connection. I love exploring new virtual worlds,
            taking on tough challenges, and sometimes just unwinding with a
            casual game. The gaming community has been a great way for me to
            meet new people and share experiences. With technology constantly
            improving, there's always something fresh to look forward to, making
            my gaming hobby even more enjoyable.
          </Text>
        </div>
        <div>cheese</div>
      </Card>
    </Container>
  );
};

export default Hobbies;
