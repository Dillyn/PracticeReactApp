import { useQuery } from "@tanstack/react-query";
import { getHobby } from "../queries/query";
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

export const EditHobbyModal: React.FC<EditHobbyModalProps> = ({
  id,
  opened,
  close,
}) => {
  console.log(id);
  
  const { data: hobby, error } = useQuery({
    queryKey: ["getHobby" , id],
    queryFn: () => getHobby(id),
    enabled: !!id,
  });
  console.log(hobby?.title)
  const form = useForm({
    initialValues: {
      title: "",
      content: "",
      image: "",
    },
    validate: {
      title: (value: string | undefined) => (value as string).trim().length < 2,
      content: (value: string | undefined) =>
        !/^\S+@\S+$/.test(value as string),
      image: (value: string | undefined) => value?.trim().length === 0,
    },
  });
  return (
    <Modal opened={opened} onClose={close} title="update Hobby">
      <Card>
        <form name="hi" onSubmit={form.onSubmit(() => {})}>
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
              Send message
            </Button>
          </Group>
        </form>
      </Card>
    </Modal>
  );
};
