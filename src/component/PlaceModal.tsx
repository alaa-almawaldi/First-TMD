import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import PlaceForm from "./PlaceForm";
import { IconType } from "react-icons";
import { COLORS } from "../colors";

interface Props {
  title: string;
  icon?: ReactElement;
}

const PlaceModal = ({ title, icon }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} backgroundColor={COLORS.lightblue} color="white">
        {icon}
        {title}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Place</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PlaceForm />
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlaceModal;
