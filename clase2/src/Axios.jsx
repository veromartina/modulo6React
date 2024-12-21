import axios from "axios";
import { useEffect, useState } from "react";

export const Axios = () => {
  const [data, setData] = useState([]);
  const [gender, setGender]= useState('')

  useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon')
//     .then(({data})=>{
//         console.log(data.results)
//     })


// axios.get('https://rickandmortyapi.com/api/character')
// .then(({data})=>{
//     setData(data.results)
// })

const getCharacter = async ()=>{
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character?gender=${gender}`)
    setData(data)
}
getCharacter()
}, [gender]);

console.log(data)
  return <div>Axios
    <button onClick={()=>setGender('male')}></button>
  </div>;
};
