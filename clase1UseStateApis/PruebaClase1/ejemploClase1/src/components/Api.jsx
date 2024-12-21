import { Button, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Api = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)  // estado del Spinner de espera que se le muestra al cliente/usuario
  const [offSet, setOffSet] = useState(0)
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
  useEffect(() => {
    fetch(`${BASE_URL}?limit=20&offset=${offSet}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((error)=>{
        console.log(error + 'error al obtener data')
      })
      ;
      setIsLoading(false) //estado del Spinner a falso para que deje de verse cuando ya tengo la data solicitada en pantalla
  }, [offSet]);
  console.log(data)

  return (
    <VStack>
     {isLoading && <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />}
      <Heading>Pokemons</Heading>
      {!isLoading && data.map((p) => (
        <Text key={p.name}>{p.name}</Text>
      ))}

      <Button onClick={()=>setOffSet((prev)=>prev + 20)}>Ver más </Button>
    </VStack>
  );
};