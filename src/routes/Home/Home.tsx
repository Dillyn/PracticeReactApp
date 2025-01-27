import { Button, Card, Text, Image } from "@mantine/core";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";
import "./HomeStyle.css"; // Import the CSS file

const Home = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <Card
      className="home-card"
      shadow="1px 0px 27px 0px rgba(0,0,0,0.2)"
      p="xl"
      radius="xl"
    >
      <div className="main-container-column">
        <div className="text-content">
          <Text className="main-text">
            I Build Custom <br /> Web Solutions That Help Your
          </Text>

          <Text className="highlighted-text">Business Grow</Text>

          <Text className="description-text">
            I help you increase conversion and performance in every possible
            way.
          </Text>

          <Button
            w={"80%"}
            variant="filled"
            rightSection={<IconArrowRight size={32} />}
            onClick={() => setMain("/details")}
            size="lg"
            radius="md"
            className="view-details-button"
          >
            View Details Page
          </Button>
        </div>

        <div className="image-container">
          <Image
            radius={300}
            height={600}
            w={600}
            src="/profile.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </Card>
  );
};

export default Home;
