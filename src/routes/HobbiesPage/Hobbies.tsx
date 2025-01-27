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
import "./HobbiesStyle.css";
import { hobby1, hobby2 } from "./data";

const Hobbies = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <Card className="hobbies-card">
      <div className="hobbies-left">
        <div className="image-container">
          <Image src="/online-gaming.jpg" />
        </div>
        <div className="text-container">
          <Title>My Online Gaming Hobby</Title>
          <Text size="md">{hobby1}</Text>
        </div>
      </div>
      <div className="hobbies-right">
        <div className="text-container">
          <Title>My Hiking Journey</Title>
          <Text size="md">{hobby2}</Text>
        </div>
        <div className="image-container">
          <Image src="/hike.jpg" />
        </div>
      </div>
    </Card>
  );
};

export default Hobbies;
