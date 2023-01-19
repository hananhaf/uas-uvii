import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <Image
        style={[styles.rectangleIcon, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <View
        style={[
          styles.loginChild1,
          styles.loginChildLayout,
          styles.loginChildLayout1,
          styles.loginChild1Border,
        ]}
      />
      <Image
        style={[
          styles.loginChild2,
          styles.loginChildLayout,
          styles.loginChildLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.loginChildLayout,
          styles.loginChild1Border,
        ]}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
      <Text
        style={[
          styles.forgotPassword,
          styles.dontHaveAnClr,
          styles.dontHaveAnTypo,
        ]}
      >
        Forgot Password?
      </Text>
      <Text
        style={[styles.dontHaveAn, styles.dontHaveAnClr, styles.dontHaveAnTypo]}
      >
        Don’t have an account?Sign Up
      </Text>
      <Text style={[styles.beautyCare, styles.dontHaveAnClr]}>BEAUTY CARE</Text>
      <Pressable
        style={styles.login1}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.login2}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginChildLayout: {
    height: 46,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  loginChildLayout1: {
    width: 253,
    left: 60,
    height: 46,
    borderRadius: Border.br_lg,
  },
  loginChild1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  passwordTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.gray_500,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  dontHaveAnClr: {
    color: Color.white,
    position: "absolute",
  },
  dontHaveAnTypo: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  loginChild: {
    backgroundColor: Color.pink_400,
    height: 640,
  },
  rectangleIcon: {
    height: 800,
  },
  loginChild1: {
    top: 323,
    backgroundColor: Color.pink_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#fff",
  },
  loginChild2: {
    top: 395,
  },
  rectanglePressable: {
    top: 490,
    left: 128,
    backgroundColor: Color.white,
    borderColor: "#ffacac",
    width: 118,
    height: 46,
    borderRadius: Border.br_lg,
    borderWidth: 1,
    borderStyle: "solid",
  },
  password: {
    top: 409,
    left: 88,
  },
  username: {
    top: 337,
    left: 89,
  },
  forgotPassword: {
    top: 446,
    left: 226,
  },
  dontHaveAn: {
    top: 558,
    left: 123,
  },
  beautyCare: {
    top: 221,
    left: 47,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.oranienbaum,
    textAlign: "center",
  },
  login2: {
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    color: Color.pink_200,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
  },
  login1: {
    left: 162,
    top: 501,
    position: "absolute",
  },
  login: {
    backgroundColor: "#d260a4",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Login;
