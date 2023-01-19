import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <View
        style={[
          styles.rectangleParent,
          styles.childLayout,
          styles.groupChildLayout,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.childLayout,
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
        <Image
          style={[styles.home11Icon, styles.noteLayout, styles.notePosition]}
          resizeMode="cover"
          source={require("../assets/2home113.png")}
        />
        <Text style={[styles.home, styles.homeTypo, styles.homeTypo1]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
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
            source={require("../assets/24bag63.png")}
          />
        </Pressable>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profil")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/frame-33.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text style={[styles.pesan, styles.pesanTypo]}>Pesan</Text>
      <View style={styles.chatChild} />
      <Image
        style={[styles.searchIcon, styles.frameItemLayout]}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <Text
        style={[
          styles.telusuriKontakAtau,
          styles.terimaKasihTelahTypo,
          styles.pesanTypo,
        ]}
      >
        Telusuri Kontak atau Pesan
      </Text>
      <View style={[styles.msGlowOfficialParent, styles.glowLayout]}>
        <Text style={[styles.msGlowOfficial, styles.msGlowOfficialPosition]}>
          MS GLOW OFFICIAL
        </Text>
        <Text
          style={[
            styles.terimaKasihTelah,
            styles.msGlowOfficialPosition,
            styles.terimaKasihTelahTypo,
          ]}
        >
          Terima Kasih Telah Mempercayai kami!
        </Text>
        <Text style={[styles.text, styles.textTypo]}>09.00</Text>
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-70.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={styles.text1}>1</Text>
      </View>
      <View style={[styles.msGlowOfficialGroup, styles.glowLayout]}>
        <Text style={[styles.msGlowOfficial, styles.msGlowOfficialPosition]}>
          MS GLOW OFFICIAL
        </Text>
        <Text
          style={[
            styles.terimaKasihTelah,
            styles.msGlowOfficialPosition,
            styles.terimaKasihTelahTypo,
          ]}
        >
          Terima Kasih Telah Mempercayai kami!
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>18/01/2023</Text>
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-70.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={styles.text1}>1</Text>
      </View>
      <View style={[styles.msGlowOfficialContainer, styles.glowLayout]}>
        <Text style={[styles.msGlowOfficial, styles.msGlowOfficialPosition]}>
          MS GLOW OFFICIAL
        </Text>
        <Text
          style={[
            styles.terimaKasihTelah,
            styles.msGlowOfficialPosition,
            styles.terimaKasihTelahTypo,
          ]}
        >
          Terima Kasih Telah Mempercayai kami!
        </Text>
        <Text style={[styles.text4, styles.textTypo]}>29/02/2023</Text>
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-70.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={styles.text1}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 59,
    position: "absolute",
  },
  groupChildLayout: {
    width: 360,
    height: 59,
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
    width: "100%",
  },
  homeTypo: {
    height: 18,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    position: "absolute",
  },
  homeTypo1: {
    top: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
  },
  pesanTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameItemLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  terimaKasihTelahTypo: {
    fontWeight: "100",
    fontSize: FontSize.size_xs,
  },
  glowLayout: {
    height: 86,
    width: 360,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  msGlowOfficialPosition: {
    left: 91,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  textTypo: {
    top: 69,
    fontWeight: "100",
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.pink_300,
    borderStyle: "solid",
    borderColor: "#fdadad",
    borderTopWidth: 1,
    borderRadius: Border.br_xl,
  },
  icon: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  note: {
    left: 124,
    width: 27,
  },
  home11Icon: {
    left: 35,
    width: 29,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  home: {
    left: 32,
    width: 35,
  },
  pesanan: {
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
  user: {
    left: 296,
    top: 2,
    width: 32,
    height: 32,
    position: "absolute",
  },
  rectangleParent: {
    top: 732,
  },
  icon3: {
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
    width: 30,
    height: 30,
    position: "absolute",
  },
  pesan: {
    top: 23,
    left: 67,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    color: Color.black,
  },
  chatChild: {
    top: 68,
    left: 29,
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_100,
    width: 300,
    height: 35,
    position: "absolute",
  },
  searchIcon: {
    top: 76,
    left: 57,
  },
  telusuriKontakAtau: {
    top: 81,
    left: 86,
    width: 119,
  },
  msGlowOfficial: {
    top: 26,
    fontSize: FontSize.size_sm,
    width: 109,
  },
  terimaKasihTelah: {
    top: 47,
    width: 169,
  },
  text: {
    left: 327,
    width: 29,
  },
  frameChild: {
    top: 13,
    left: 16,
    borderRadius: Border.br_sm,
    width: 68,
  },
  frameItem: {
    top: 33,
    left: 332,
  },
  text1: {
    top: 37,
    left: 339,
    fontWeight: "700",
    width: 6,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  msGlowOfficialParent: {
    top: 113,
    left: -1,
  },
  text2: {
    left: 303,
    width: 53,
  },
  msGlowOfficialGroup: {
    top: 199,
    left: 0,
    height: 86,
  },
  text4: {
    left: 304,
    width: 52,
  },
  msGlowOfficialContainer: {
    top: 285,
    left: 1,
  },
  chat: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Chat;
