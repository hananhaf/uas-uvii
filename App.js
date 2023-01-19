const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Dashboard from "./screens/Dashboard";
import Add from "./screens/Add";
import Add1 from "./screens/Add1";
import Skincare from "./screens/Skincare";
import RincianPesanan from "./screens/RincianPesanan";
import Chat from "./screens/Chat";
import Profil from "./screens/Profil";
import Pesanan from "./screens/Pesanan";
import Pesanan1 from "./screens/Pesanan1";
import DetailPesanan from "./screens/DetailPesanan";
import Checkout from "./screens/Checkout";
import Keranjang from "./screens/Keranjang";
import Login from "./screens/Login";
import Detail from "./screens/Detail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
    "Open Sans Hebrew Condensed": require("./assets/fonts/Open_Sans_Hebrew_Condensed.ttf"),
    "Rammetto One": require("./assets/fonts/Rammetto_One.ttf"),
    Oranienbaum: require("./assets/fonts/Oranienbaum.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add1"
              component={Add1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Skincare"
              component={Skincare}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RincianPesanan"
              component={RincianPesanan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pesanan"
              component={Pesanan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pesanan1"
              component={Pesanan1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailPesanan"
              component={DetailPesanan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
