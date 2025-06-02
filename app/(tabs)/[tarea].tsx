import { tareas } from "@/assets/constants/tareas";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Movie() {
  const {id} = useLocalSearchParams()
  const tarea = tareas.map((tar)=>
    (tar.subtareas).map((el)=>el.id == id ? el : false).filter(Boolean)
  )[0][0]
  console.log(tarea)
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
          title: tarea.nombre,
        }}
      />
      <Text> {tarea.nombre}</Text>
      <Text> {tarea.detalles}</Text>
    </View>
  );
}
