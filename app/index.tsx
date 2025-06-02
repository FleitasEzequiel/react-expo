import { router } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      //Poner la lógica lento del login
      >
      <Text>Iniciar Sesión</Text>
              <TextInput
        />
        <Button
        title="Iniciar Sesión"
        onPress={()=> router.navigate("/user")}
        />
    </View>
  );
}
