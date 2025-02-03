import React, { useState } from "react";
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
  Modal,
  TextInput,
  Textarea,
} from "@mantine/core";

import "./HobbiesStyle.css";
import { QueryClient, useQueries, useQuery } from "@tanstack/react-query";
import { getTestHobby } from "./queries/query";

const Hobbies = ({ setMain }: { setMain: (main: string) => void }) => {
  
  const { data: hobbies, error } = useQuery({
    queryKey: ["testHobby"],
    queryFn: getTestHobby,
  });

  return (
    <div>
      <Card className="hobbies-card">
        {hobbies?.map((hobby, key) => {
          const isEven = Boolean(!(hobbies.indexOf(hobby) % 2));
          return (
            <div
              key={hobby.id}
              className={`hobbies-content ${
                isEven ? "hobbies-left" : "hobbies-right"
              }`}
            >
              <div className="image-container">
                <Image src={hobby.image} alt={hobby.title} />
              </div>
              <div className="text-container">
                <Title>{hobby.title}</Title>
                <Text size="md">{hobby.content}</Text>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Hobbies;
