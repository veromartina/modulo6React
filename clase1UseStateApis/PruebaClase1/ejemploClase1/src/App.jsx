import { useState } from "react";
import { Area } from "./components/Area";
import { Button, Text } from "@chakra-ui/react";
import Count from "./components/Count";
import { Api } from "./components/api";


function App() {
  const [title, setTitle] = useState("Tilte");

  console.log("antes del renderizado");

  console.log("despues del renderizado");
  return (
    <>
      <Text>{title}</Text>
      <Button onClick={() => setTitle("New title")}>change title</Button>
      <Area />
      <Count />
      <Api/>
          </>
  );
}

export default App;