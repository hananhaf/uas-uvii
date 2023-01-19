import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Profil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profil}>
      <Image
        style={styles.profilChild}
        resizeMode="cover"
        source={require("../assets/rectangle-67.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+088233*****</Text>
      <Text style={styles.akun}>Akun</Text>
      <Text style={[styles.tentang, styles.tentangPosition, styles.textTypo]}>
        Tentang
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildBorder,
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
        <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang, styles.homeTypo, styles.homePosition]}>
          Keranjang
        </Text>
        <Text style={[styles.profil1, styles.homeTypo, styles.homePosition]}>
          Profil
        </Text>
        <Pressable
          style={[styles.bag6, styles.noteLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag64.png")}
          />
        </Pressable>
        <Image
          style={styles.userIcon}
          resizeMode="cover"
          source={require("../assets/frame-33.png")}
        />
      </View>
      <Pressable
        style={[styles.arrowLeft1, styles.tentangPosition]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text style={styles.profil2}>Profil</Text>
      <Image
        style={styles.profilItem}
        resizeMode="cover"
        source={require("../assets/rectangle-68.png")}
      />
      <Text style={styles.uviFirgianingsih}>Uvi Firgianingsih</Text>
      <Pressable style={[styles.profilInner, styles.groupChildBorder]} />
      <Pressable
        style={styles.logout}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logout1}>Logout</Text>
      </Pressable>
      <View style={[styles.editProfilWrapper, styles.wrapperLayout]}>
        <Text style={[styles.editProfil, styles.editProfilTypo]}>
          Edit Profil
        </Text>
      </View>
      <View style={[styles.syaratDanKetentuanWrapper, styles.wrapperPosition]}>
        <Text style={[styles.syaratDanKetentuan, styles.editProfilTypo]}>
          Syarat dan Ketentuan
        </Text>
      </View>
      <View style={[styles.kebijakanPrivasiWrapper, styles.wrapperPosition]}>
        <Text style={[styles.syaratDanKetentuan, styles.editProfilTypo]}>
          Kebijakan Privasi
        </Text>
      </View>
      <View style={[styles.gantiPasswordWrapper, styles.wrapperLayout]}>
        <Text style={[styles.gantiPassword, styles.editProfilTypo]}>
          Ganti Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    height: 18,
    width: 119,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  tentangPosition: {
    left: 20,
    position: "absolute",
  },
  groupChildLayout: {
    height: 59,
    width: 360,
    left: 0,
  },
  groupChildBorder: {
    borderStyle: "solid",
    backgroundColor: Color.pink_300,
    borderRadius: Border.br_xl,
    position: "absolute",
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
    color: Color.white,
    fontWeight: "500",
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homePosition: {
    top: 34,
    color: Color.white,
  },
  wrapperLayout: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  editProfilTypo: {
    color: Color.gray_200,
    top: 16,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  wrapperPosition: {
    left: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    width: 360,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  profilChild: {
    top: 64,
    height: 179,
    width: 360,
    left: 0,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  text: {
    top: 142,
    left: 160,
    position: "absolute",
  },
  akun: {
    top: 295,
    left: 19,
    height: 18,
    width: 119,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  tentang: {
    top: 411,
  },
  groupChild: {
    top: 0,
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
    width: 35,
    left: 32,
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
  profil1: {
    left: 297,
    width: 40,
  },
  bag6: {
    left: 211,
    top: 7,
    width: 26,
  },
  userIcon: {
    top: 2,
    left: 296,
    width: 32,
    height: 32,
    position: "absolute",
  },
  rectangleParent: {
    top: 732,
    position: "absolute",
  },
  arrowLeft1: {
    top: 20,
    width: 30,
    height: 30,
  },
  profil2: {
    top: 23,
    left: 67,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  profilItem: {
    top: 101,
    borderRadius: 100,
    width: 116,
    height: 106,
    left: 32,
    position: "absolute",
  },
  uviFirgianingsih: {
    top: 110,
    left: 156,
    fontSize: 17,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  profilInner: {
    top: 590,
    left: 103,
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
    width: 156,
    height: 38,
  },
  logout1: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  logout: {
    left: 155,
    top: 599,
    position: "absolute",
  },
  editProfil: {
    width: 103,
  },
  editProfilWrapper: {
    top: 306,
  },
  syaratDanKetentuan: {
    width: 208,
  },
  syaratDanKetentuanWrapper: {
    top: 426,
  },
  kebijakanPrivasiWrapper: {
    top: 470,
  },
  gantiPassword: {
    width: 144,
  },
  gantiPasswordWrapper: {
    top: 348,
  },
  profil: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profil;
