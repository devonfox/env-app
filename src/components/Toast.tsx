import React from "react";
import { Button, useToast, UseToastOptions } from "@chakra-ui/react";

interface ToastProps {
  status?: UseToastOptions["status"];
}

function Toast(props: ToastProps) {
  const toast = useToast();
  const { status } = props;
  return (
    <Button
      onClick={() =>
        toast({
          title: "Welcome",
          description: "Let's get started.",
          status: status,
          duration: 2000,
          isClosable: true,
        })
      }
      bg="tomato"
      w="20%"
      p={6}
      color="white"
    >
      Show
    </Button>
  );
}

export default Toast;
