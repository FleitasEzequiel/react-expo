import { tareas } from '@/assets/constants/tareas';
import { router } from 'expo-router';
import { FlatList, Pressable, Text, View } from "react-native";
export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        rowGap:"10px",
        columnGap:"100vh"
      }}
    >
      <FlatList data={tareas}
      renderItem={(item)=>(
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"blue",
        marginBottom:10
      }}>
      <Text>{item.item.tarea}</Text>
        <FlatList
        data={item.item.subtareas}
        renderItem={(subt)=>{
          const id = subt.item.id
          return (
          <Pressable
          onPress={()=>router.navigate({
                  pathname:"/[tarea]",params:{id}})}
          >
          <Text style={{backgroundColor:"red"}}>
            {subt.item.nombre}
          </Text>
          </Pressable>
        )}}
        />
      </View>
      )}/>
          
    </View>
  );
}
