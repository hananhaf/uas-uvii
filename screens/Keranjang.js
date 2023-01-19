import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keranjang}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Pressable
          style={[styles.note, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Pesanan1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/8note9.png")}
          />
        </Pressable>
        <View style={[styles.home11, styles.noteLayout, styles.notePosition]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang1, styles.homeTypo, styles.homePosition]}>
          Keranjang
        </Text>
        <Text style={[styles.profil, styles.homeTypo, styles.homePosition]}>
          Profil
        </Text>
        <Pressable
          style={[styles.bag6, styles.noteLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag69.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.text2Position]}
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
        style={[styles.arrowLeft1, styles.chat20Layout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text style={[styles.keranjang2, styles.text2Typo, styles.text2Typo1]}>
        Keranjang
      </Text>
      <View
        style={[styles.frameParent, styles.frameLayout1, styles.frameLayout2]}
      >
        <View style={[styles.rectangleGroup, styles.frameLayout1]}>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-461.png")}
          />
          <Text style={[styles.paketMsGlow, styles.paketMsGlowTypo]}>
            Paket MS GLOW SERIES
          </Text>
          <Text style={[styles.whiteningSeries, styles.whiteningSeriesTypo]}>
            Whitening Series
          </Text>
          <Text
            style={[
              styles.rp30000000,
              styles.text2Typo,
              styles.text2Typo1,
              styles.text2Typo2,
            ]}
          >
            Rp. 300.000,00
          </Text>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={styles.groupItem} />
            <View style={[styles.groupInner, styles.groupPosition1]} />
            <Text style={styles.textTypo}>+</Text>
            <Text style={[styles.text1, styles.textTypo1]}>-</Text>
            <Text
              style={[
                styles.text2,
                styles.text2Position,
                styles.text2Typo,
                styles.text2Typo1,
                styles.text2Typo2,
              ]}
            >
              1
            </Text>
          </View>
        </View>
        <Image
          style={[styles.trashIcon, styles.noteLayout]}
          resizeMode="cover"
          source={require("../assets/61trash.png")}
        />
      </View>
      <Text style={[styles.rp300000001, styles.rp300000001Typo]}>
        Rp. 300.000,00
      </Text>
      <Text style={[styles.totalPesanan, styles.rp300000001Typo]}>
        Total Pesanan
      </Text>
      <Image
        style={styles.keranjangChild}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Pressable
        style={styles.bayarSekarang}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Text style={[styles.bayarSekarang1, styles.text2Typo]}>
          Bayar Sekarang
        </Text>
      </Pressable>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={[styles.groupView, styles.rectangleLayout]}>
          <View style={styles.groupItem} />
          <View style={[styles.groupChild1, styles.groupPosition1]} />
          <Text style={[styles.text3, styles.textTypo]}>+</Text>
          <Text style={[styles.text1, styles.textTypo1]}>-</Text>
          <Text
            style={[
              styles.text2,
              styles.text2Position,
              styles.text2Typo,
              styles.text2Typo1,
              styles.text2Typo2,
            ]}
          >
            1
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-433.png")}
        />
        <Text style={[styles.sk11FacialTreatment, styles.paketMsGlowTypo]}>
          SK-11 Facial Treatment Essense
        </Text>
        <Text
          style={[
            styles.skIiFacialTreatmentContainer,
            styles.whiteningSeriesTypo,
          ]}
        >
          <Text
            style={styles.skIiFacialTreatment}
          >{`SK-II Facial Treatment Essence 30ml `}</Text>
          <Text style={styles.skincareTonerPitera}>
            Skincare Toner Pitera Lotion SK2 SKII
          </Text>
        </Text>
        <Text style={[styles.rp69900000, styles.rp69900000Typo]}>
          Rp. 699.000,00
        </Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={[styles.groupView, styles.rectangleLayout]}>
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupPosition1]} />
          <Text style={[styles.text3, styles.textTypo]}>+</Text>
          <Text style={[styles.text1, styles.textTypo1]}>-</Text>
          <Text
            style={[
              styles.text2,
              styles.text2Position,
              styles.text2Typo,
              styles.text2Typo1,
              styles.text2Typo2,
            ]}
          >
            1
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-433.png")}
        />
        <Text style={[styles.sk11FacialTreatment, styles.paketMsGlowTypo]}>
          SK-11 Facial Treatment Essense
        </Text>
        <Text
          style={[
            styles.skIiFacialTreatmentContainer,
            styles.whiteningSeriesTypo,
          ]}
        >
          <Text
            style={styles.skIiFacialTreatment}
          >{`SK-II Facial Treatment Essence 30ml `}</Text>
          <Text style={styles.skincareTonerPitera}>
            Skincare Toner Pitera Lotion SK2 SKII
          </Text>
        </Text>
        <Text style={[styles.rp69900000, styles.rp69900000Typo]}>
          Rp. 699.000,00
        </Text>
      </View>
      <View
        style={[styles.frameView, styles.frameLayout1, styles.frameLayout2]}
      >
        <View style={[styles.rectangleParent2, styles.rectangleLayout]}>
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupPosition1]} />
          <Text style={[styles.text9, styles.textTypo1]}>+</Text>
          <Text style={[styles.text1, styles.textTypo1]}>-</Text>
          <Text
            style={[
              styles.text2,
              styles.text2Position,
              styles.text2Typo,
              styles.text2Typo1,
              styles.text2Typo2,
            ]}
          >
            1
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-435.png")}
        />
        <Text style={[styles.n30NaturalBeige, styles.whiteningSeriesTypo]}>
          N30 Natural Beige
        </Text>
        <Text style={[styles.rp24900000, styles.rp69900000Typo]}>
          Rp. 249.000,00
        </Text>
        <Text
          style={[
            styles.makeOverPowerstay,
            styles.text2Typo,
            styles.text2Typo1,
            styles.text2Typo2,
          ]}
        >
          Make Over Powerstay Weigless Liquit Foundation
        </Text>
      </View>
      <Pressable
        style={[styles.chat20, styles.chat20Layout]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/47chat204.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  noteLayout: {
    height: 24,
    position: "absolute",
  },
  notePosition: {
    top: 6,
    height: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    height: 19,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homePosition: {
    top: 34,
    height: 19,
  },
  text2Position: {
    top: 4,
    position: "absolute",
  },
  chat20Layout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  text2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  text2Typo1: {
    fontWeight: "500",
    color: Color.black,
    fontFamily: FontFamily.roboto,
  },
  frameLayout1: {
    height: 135,
    borderRadius: Border.br_sm,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout2: {
    width: 333,
    height: 135,
    borderRadius: Border.br_sm,
  },
  frameLayout: {
    height: 102,
    width: 99,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  paketMsGlowTypo: {
    textAlign: "center",
    color: Color.gray_400,
    fontWeight: "700",
    left: 108,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  whiteningSeriesTypo: {
    fontSize: FontSize.size_xs,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  text2Typo2: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  rectangleLayout: {
    height: 22,
    width: 51,
    position: "absolute",
  },
  groupPosition1: {
    left: 34,
    width: 17,
    borderRadius: Border.br_xs,
    height: 22,
    top: 0,
    position: "absolute",
  },
  textTypo1: {
    top: 3,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rp300000001Typo: {
    top: 659,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupPosition: {
    top: 234,
    height: 135,
    width: 333,
    borderRadius: Border.br_sm,
    left: 13,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    left: 38,
    top: 3,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rp69900000Typo: {
    width: 108,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.pink_300,
    borderStyle: "solid",
    borderColor: "#fdadad",
    borderTopWidth: 1,
    borderRadius: Border.br_xl,
    top: 0,
    height: 60,
    width: 360,
    left: 0,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  note: {
    left: 124,
    width: 27,
  },
  vectorIcon: {
    height: "6.3%",
    width: "23.92%",
    top: "64.56%",
    right: "38.04%",
    bottom: "29.14%",
    left: "38.04%",
  },
  vectorIcon1: {
    height: "89.63%",
    width: "88.51%",
    top: "5.19%",
    right: "5.75%",
    bottom: "5.19%",
    left: "5.75%",
  },
  home11: {
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
    width: 53,
    left: 111,
  },
  keranjang1: {
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
  wrapper: {
    left: 295,
    width: 32,
    height: 32,
  },
  rectangleParent: {
    top: 732,
    height: 60,
    width: 360,
    left: 0,
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
  },
  keranjang2: {
    top: 23,
    left: 63,
    fontSize: FontSize.size_4xl,
    color: Color.black,
    position: "absolute",
  },
  frameChild: {
    left: 8,
    top: 21,
  },
  paketMsGlow: {
    top: 21,
  },
  whiteningSeries: {
    top: 44,
    left: 111,
  },
  rp30000000: {
    top: 85,
    left: 112,
    width: 106,
    color: Color.black,
    position: "absolute",
  },
  groupItem: {
    width: 17,
    borderRadius: Border.br_xs,
    height: 22,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupInner: {
    backgroundColor: Color.gray_300,
  },
  text1: {
    left: 6,
    width: 5,
    color: Color.black,
  },
  text2: {
    left: 23,
    width: 7,
    color: Color.black,
  },
  rectangleContainer: {
    top: 82,
    left: 227,
  },
  rectangleGroup: {
    width: 287,
    backgroundColor: Color.pink_100,
    height: 135,
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
  },
  trashIcon: {
    top: 56,
    left: 296,
    width: 24,
  },
  frameParent: {
    backgroundColor: "#c3baba",
    left: 13,
    width: 333,
    top: 79,
  },
  rp300000001: {
    left: 221,
    width: 106,
  },
  totalPesanan: {
    left: 31,
  },
  keranjangChild: {
    top: 687,
    left: 97,
    borderRadius: Border.br_lg,
    width: 165,
    height: 40,
    position: "absolute",
  },
  bayarSekarang1: {
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.white,
  },
  bayarSekarang: {
    left: 128,
    top: 698,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.black,
  },
  text3: {
    width: 8,
  },
  groupView: {
    left: 248,
    top: 79,
    width: 51,
  },
  frameItem: {
    left: 10,
    top: 20,
  },
  sk11FacialTreatment: {
    top: 20,
  },
  skIiFacialTreatment: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  skincareTonerPitera: {
    margin: Margin.m_md,
  },
  skIiFacialTreatmentContainer: {
    top: 45,
    left: 115,
  },
  rp69900000: {
    top: 83,
    left: 116,
  },
  groupParent: {
    backgroundColor: Color.gray_100,
  },
  groupContainer: {
    backgroundColor: Color.pink_100,
  },
  text9: {
    left: 39,
    color: Color.white,
  },
  rectangleParent2: {
    top: 84,
    left: 249,
  },
  n30NaturalBeige: {
    top: 59,
    left: 115,
  },
  rp24900000: {
    top: 87,
    left: 115,
  },
  makeOverPowerstay: {
    width: 203,
    left: 115,
    color: Color.black,
    top: 20,
    position: "absolute",
  },
  frameView: {
    top: 389,
    left: 16,
    backgroundColor: Color.pink_100,
  },
  chat20: {
    left: 312,
    top: 18,
  },
  keranjang: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Keranjang;
