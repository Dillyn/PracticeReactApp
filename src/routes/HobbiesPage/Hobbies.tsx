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
import { hobbies, hobby1, hobby2 } from "./data";

const Hobbies = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <Card className="hobbies-card">
      {hobbies.map((hobby, key) => {
        const isEven = Boolean(hobbies.indexOf(hobby) % 2);
        console.log("isEven", isEven);
        return (
          <div
            key={key}
            className={`hobbies-content ${isEven ? "hobbies-left" : "hobbies-right"}`}
          >
            <div className="image-container">
              <Image src={hobby.image} />
            </div>
            <div className="text-container">
              <Title>{hobby.title}</Title>
              <Text size="md">{hobby.content}</Text>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default Hobbies;
