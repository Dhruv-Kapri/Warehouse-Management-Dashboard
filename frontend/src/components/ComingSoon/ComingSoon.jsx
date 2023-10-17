import { Link } from "react-router-dom";

import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import comingSoonImage from "../../assets/coming-soon.png";
import classes from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        {/* <img src= alt="" /> */}
        {/* <Image src={comingSoonImage} className={classes.mobileImage} /> */}
        <div>
          <Title className={classes.title}>Coming Soon...</Title>
          <Text c="dimmed" size="lg">
            The page you are attempting to access is a feature that is currently
            under development and will be released in the near future. We are
            continuously working to enhance your experience and provide you with
            the latest and most useful features. Please stay tuned for updates,
            and thank you for your patience and understanding as we strive to
            make our service even better for you. If you have any questions or
            require assistance with anything else, please don't hesitate to
            reach out to our support team. We're here to help!
          </Text>
          <Link to="/dashboard">
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Link>
        </div>
        <Image src={comingSoonImage} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};

export default ComingSoon;
