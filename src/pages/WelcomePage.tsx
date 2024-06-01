import React from "react";
import BackgroundSlider from "react-background-slider";
import image1 from "../images/wall4.jpg";
import image2 from "../images/wall5.jpg";
import image3 from "../images/wall6.jpg";
import { COLORS } from "../colors";
import { Button, Container, HStack, Heading, Show } from "@chakra-ui/react";
import WelcomeForm from "../component/WelcomeForm";
import NavBar from "../component/NavBar";

const WelcomePage = () => {
  return (
    <>
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={5}
        transition={2}
      />
      <HStack>
        <Container p={0}>
          
          
          <WelcomeForm />
        </Container>
        <Show breakpoint="(min-width: 800px)">
          <Container
            p={0}
            fontSize={40}
            w="300px"
            fontFamily="Pacifico"
            color={COLORS.darkblue}
          >
            Managment Trips.. Planes.. Hotels..
          </Container>
        </Show>
      </HStack>
    </>
  );
};

export default WelcomePage;
