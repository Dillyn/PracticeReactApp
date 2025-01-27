import { Button, Card, Text, Image } from "@mantine/core";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";
import styles from "./HomeStyle.module.css"; // Import the CSS file

const Home = ({ setMain }: { setMain: (main: string) => void }) => {
  return (
    <Card
      className="home-card"
      shadow="1px 0px 27px 0px rgba(0,0,0,0.2)"
      p="xl"
      radius="xl"
    >
      <div className={styles.mainContainerColumn}>
        <div className={styles.textContent}>
          <Text className={styles.mainText}>
            I Build Custom <br /> Web Solutions That Help Your
          </Text>

          <Text className={styles.highlightedText}>Business Grow</Text>

          <Text className={styles.descriptionText}>
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
            className={styles.viewDetailsButton}
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
