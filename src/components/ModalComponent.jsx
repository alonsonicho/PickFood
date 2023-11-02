/* eslint-disable react/prop-types */
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
  } from "@chakra-ui/react";

const ModalComponent = ({ children, isOpen, onClose }) => {

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size={window.innerWidth < 640 ? "xs" : "2xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
