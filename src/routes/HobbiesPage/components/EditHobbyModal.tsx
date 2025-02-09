import { useQuery } from "@tanstack/react-query";
import { deleteHobby, getHobby, updateHobby } from "../queries/query";
import { EditHobbyModalProps } from "../Models/models";
import {
  Button,
  Card,
  Group,
  Modal,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect, useRef } from "react";

export const EditHobbyModal: React.FC<EditHobbyModalProps> = ({
  id,
  openModal,
  closeModal,
  refetchHobbies,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { data: hobby, error } = useQuery({
    queryKey: ["getHobby", id],
    queryFn: () => getHobby(id),
    enabled: !!id,
  });
  console.log(hobby);

  const form = useForm({
    initialValues: {
      title: "",
      content: "",
      image: "",
    },
    validate: {
      title: (value: string) =>
        value?.trim() === "" ? "Title is required" : null,
      content: (value: string) =>
        value?.trim() === "" ? "Content is required" : null,
      image: (value: string) =>
        value?.trim() === "" ? "Image URL is required" : null,
    },
  });
  useEffect(() => {
    if (openModal) {
      dialogRef.current?.showModal();
      form.setValues({
        title: hobby?.title,
        content: hobby?.content,
        image: hobby?.image,
      });
    } else {
      form.reset();
      dialogRef.current?.close();
    }
  }, [openModal, hobby]);
  return (
    <dialog ref={dialogRef} onCancel={closeModal}>
      <Card>
        <form
          name="submit"
          onSubmit={form.onSubmit(async (data) => {
            console.log("Form data:", data); // Check if form submission is triggered
            try {
              await updateHobby(id, data);
              refetchHobbies(); // Pass form data here instead of `form.getValues()`
              closeModal();
            } catch (error) {
              // Handle error (e.g., show a toast message or alert)
              console.error("Failed to update hobby:", error);
            }
          })}
        >
          <Title
            order={2}
            size="h1"
            style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
            fw={900}
            ta="center"
          >
            Update Hobby
          </Title>

          <TextInput
            label="Title"
            placeholder="Enter the Title of your Hobby"
            name="title"
            variant="filled"
            {...form.getInputProps("title")}
          />
          <Textarea
            mt="md"
            label="Content"
            placeholder="Enter Content of your Hobby"
            maxRows={10}
            minRows={5}
            autosize
            name="content"
            variant="filled"
            {...form.getInputProps("content")}
          />

          <TextInput
            label="Image"
            placeholder="Enter image path"
            mt="md"
            name="image"
            variant="filled"
            {...form.getInputProps("image")}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" size="md">
              Update Hobby
            </Button>
            <Button
              onClick={async () => {
                await deleteHobby(id);
                refetchHobbies(); // Pass form data here instead of `form.getValues()`
                closeModal();
              }}
              color="red"
              size="md"
            >
              Delete
            </Button>
            <Button onClick={closeModal} variant="subtle" size="md">
              Cancel
            </Button>
          </Group>
        </form>
      </Card>
    </dialog>
  );
};
