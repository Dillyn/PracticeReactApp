import React, { useState } from "react";
import { Button, Card, Image, Title, Text, Modal } from "@mantine/core";

import "./HobbiesStyle.css";
import { useQuery } from "@tanstack/react-query";
import { getAllHobbies, getHobby } from "./queries/query";
import { useDisclosure } from "@mantine/hooks";
import { EditHobbyModal } from "./components/EditHobbyModal";

const Hobbies = () => {
  const { data: hobbies, error } = useQuery({
    queryKey: ["getAllHobbies"],
    queryFn: getAllHobbies,
  });

  const [hobbyId, setHobbyId] = useState<number | undefined>(); // State to store the ID input
  const [submittedId, setSubmittedId] = useState<number | null>(null); // State to hold the final ID after submission
  //const [opened, { open, close }] = useDisclosure(false);
  // Use the useQuery hook with enabled: false (no automatic fetching)
  const [opened, setOpened] = useState(false);
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hobbyId) {
      setSubmittedId(Number(hobbyId)); // Set the submitted ID to trigger the query
      // Close the modal
    }
  };

  const openModal = (id: number) => {
    setHobbyId(id);
    open();
  };

  return (
    <div>
      <Card className="hobbies-card">
        {hobbies?.map((hobby, key) => {
          const isEven = Boolean(!(hobbies.indexOf(hobby) % 2));
          return (
            <>
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

              <Button onClick={() => openModal(hobby.id)}>Update {hobby.title}</Button>
            </>
          );
        })}
      </Card>
      {/* <EditHobbyModal id={hobbyId} close={close} opened={opened} /> */}
    
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>

      <Modal  zIndex={10000} w={700} h={700}
        opened={opened}
        onClose={() => setOpened(false)}
        title="Sample Modal"
      >
        <div>
          This is the content of the modal.
        </div>
      </Modal>
    </>
    </div>
  );
};

export default Hobbies;
