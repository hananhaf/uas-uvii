import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Pesanan1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pesanan}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildBorder,
            styles.userIconPosition,
            styles.groupChildLayout,
          ]}
        />
        <Pressable
          style={[styles.note, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Pesanan1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/8note3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home11, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/2home114.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo, styles.homeTypo1]}>
          Home
        </Text>
        <Text style={[styles.pesanan1, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang, styles.homeTypo, styles.homeTypo1]}>
          Keranjang
        </Text>
        <Text style={[styles.profil, styles.homeTypo, styles.homeTypo1]}>
          Profil
        </Text>
        <Pressable
          style={[styles.bag6, styles.noteLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag65.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.userWrapper, styles.userLayout]}
          onPress={() => navigation.navigate("Profil")}
        >
          <Image
            style={[styles.userLayout, styles.userIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame-33.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.arrowLeft1, styles.chat20Position]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text style={[styles.pesanan2, styles.dikirimTypo]}>Pesanan</Text>
      <Pressable
        style={[styles.chat20, styles.chat20Position]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/47chat202.png")}
        />
      </Pressable>
      <View style={styles.pesananChild} />
      <View style={[styles.pesananItem, styles.groupChildBorder]} />
      <Text
        style={[
          styles.dikirim,
          styles.dikirimPosition,
          styles.dikirimTypo,
          styles.dikirimTypo1,
        ]}
      >
        Dikirim
      </Text>
      <Pressable
        style={[styles.riwayat, styles.dikirimPosition]}
        onPress={() => navigation.navigate("Pesanan")}
      >
        <Text style={[styles.dikirimTypo, styles.dikirimTypo1]}>Riwayat</Text>
      </Pressable>
      <Image
        style={styles.pesananInner}
        resizeMode="cover"
        source={require("../assets/frame-191.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 59,
    width: 360,
  },
  groupChildBorder: {
    borderStyle: "solid",
    backgroundColor: Color.pink_300,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  userIconPosition: {
    top: 0,
    left: 0,
  },
  noteLayout: {
    height: 23,
    position: "absolute",
  },
  notePosition: {
    top: 6,
    height: 23,
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  homeTypo: {
    height: 18,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homeTypo1: {
    top: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  userLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  chat20Position: {
    width: 30,
    top: 20,
    position: "absolute",
  },
  dikirimTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  dikirimPosition: {
    top: 77,
    position: "absolute",
  },
  dikirimTypo1: {
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  groupChild: {
    borderColor: "#fdadad",
    borderTopWidth: 1,
  },
  icon: {
    borderRadius: Border.br_xl,
    height: "100%",
  },
  note: {
    left: 124,
    width: 27,
  },
  home11: {
    left: 35,
    width: 29,
  },
  home: {
    left: 32,
    width: 35,
  },
  pesanan1: {
    top: 35,
    left: 111,
    width: 53,
  },
  keranjang: {
    left: 195,
    width: 61,
  },
  profil: {
    left: 297,
    width: 40,
  },
  bag6: {
    left: 211,
    top: 7,
    width: 26,
  },
  userWrapper: {
    top: 2,
    left: 296,
  },
  rectangleParent: {
    top: 732,
    left: 0,
    height: 59,
    position: "absolute",
  },
  arrowLeft1: {
    height: 30,
    left: 20,
  },
  pesanan2: {
    top: 23,
    left: 69,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  chat20: {
    left: 313,
    height: 25,
  },
  pesananChild: {
    top: 69,
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_100,
    width: 308,
    height: 35,
    left: 20,
    position: "absolute",
  },
  pesananItem: {
    top: 72,
    left: 39,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#fff",
    borderWidth: 1,
    width: 137,
    height: 26,
  },
  dikirim: {
    left: 85,
  },
  riwayat: {
    left: 227,
  },
  pesananInner: {
    top: 107,
    height: 147,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pesanan: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Pesanan1;
