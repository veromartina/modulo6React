import { Box, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Area = () => {
  const [text, setText] = useState("");
  const [bg, setBg] = useState("white");

  useEffect(() => {
if(text.length<50){
    setBg('white')
}else if(text.length<=100 && text.length>=50){
    setBg('yellow')

}else{
    setBg('red')

}
  }, [text]);

  return (
    <Box
      maxW="500px"
      mx="auto"
      mt="50px"
      p="4"
      borderWidth="1px"
      borderRadius="md"
    >
      <Text fontSize="lg" mb="4">
        Ingresa el texto
      </Text>
      <Textarea
      bg={bg}
      color="black"
        value={text}
        placeholder="Ingresa tu texto"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Text mt="4" fontSize="sm" color="gray.600">
        Carácteres ingresados {text.length}
      </Text>
    </Box>
  );
};