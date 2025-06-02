import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from "react-native";
export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome name="user-circle" size={100}/>
      <Text>UsuarioReal22</Text>
      <Text>usuario@gmail.com</Text>
      <Text>Has guardado 3 películas</Text>
    </View>
  );
}
