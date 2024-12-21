import { Button, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(   //el valor inicial de count se obtiene de localStorage usando localStorage.getItem("count"). Si no existe un valor guardado en el almacenamiento local, se asigna 0 como valor predeterminado. Number() asegura que el valor se convierta en un número.
    Number(localStorage.getItem("count")) || 0
  );
  const [title, setTitle] = useState("Tilte");

  console.log("antes del renderizado"); //Este console.log se ejecuta cada vez que el componente se renderiza, antes de cualquier cambio en el DOM. Es útil para depuración, para ver cuándo ocurre el renderizado.

  useEffect(() => {  // Este hook se ejecuta después de que el componente se haya renderizado en el DOM. El efecto aquí tiene como propósito actualizar el almacenamiento local cada vez que el valor de count cambie.
    console.log("useEffect");
    localStorage.setItem("count", JSON.stringify(count)); //Se guarda el valor de count en localStorage. Dado que localStorage solo maneja strings, se utiliza JSON.stringify(count) para convertir el número count en una cadena.
 console.log(localStorage)
  }, [count]);   //El segundo parámetro de useEffect: El array [count] indica que el efecto solo se ejecutará cuando el valor de count cambie. Esto ayuda a evitar que el efecto se ejecute innecesariamente en cada renderizado.

  console.log("despues del renderizado");
  return (
     
    //Estructura JSX que se renderiza:
      <HStack className="card">
        <Button onClick={() => setCount((count) => count + 1)}>mas</Button>
        <Text>{count}</Text>
        <Button onClick={() => setCount((count) => count - 1)}>menos</Button>
        <Text>{title}</Text>
        <Button onClick={() => setTitle("New title")}>change title</Button>
      </HStack>

  );
}

export default Count;