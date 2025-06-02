import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
export default function Login() {


  function debounce(callback: Function, wait: number) {
  let timerId : any;
  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

  const [nombre,setNombre] = useState("")
  const [pelicula,setPelicula] = useState(null)

  useEffect(debounce(()=>{
    fetch(`http://www.omdbapi.com/?t=${nombre}&apikey=829331`).then((res)=>res.json())
    .then((json)=>{
      if (json.Response) {setPelicula(json)}
    })
  },2000),[nombre])
  //Hacer el fetch cuando cambie el
  return (  
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      //Poner la lógica lento del login
    >
      <Text>Buscar película : {nombre}</Text>
      <TextInput placeholder="Buscá tu poronga de película acá" onChange={(e)=>setNombre(e.target.value)} style={{display:"flex",backgroundColor:"blue", padding:20,borderRadius:8}} />
      { !pelicula ? <Button
      title="No encontrada"
      disabled={true} /> : <Button title={pelicula.Title} onPress={()=>router.navigate({
        pathname:"/movies/[movie]",params:{movie:pelicula.imdbID}})}/>}
    </View>
  );
}
