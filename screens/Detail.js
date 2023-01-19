import * as React from "react";
import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Detail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detail}>
      <Pressable
        style={[styles.arrowLeft1, styles.chat20Layout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text style={[styles.detail1, styles.detail1FlexBox]}>Detail</Text>
      <Image
        style={styles.detailChild}
        resizeMode="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Text style={styles.paketMsGlow}>Paket MS GLOW SERIES</Text>
      <Text style={styles.tersediaVarian}>Tersedia Varian :</Text>
      <Text style={[styles.acneSeries, styles.seriesTypo1, styles.seriesTypo2]}>
        Acne Series
      </Text>
      <Text style={[styles.ultimateSeries, styles.seriesTypo]}>
        Ultimate Series
      </Text>
      <Text style={[styles.luminousSeries, styles.seriesTypo]}>
        Luminous Series
      </Text>
      <Text
        style={[styles.whiteningSeries, styles.seriesTypo1, styles.seriesTypo2]}
      >
        Whitening Series
      </Text>
      <Image
        style={[styles.detailItem, styles.detailLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <Image
        style={[styles.detailInner, styles.detailLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.detailChild1Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.groupChildBorder]}
        accessible="true"
      />
      <Pressable
        style={styles.masukkanKeranjang}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Text style={styles.masukkanKeranjang1}>Masukkan Keranjang</Text>
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.wrapperPosition,
            styles.groupChildLayout,
            styles.groupChildBorder,
          ]}
        />
        <Pressable
          style={[styles.note, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Pesanan1")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/8note3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home11, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/2home113.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang, styles.homeTypo, styles.homePosition]}>
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
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/24bag63.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => navigation.navigate("Profil")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/frame-33.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat20, styles.chat20Layout]}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/47chat204.png")}
          />
        </Pressable>
      </View>
      <Text
        style={[styles.msGlowBeauty, styles.seriesTypo1, styles.detail1FlexBox]}
      >
        MS Glow Beauty menghadirkan berbagai produk skin care berkualitas dan
        aman untuk untuk wanita dan pria. Berbagai produk kulit dihadirkan demi
        menunjang kebutuhan kecantikan dan kesehatan kulit anda.
      </Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.detailChild1, styles.detailChild1Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-39.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chat20Layout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  detail1FlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  seriesTypo1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  seriesTypo2: {
    top: 531,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.gray_400,
    fontWeight: "700",
  },
  seriesTypo: {
    top: 643,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.gray_400,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  detailLayout: {
    height: 84,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  detailChild1Layout: {
    width: 115,
    height: 84,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  groupChildBorder: {
    borderStyle: "solid",
    backgroundColor: Color.pink_300,
    borderRadius: Border.br_xl,
  },
  groupChildLayout: {
    width: 360,
    left: 0,
  },
  wrapperPosition: {
    top: 718,
    position: "absolute",
  },
  noteLayout: {
    height: 23,
    position: "absolute",
  },
  notePosition: {
    top: 724,
    height: 23,
  },
  homeTypo: {
    height: 18,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  homePosition: {
    top: 752,
    height: 18,
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 11,
    top: 18,
  },
  detail1: {
    top: 21,
    left: 154,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  detailChild: {
    top: 50,
    left: 43,
    width: 274,
    height: 307,
    position: "absolute",
  },
  paketMsGlow: {
    top: 340,
    fontSize: FontSize.size_2xl,
    textAlign: "center",
    color: Color.gray_400,
    fontWeight: "700",
    left: 6,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  tersediaVarian: {
    top: 422,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.gray_400,
    left: 6,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  acneSeries: {
    left: 74,
  },
  ultimateSeries: {
    left: 217,
  },
  luminousSeries: {
    left: 66,
  },
  whiteningSeries: {
    left: 208,
  },
  detailItem: {
    top: 446,
    left: 39,
    width: 117,
  },
  detailInner: {
    left: 41,
    width: 118,
    top: 555,
  },
  rectangleIcon: {
    left: 195,
    top: 555,
  },
  rectanglePressable: {
    top: 667,
    left: 79,
    shadowRadius: 4,
    elevation: 4,
    borderColor: "#fff",
    borderWidth: 1,
    width: 203,
    height: 40,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
  },
  masukkanKeranjang1: {
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  masukkanKeranjang: {
    left: 116,
    top: 678,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#fdadad",
    borderTopWidth: 1,
    height: 59,
  },
  icon1: {
    borderRadius: Border.br_xl,
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  pesanan: {
    top: 753,
    left: 111,
    width: 53,
  },
  keranjang: {
    width: 61,
    left: 195,
  },
  profil: {
    left: 297,
    width: 40,
  },
  bag6: {
    left: 211,
    top: 725,
    width: 26,
  },
  wrapper: {
    left: 294,
    width: 32,
    height: 32,
  },
  chat20: {
    left: 316,
    top: 0,
  },
  rectangleParent: {
    top: 14,
    height: 777,
    position: "absolute",
  },
  msGlowBeauty: {
    top: 372,
    left: 14,
    width: 320,
    height: 58,
  },
  rectangleView: {
    top: 437,
    left: 194,
    borderRadius: Border.br_sm,
    width: 111,
    height: 89,
    backgroundColor: Color.pink_300,
    position: "absolute",
  },
  detailChild1: {
    top: 442,
    left: 193,
  },
  detail: {
    backgroundColor: Color.white,
    shadowRadius: 1,
    elevation: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Detail;
