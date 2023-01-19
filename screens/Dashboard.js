import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Margin } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View
        style={[
          styles.dashboardInner,
          styles.groupLayout2,
          styles.dashboardInnerLayout,
        ]}
      >
        <View style={[styles.rectangleParent, styles.groupLayout2]}>
          <Image
            style={[styles.groupChild, styles.groupLayout2]}
            resizeMode="cover"
            source={require("../assets/rectangle-16.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout2]}
            resizeMode="cover"
            source={require("../assets/rectangle-18.png")}
          />
          <Pressable
            style={[
              styles.wrapper,
              styles.groupLayout2,
              styles.dashboardInnerLayout,
            ]}
            onPress={() => navigation.navigate("Detail")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/rectangle-5.png")}
            />
          </Pressable>
        </View>
      </View>
      <Text style={[styles.rekomendasi, styles.rp12000000Typo]}>
        Rekomendasi
      </Text>
      <View style={[styles.dashboardChild, styles.dashboardInnerLayout]} />
      <Pressable
        style={[styles.note, styles.noteLayout, styles.notePosition]}
        onPress={() => navigation.navigate("Pesanan1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/8note.png")}
        />
      </Pressable>
      <Image
        style={[styles.home11Icon, styles.noteLayout, styles.notePosition]}
        resizeMode="cover"
        source={require("../assets/2home11.png")}
      />
      <View
        style={[
          styles.dashboardItem,
          styles.groupLayout,
          styles.groupLayout1,
          styles.groupChildShadowBox,
          styles.groupChildShadowBox1,
          styles.groupBorder,
        ]}
      />
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
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/24bag6.png")}
        />
      </Pressable>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-33.png")}
      />
      <Pressable
        style={[styles.component1default, styles.frameIconLayout]}
        onPress={() => navigation.navigate("Skincare")}
      >
        <View
          style={[
            styles.component1defaultChild,
            styles.childLayout,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.allProduct, styles.allProductTypo]}>
          All Product
        </Text>
      </Pressable>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.groupParent, styles.frameViewLayout]}>
          <Pressable
            style={[
              styles.rectangleGroup,
              styles.groupLayout,
              styles.groupLayout1,
            ]}
            onPress={() => navigation.navigate("Detail")}
          >
            <View
              style={[
                styles.groupInner,
                styles.groupLayout,
                styles.groupLayout1,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
                styles.groupBorder,
              ]}
            />
            <Image
              style={[styles.rectangleIcon, styles.groupChild1Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-24.png")}
            />
            <Text
              style={[
                styles.paketWhiteningMs,
                styles.containerPosition,
                styles.rp12000000Typo,
              ]}
            >
              Paket Whitening MS GLOW
            </Text>
            <Text
              style={[
                styles.rp30000000,
                styles.rp30000000Typo,
                styles.rp30000000Position,
              ]}
            >
              Rp. 300.000,00
            </Text>
          </Pressable>
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View
              style={[
                styles.groupInner,
                styles.groupLayout,
                styles.groupLayout1,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
                styles.groupBorder,
              ]}
            />
            <Image
              style={[styles.groupChild1, styles.groupChild1Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-25.png")}
            />
            <Text
              style={[
                styles.maybelineSuperstayInk,
                styles.containerPosition,
                styles.rp12000000Typo,
              ]}
            >
              Maybeline Superstay Ink
            </Text>
            <Text
              style={[
                styles.rp12000000,
                styles.rp30000000Position,
                styles.rp12000000Typo,
              ]}
            >
              Rp. 120.000,00
            </Text>
          </View>
          <View
            style={[styles.groupView, styles.groupLayout, styles.groupLayout1]}
          >
            <View
              style={[
                styles.groupInner,
                styles.groupLayout,
                styles.groupLayout1,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
                styles.groupBorder,
              ]}
            />
            <Image
              style={styles.groupChild3}
              resizeMode="cover"
              source={require("../assets/rectangle-28.png")}
            />
            <Text
              style={[styles.inezContourPlus, styles.rp8000000Typo]}
            >{`Inez Contour Plus Eyeshadow Collection `}</Text>
            <Text
              style={[
                styles.rp8000000,
                styles.rp8000000Position,
                styles.rp8000000Typo,
              ]}
            >
              Rp. 80.000,00
            </Text>
          </View>
          <View style={[styles.rectangleParent1, styles.groupLayout]}>
            <View
              style={[
                styles.groupChild4,
                styles.groupLayout,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
                styles.groupBorder,
              ]}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-32.png")}
            />
            <Text
              style={[
                styles.paket5in1ScarlettContainer,
                styles.rp25000000Typo,
                styles.containerPosition,
              ]}
            >
              <Text style={styles.paket5in1Scarlett}>Paket 5in1 Scarlett</Text>
              <Text style={styles.whiteningSeries}>Whitening Series</Text>
            </Text>
            <Text
              style={[
                styles.rp25000000,
                styles.rp25000000Typo,
                styles.rp8000000Position,
              ]}
            >
              Rp. 250.000,00
            </Text>
          </View>
          <View style={[styles.rectangleParent2, styles.groupChild6Layout]}>
            <View
              style={[
                styles.groupChild6,
                styles.groupChild6Layout,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
              ]}
            />
            <Image
              style={[styles.groupChild7, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-35.png")}
            />
            <Text
              style={[
                styles.somethincSerumHyaluronic9Container,
                styles.rp15000000Position,
                styles.containerPosition,
                styles.rp12000000Typo,
              ]}
            >
              <Text style={styles.paket5in1Scarlett}>{`Somethinc Serum `}</Text>
              <Text style={styles.whiteningSeries}>Hyaluronic9</Text>
            </Text>
            <Text
              style={[
                styles.rp15000000Position,
                styles.rp8000000Position,
                styles.rp30000000Typo,
              ]}
            >
              Rp. 150.000,00
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.dashboardInner1, styles.dashboardInnerLayout]}>
        <View style={[styles.helloParent, styles.rp15000000Position]}>
          <Text style={[styles.hello, styles.helloPosition]}>Hello,</Text>
          <Text style={[styles.uviFirgia, styles.helloPosition]}>
            Uvi Firgia
          </Text>
          <Image
            style={styles.notificationIcon}
            resizeMode="cover"
            source={require("../assets/76notification.png")}
          />
          <View style={[styles.groupChild8, styles.childLayout]} />
          <Text style={[styles.cariProdukTerbaikmu, styles.allProductTypo]}>
            Cari Produk Terbaikmu
          </Text>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../assets/38search.png")}
          />
          <Pressable
            style={[styles.chat20Wrapper, styles.chat20Layout]}
            onPress={() => navigation.navigate("Chat")}
          >
            <Pressable
              style={[styles.chat20, styles.chat20Layout]}
              onPress={() => navigation.navigate("Chat")}
            >
              <Image
                style={[styles.icon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/47chat20.png")}
              />
            </Pressable>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout2: {
    height: 162,
    position: "absolute",
  },
  dashboardInnerLayout: {
    width: 360,
    left: 0,
  },
  rp12000000Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  noteLayout: {
    height: 27,
    position: "absolute",
  },
  notePosition: {
    top: 739,
    height: 27,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupLayout: {
    height: 305,
    position: "absolute",
  },
  groupLayout1: {
    width: 160,
    height: 305,
  },
  groupChildShadowBox: {
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChildShadowBox1: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  groupBorder: {
    borderRadius: Border.br_lg,
    borderColor: "#000",
  },
  homeTypo: {
    height: 21,
    fontSize: FontSize.size_base,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  homePosition: {
    top: 771,
    fontSize: FontSize.size_base,
  },
  frameIconLayout: {
    height: 32,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  allProductTypo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameViewLayout: {
    height: 307,
    position: "absolute",
  },
  groupChild1Position: {
    height: 173,
    top: 19,
    position: "absolute",
  },
  containerPosition: {
    top: 215,
    fontSize: FontSize.size_xl,
  },
  rp30000000Typo: {
    width: 100,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  rp30000000Position: {
    top: 271,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rp8000000Typo: {
    left: 6,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  rp8000000Position: {
    top: 267,
    fontSize: FontSize.size_base,
  },
  groupChildPosition: {
    top: 18,
    position: "absolute",
  },
  rp25000000Typo: {
    left: 7,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupChild6Layout: {
    width: 163,
    height: 305,
    top: 0,
    position: "absolute",
  },
  rp15000000Position: {
    left: 16,
    position: "absolute",
  },
  helloPosition: {
    color: Color.pink_300,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  chat20Layout: {
    height: 36,
    width: 36,
    position: "absolute",
  },
  groupChild: {
    left: 368,
    width: 377,
    top: 0,
  },
  groupItem: {
    left: 761,
    width: 365,
    top: 0,
  },
  wrapper: {
    top: 0,
  },
  rectangleParent: {
    width: 1126,
    top: 0,
    left: 0,
  },
  dashboardInner: {
    top: 147,
  },
  rekomendasi: {
    top: 353,
    left: 15,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  dashboardChild: {
    top: 732,
    backgroundColor: Color.pink_300,
    height: 61,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  note: {
    left: 124,
    width: 27,
  },
  home11Icon: {
    left: 35,
    width: 29,
    overflow: "hidden",
  },
  dashboardItem: {
    top: 414,
    left: 190,
    display: "none",
  },
  home: {
    left: 32,
    width: 35,
  },
  pesanan: {
    top: 772,
    left: 111,
    width: 53,
  },
  keranjang: {
    left: 195,
    width: 61,
  },
  profil: {
    width: 40,
    left: 292,
  },
  bag6: {
    left: 211,
    top: 740,
    width: 26,
  },
  frameIcon: {
    top: 738,
    left: 291,
    width: 32,
  },
  component1defaultChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.pink_200,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_sm,
    height: "100%",
    width: "100%",
  },
  allProduct: {
    height: "50%",
    width: "60.87%",
    top: "18.75%",
    left: "20%",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.white,
    textAlign: "center",
  },
  component1default: {
    top: 317,
    left: 236,
    width: 115,
  },
  groupInner: {
    top: 0,
    left: 0,
  },
  rectangleIcon: {
    width: 157,
    left: 2,
  },
  paketWhiteningMs: {
    width: 145,
    fontSize: FontSize.size_xl,
    left: 8,
    position: "absolute",
  },
  rp30000000: {
    left: 8,
  },
  rectangleGroup: {
    top: 0,
    left: 0,
  },
  groupChild1: {
    left: 4,
    width: 154,
  },
  maybelineSuperstayInk: {
    width: 151,
    left: 11,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp12000000: {
    width: 102,
    left: 11,
  },
  rectangleContainer: {
    left: 176,
    width: 162,
    top: 0,
  },
  groupChild3: {
    top: 10,
    width: 156,
    height: 171,
    left: 2,
    position: "absolute",
  },
  inezContourPlus: {
    top: 208,
    width: 148,
    fontSize: FontSize.size_xl,
  },
  rp8000000: {
    width: 90,
  },
  groupView: {
    top: 2,
    left: 353,
  },
  groupChild4: {
    width: 157,
    top: 0,
    left: 0,
  },
  groupChild5: {
    left: 17,
    width: 128,
    height: 168,
  },
  paket5in1Scarlett: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  whiteningSeries: {
    margin: Margin.m_md,
  },
  paket5in1ScarlettContainer: {
    width: 150,
    fontSize: FontSize.size_xl,
  },
  rp25000000: {
    width: 92,
  },
  rectangleParent1: {
    left: 533,
    width: 157,
    top: 0,
  },
  groupChild6: {
    borderRadius: Border.br_md,
    left: 0,
  },
  groupChild7: {
    width: 105,
    height: 155,
    left: 11,
  },
  somethincSerumHyaluronic9Container: {
    width: 140,
    fontSize: FontSize.size_xl,
  },
  rectangleParent2: {
    left: 704,
  },
  groupParent: {
    width: 867,
    top: 0,
    left: 0,
  },
  frameView: {
    top: 401,
    left: 12,
    width: 336,
  },
  hello: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    top: 0,
  },
  uviFirgia: {
    top: 23,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.rammettoOne,
  },
  notificationIcon: {
    top: 5,
    left: 257,
    height: 35,
    width: 35,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild8: {
    top: 67,
    left: 1,
    backgroundColor: Color.gray_600,
    width: 320,
    height: 40,
  },
  cariProdukTerbaikmu: {
    top: 79,
    left: 40,
    fontSize: FontSize.size_2xl,
    color: Color.gray_700,
  },
  searchIcon: {
    top: 77,
    left: 18,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  chat20: {
    top: 0,
    left: 0,
  },
  chat20Wrapper: {
    top: 3,
    left: 292,
  },
  helloParent: {
    top: 12,
    width: 328,
    height: 107,
  },
  dashboardInner1: {
    height: 131,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
    width: 360,
  },
  dashboard: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Dashboard;
