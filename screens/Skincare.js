import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Skincare = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.skincare}>
      <View style={styles.skincareInner}>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.groupParentLayout]}>
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text
              style={[
                styles.paketMakeUp,
                styles.makeTypo,
                styles.paketMakeUpPosition,
                styles.paketMakeUpTypo,
              ]}
            >
              Paket Make Up YOU
            </Text>
            <Text
              style={[
                styles.rp43400000,
                styles.rp43400000Layout,
                styles.makeTypo,
              ]}
            >
              Rp. 434.000,00
            </Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupLayout, styles.groupShadowBox]} />
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-55.png")}
            />
            <Text
              style={[
                styles.makeOverSilky,
                styles.rectangleIconPosition,
                styles.makeTypo,
              ]}
            >
              Make Over Silky Smooth Translucent Powder
            </Text>
            <Text
              style={[
                styles.rp15000000,
                styles.rp15000000Typo,
                styles.rp43400000Layout,
              ]}
            >
              Rp. 150.000,00
            </Text>
          </View>
          <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={[
                styles.groupChild1,
                styles.groupChildLayout,
                styles.paketMakeUpPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-53.png")}
            />
            <Text
              style={[
                styles.skintificSalicylicAcid,
                styles.inezContourPlusTypo,
                styles.rp17000000Position,
              ]}
            >
              Skintific Salicylic Acid Anti Acne Serum
            </Text>
            <Text
              style={[
                styles.rp17000000,
                styles.rp17000000Position,
                styles.rp9900000Typo,
              ]}
            >
              Rp. 170.000,00
            </Text>
          </View>
          <View
            style={[
              styles.groupView,
              styles.groupViewPosition,
              styles.groupParentLayout,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-56.png")}
            />
            <Text
              style={[
                styles.lacocoAloevera,
                styles.groupChild11Layout,
                styles.makeTypo,
              ]}
            >
              LACOCO Aloevera
            </Text>
            <Text style={[styles.rp19500000, styles.rp19500000Typo]}>
              Rp. 195.000,00
            </Text>
          </View>
          <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-58.png")}
            />
            <Text style={[styles.maybelineSkyHigh, styles.makeTypo]}>
              Maybeline Sky High Waterproof Mascara
            </Text>
            <Text style={[styles.rp19500000, styles.rp19500000Typo]}>
              Rp. 170.000,00
            </Text>
          </View>
          <View
            style={[
              styles.rectangleParent2,
              styles.groupViewPosition,
              styles.groupParentLayout,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={[
                styles.groupChild7,
                styles.groupChild7Position,
                styles.groupChildLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-54.png")}
            />
            <Text
              style={[
                styles.deepTreatmentEssence,
                styles.groupChild7Position,
                styles.makeTypo,
                styles.paketMakeUpTypo,
              ]}
            >
              Deep Treatment Essence ms glow
            </Text>
            <Text
              style={[
                styles.rp150000001,
                styles.groupChild7Position,
                styles.rp19500000Typo,
              ]}
            >
              Rp. 150.000,00
            </Text>
          </View>
          <View
            style={[styles.rectangleParent3, styles.rectangleParentPosition]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={styles.groupChild9}
              resizeMode="cover"
              source={require("../assets/rectangle-63.png")}
            />
            <Text style={[styles.rp9900000, styles.rp9900000Typo]}>
              Rp. 99.000,00
            </Text>
            <Text
              style={[
                styles.inezContourPlus,
                styles.groupViewPosition,
                styles.inezContourPlusTypo,
              ]}
            >
              Inez Contour Plus Eyeshadow Colection
            </Text>
          </View>
          <View
            style={[styles.rectangleParent4, styles.rectangleParentPosition]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupParentLayout,
              ]}
            />
            <Image
              style={[styles.groupChild11, styles.groupChild11Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-64.png")}
            />
            <Text style={[styles.rp6700000, styles.rp9900000Typo]}>
              Rp. 67.000,00
            </Text>
            <Text style={[styles.wardahIntensMatte, styles.rp15000000Typo]}>
              Wardah Intens Matte Lipstick
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.skincareChild, styles.frameViewPosition]}>
        <View style={[styles.rectangleParent5, styles.groupChild12Layout]}>
          <View style={[styles.groupChild12, styles.groupChild12Layout]} />
          <Text style={styles.pesanan}>Pesanan</Text>
          <Pressable
            style={[styles.note, styles.noteLayout, styles.notePosition]}
            onPress={() => navigation.navigate("Pesanan1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/8note1.png")}
            />
          </Pressable>
          <Text style={[styles.home, styles.homeLayout, styles.homeTypo]}>
            Home
          </Text>
          <Pressable
            style={[styles.home11, styles.noteLayout, styles.notePosition]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/2home111.png")}
            />
          </Pressable>
          <Text style={[styles.keranjang, styles.homeTypo]}>Keranjang</Text>
          <Pressable
            style={[styles.bag6, styles.noteLayout]}
            onPress={() => navigation.navigate("Keranjang")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/24bag61.png")}
            />
          </Pressable>
          <Text style={[styles.profil, styles.homeTypo]}>Profil</Text>
          <Pressable
            style={styles.user}
            onPress={() => navigation.navigate("Profil")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.helloParent}>
          <Text style={[styles.hello, styles.helloPosition]}>Hello,</Text>
          <Text style={[styles.uviFirgia, styles.helloPosition]}>
            Uvi Firgia
          </Text>
          <Image
            style={[styles.notificationIcon, styles.homeLayout]}
            resizeMode="cover"
            source={require("../assets/76notification1.png")}
          />
          <View style={styles.groupChild13} />
          <Text style={styles.cariProdukTerbaikmu}>Cari Produk Terbaikmu</Text>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../assets/38search.png")}
          />
          <View style={[styles.chat20Wrapper, styles.chat20Layout]}>
            <Pressable
              style={[styles.chat20, styles.chat20Layout]}
              onPress={() => navigation.navigate("Chat")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/47chat201.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 279,
    width: 160,
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: "#000",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_lg,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  makeTypo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  paketMakeUpPosition: {
    left: 8,
    position: "absolute",
  },
  paketMakeUpTypo: {
    width: 151,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  rp43400000Layout: {
    width: 90,
    fontSize: FontSize.size_base,
  },
  groupLayout: {
    height: 278,
    width: 160,
    position: "absolute",
  },
  rectangleIconPosition: {
    width: 147,
    left: 6,
    position: "absolute",
  },
  rp15000000Typo: {
    left: 13,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildLayout: {
    width: 135,
    height: 165,
    borderRadius: Border.br_sm,
  },
  inezContourPlusTypo: {
    width: 149,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  rp17000000Position: {
    left: 11,
    position: "absolute",
  },
  rp9900000Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  groupViewPosition: {
    left: 4,
    position: "absolute",
  },
  groupChild11Layout: {
    width: 141,
    position: "absolute",
  },
  rp19500000Typo: {
    width: 92,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  groupChild7Position: {
    left: 9,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 882,
    height: 279,
    width: 160,
    position: "absolute",
  },
  frameViewPosition: {
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild12Layout: {
    height: 62,
    width: 360,
    left: 0,
    position: "absolute",
  },
  noteLayout: {
    height: 25,
    position: "absolute",
  },
  notePosition: {
    top: 6,
    height: 25,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homeLayout: {
    width: 35,
    position: "absolute",
  },
  homeTypo: {
    top: 36,
    height: 19,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
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
    position: "absolute",
  },
  groupItem: {
    height: 165,
    width: 151,
    borderRadius: Border.br_sm,
    top: 13,
    left: 3,
    position: "absolute",
  },
  paketMakeUp: {
    top: 189,
    fontSize: FontSize.size_xl,
  },
  rp43400000: {
    top: 227,
    left: 12,
    position: "absolute",
  },
  rectangleParent: {
    left: 3,
    width: 160,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: 164,
    top: 12,
    borderRadius: Border.br_sm,
  },
  makeOverSilky: {
    top: 181,
    height: 54,
    fontSize: FontSize.size_xl,
  },
  rp15000000: {
    top: 236,
    height: 15,
  },
  rectangleGroup: {
    top: 293,
    left: 173,
  },
  groupChild1: {
    top: 15,
  },
  skintificSalicylicAcid: {
    top: 184,
  },
  rp17000000: {
    top: 225,
    width: 106,
  },
  rectangleContainer: {
    left: 173,
    top: 0,
    position: "absolute",
  },
  groupChild3: {
    top: 12,
    left: 12,
    position: "absolute",
  },
  lacocoAloevera: {
    top: 188,
    left: 12,
    fontSize: FontSize.size_xl,
  },
  rp19500000: {
    top: 229,
    left: 12,
    position: "absolute",
  },
  groupView: {
    top: 587,
  },
  maybelineSkyHigh: {
    top: 177,
    width: 144,
    left: 12,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleParent1: {
    top: 588,
    left: 174,
    position: "absolute",
  },
  groupChild7: {
    top: 16,
  },
  deepTreatmentEssence: {
    top: 191,
    fontSize: FontSize.size_xl,
  },
  rp150000001: {
    top: 237,
  },
  rectangleParent2: {
    top: 292,
  },
  groupChild9: {
    width: 137,
    height: 169,
    left: 12,
    top: 13,
    position: "absolute",
  },
  rp9900000: {
    top: 248,
    width: 111,
    left: 12,
    position: "absolute",
  },
  inezContourPlus: {
    top: 198,
  },
  rectangleParent3: {
    left: 174,
  },
  groupChild11: {
    left: 10,
    height: 162,
    top: 13,
  },
  rp6700000: {
    top: 215,
    left: 19,
    width: 109,
    position: "absolute",
  },
  wardahIntensMatte: {
    top: 162,
    width: 120,
    fontSize: FontSize.size_xl,
  },
  rectangleParent4: {
    left: 0,
  },
  groupParent: {
    top: -1,
    left: -1,
    width: 334,
    height: 1161,
    position: "absolute",
  },
  skincareInner: {
    top: 149,
    left: 17,
    width: 333,
    height: 576,
    position: "absolute",
  },
  groupChild12: {
    backgroundColor: Color.pink_300,
    borderColor: "#fdadad",
    borderTopWidth: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    height: 62,
    top: 0,
  },
  pesanan: {
    top: 37,
    left: 111,
    width: 53,
    height: 19,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
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
  home: {
    left: 32,
  },
  home11: {
    left: 35,
    width: 29,
  },
  keranjang: {
    left: 195,
    width: 61,
    position: "absolute",
  },
  bag6: {
    left: 211,
    top: 7,
    width: 26,
  },
  profil: {
    left: 297,
    width: 40,
    position: "absolute",
  },
  user: {
    left: 295,
    width: 32,
    height: 33,
    top: 4,
    position: "absolute",
  },
  rectangleParent5: {
    top: 4,
  },
  skincareChild: {
    top: 730,
    height: 70,
  },
  hello: {
    fontWeight: "700",
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontSize: FontSize.size_xl,
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
    overflow: "hidden",
  },
  groupChild13: {
    top: 67,
    left: 1,
    backgroundColor: Color.gray_600,
    width: 320,
    height: 40,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  cariProdukTerbaikmu: {
    top: 79,
    left: 40,
    fontSize: FontSize.size_2xl,
    color: Color.gray_700,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  searchIcon: {
    top: 77,
    left: 18,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  chat20: {
    left: 0,
    top: 0,
  },
  chat20Wrapper: {
    top: 3,
    left: 292,
  },
  helloParent: {
    left: 16,
    width: 328,
    height: 107,
    top: 12,
    position: "absolute",
  },
  frameView: {
    height: 131,
    top: 0,
  },
  skincare: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Skincare;
