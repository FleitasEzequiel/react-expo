import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

export default function Movie() {
  const {movie} = useLocalSearchParams()
  const [info,setInfo]= useState({})
  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?i=${movie}&apikey=829331&plot=full`).then((res)=>res.json()).then((json)=>setInfo(json))
  },[])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
            <Stack.Screen
        options={{
          title: info.Title,
        }}
      />
            <Image
            source={{
              uri:info.Poster}}
               style={{width: 240,
          height: 300,
          resizeMode: 'contain'}}/>
            <Text>{info.Title}</Text>
            <Text>Released: {info.Released}</Text>
            <Text>Rated: {info.Rated}</Text>
            <Text>Plot: {info.Plot}</Text>
    </View>
  );
}
