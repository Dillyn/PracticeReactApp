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
    <Container className="hobbies-main">
      <Card 
        style={{
          backgroundColor: "white",
          height: "60%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexGrow: 0,
        }}
      >
        <div style={{ height: "50%", width: "50%"}}>
          <div style={{width:"100%", height:"100%", alignSelf:"flex-start", marginRight:"100px"}}>
          <Image fit="fill"  src="/online-gaming.jpg" style={{  height: "100%", width: "100%"}}  />
          </div>
          <div style={{ marginTop:"4%",  paddingLeft:"15px", paddingRight:"15px", textAlign:"justify"}}>
          <Title >My Online Gaming Hobby</Title>
          <Text size="md"  >
            Online gaming has become a major part of my life, providing a fun
            and exciting escape. Whether I'm teaming up with 
            friends or
            challenging myself in competitive matches, gaming gives me a sense
            of achievement and connection. I love exploring new virtual worlds,
            taking on tough challenges, and sometimes just unwinding with a
            casual game. 
          </Text>
          </div>
        </div>
        <div style={{ height: "50%", width: "50%" }}>
          <div style={{ height: "100%", width: "100%",paddingTop:"4%",  paddingLeft:"15px", paddingRight:"15px", textAlign:"justify"  }}>
          <Title>My Online Gaming Hobby</Title>
          <Text>
            Online gaming has become a major part of my life, providing a fun
            and exciting escape. Whether I'm teaming up with friends or
            challenging myself in competitive matches, gaming gives me a sense
            of achievement and connection. I love exploring new virtual worlds,
            taking on tough challenges, and sometimes just unwinding with a
            casual game. The gaming community has been a great way for me to
            meet new people and share experiences.
          </Text>
          </div>

          <div>
          <Image fit="contain" src="/hike.jpg" style={{width:"105%"}} />
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Hobbies;
