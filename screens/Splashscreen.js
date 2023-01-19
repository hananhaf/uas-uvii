import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("Login")}
    >
      <Pressable
        style={styles.beautyCare}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.beautyCare1}>BEAUTY CARE</Text>
      </Pressable>
      <Text style={styles.showYourBeautiful}>
        Show Your Beautiful Every Day
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  beautyCare1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.oranienbaum,
    textAlign: "center",
    color: Color.white,
  },
  beautyCare: {
    left: 46,
    top: 363,
    position: "absolute",
  },
  showYourBeautiful: {
    top: 431,
    left: 94,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.white,
    position: "absolute",
  },
  splashscreen: {
    backgroundColor: Color.pink_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splashscreen;
