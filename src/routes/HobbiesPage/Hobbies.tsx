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
// import { hobbies as initialHobbies } from "./data"; // Import existing hobbies
import "./HobbiesStyle.css";
import { QueryClient, useQueries, useQuery } from "@tanstack/react-query";
import {getTestHobby } from "./queries/query";

const Hobbies = ({ setMain }: { setMain: (main: string) => void }) => {
  // State to manage hobbies

  const { data: hobbies, error } = useQuery(
    {
    queryKey: ["testHobby"],
    queryFn: getTestHobby,
  },
);


  // Hardcoded new hobby
  const newHobby = {
    title: "Photography",
    content:
      "Photography allows me to capture the world around me, freezing moments in time and creating memories that last forever.",
    image: "/photography.jpg",
  };

  // Add hardcoded new hobby to the list
  // const addHobby = () => {
  //   setHobbies([...hobbies, newHobby]);
  // };

  return (
    <div>
      {/* Button to add the hardcoded hobby */}
      {/* <Button onClick={addHobby} style={{ marginBottom: "20px" }}>
        Add Photography Hobby
      </Button> */}
      {/* {testHobby?.map((hobby,key) => {
        return (
          <>
          <Text> {hobby.id}</Text>
          <Text> {hobby.name}</Text>
          <Text> {hobby.surname}</Text>
           </>
        )

      })} */}
      {/* <Button
        style={{ marginBottom: "20px" }}
        onClick={() => console.log(testHobby)}
      >
        Get all users
      </Button> */}

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
