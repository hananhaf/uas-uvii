import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const RincianPesanan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rincianPesanan}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Pressable
          style={[styles.note, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Pesanan1")}
        >
          <Image
            style={[styles.iconLayout1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/8note2.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.home11Icon,
            styles.noteLayout,
            styles.notePosition,
            styles.iconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/2home112.png")}
        />
        <Text
          style={[
            styles.home,
            styles.pesananTypo,
            styles.homeTypo,
            styles.homePosition,
          ]}
        >
          Home
        </Text>
        <Text style={[styles.pesanan, styles.pesananTypo, styles.homeTypo]}>
          Pesanan
        </Text>
        <Text
          style={[
            styles.keranjang,
            styles.pesananTypo,
            styles.homeTypo,
            styles.homePosition,
          ]}
        >
          Keranjang
        </Text>
        <Text
          style={[
            styles.profil,
            styles.pesananTypo,
            styles.homeTypo,
            styles.homePosition,
          ]}
        >
          Profil
        </Text>
        <Pressable
          style={[styles.bag6, styles.noteLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/24bag62.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.userWrapper, styles.userLayout]}
          onPress={() => navigation.navigate("Profil")}
        >
          <Image
            style={[styles.userIcon, styles.userLayout]}
            resizeMode="cover"
            source={require("../assets/frame-33.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.metodePembayaran, styles.metodePembayaranTypo]}>
        Metode Pembayaran
      </Text>
      <Image
        style={styles.arrowLeft1Icon}
        resizeMode="cover"
        source={require("../assets/36arrowleft1.png")}
      />
      <Pressable
        style={[styles.ubah, styles.ubahPosition]}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={[styles.ubah1, styles.pesananTypo]}>Ubah</Text>
      </Pressable>
      <Text
        style={[styles.detailAnda, styles.ubahPosition, styles.pesananTypo]}
      >
        Detail Anda
      </Text>
      <Text style={[styles.totalPesanan, styles.pesananTypo]}>
        Total Pesanan
      </Text>
      <Image
        style={[styles.arrowLeft1Icon1, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/36arrowleft11.png")}
      />
      <Text style={[styles.cupsell, styles.cupsellTypo]}>CUPSELL</Text>
      <Image
        style={[styles.starIcon, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/77star.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("DetailPesanan")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Text style={[styles.checkout, styles.checkoutTypo]}>Checkout</Text>
      <View style={[styles.penerimaWrapper, styles.wrapperPosition]}>
        <Text style={[styles.penerima, styles.checkoutTypo]}>Penerima</Text>
      </View>
      <View style={[styles.detailPengirimanWrapper, styles.wrapperPosition]}>
        <Text style={[styles.detailPengiriman, styles.checkoutTypo]}>
          Detail Pengiriman
        </Text>
      </View>
      <View
        style={[
          styles.transferBankParent,
          styles.parentBorder1,
          styles.parentLayout,
        ]}
      >
        <Text style={[styles.transferBank, styles.ovoTypo]}>Transfer Bank</Text>
        <Image
          style={[styles.arrowLeft1Icon2, styles.arrowIconLayout1]}
          resizeMode="cover"
          source={require("../assets/36arrowleft12.png")}
        />
        <Image
          style={[styles.tickCircleIcon, styles.arrowLeft1Position]}
          resizeMode="cover"
          source={require("../assets/88tickcircle.png")}
        />
        <Text style={[styles.bankRakyatIndonesia, styles.msGlowOfficialTypo]}>
          BANK RAKYAT INDONESIA (BRI)
        </Text>
      </View>
      <View
        style={[styles.ovoParent, styles.parentPosition, styles.parentBorder1]}
      >
        <Text style={[styles.ovo, styles.ovoTypo]}>OVO</Text>
        <Image
          style={[styles.arrowLeft1Icon2, styles.arrowIconLayout1]}
          resizeMode="cover"
          source={require("../assets/36arrowleft12.png")}
        />
      </View>
      <Image
        style={[styles.arrowLeft1Icon4, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/36arrowleft14.png")}
      />
      <Text
        style={[
          styles.tampilkanSemua,
          styles.rp300000Typo,
          styles.rp300000Position,
        ]}
      >
        Tampilkan semua
      </Text>
      <Text
        style={[
          styles.rp30000000,
          styles.rp300000Typo,
          styles.rp300000Position,
        ]}
      >
        Rp. 300.000,00
      </Text>
      <Text
        style={[styles.rp300000, styles.rp300000Typo, styles.rp300000Position]}
      >
        Rp. 300.000
      </Text>
      <Text style={[styles.ringkasanPesanan, styles.metodePembayaranTypo]}>
        Ringkasan Pesanan
      </Text>
      <View
        style={[styles.danaParent, styles.parentBorder, styles.parentPosition]}
      >
        <Text style={[styles.dana, styles.ovoTypo]}>DANA</Text>
        <Image
          style={[styles.arrowLeft1Icon5, styles.arrowIconLayout1]}
          resizeMode="cover"
          source={require("../assets/36arrowleft15.png")}
        />
      </View>
      <View
        style={[
          styles.pengirimanParent,
          styles.parentBorder,
          styles.parentLayout,
        ]}
      >
        <Text style={[styles.dana, styles.ovoTypo]}>Pengiriman</Text>
        <Text style={[styles.rp1000000, styles.rp300000Typo]}>
          Rp. 10.000,00
        </Text>
      </View>
      <Text style={[styles.subtotal, styles.ovoTypo]}>Subtotal</Text>
      <Text style={[styles.rp31000000, styles.rp31000000Typo]}>
        Rp. 310.000,00
      </Text>
      <Pressable
        style={[
          styles.arrowLeft1,
          styles.arrowLeft1Position,
          styles.iconLayout,
        ]}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/36arrowleft16.png")}
        />
      </Pressable>
      <Text style={[styles.rincianPesanan1, styles.cupsellTypo]}>
        Rincian Pesanan
      </Text>
      <View style={styles.rincianPesananInner}>
        <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-46.png")}
          />
          <Text style={[styles.paketMsGlow, styles.paketMsGlowPosition]}>
            Paket MS GLOW SERIES
          </Text>
          <Text style={[styles.whiteningSeries, styles.paketMsGlowPosition]}>
            Whitening Series
          </Text>
          <Text style={[styles.rp300000001, styles.rp31000000Typo]}>
            Rp. 300.000,00
          </Text>
          <View
            style={[
              styles.msGlowOfficialParent,
              styles.rectangleGroupLayout,
              styles.parentBorder,
            ]}
          >
            <Text style={[styles.msGlowOfficial, styles.msGlowOfficialTypo]}>
              MS GLOW OFFICIAL
            </Text>
            <Image
              style={styles.arrowLeft1Icon6}
              resizeMode="cover"
              source={require("../assets/36arrowleft14.png")}
            />
            <Image
              style={[styles.arrowLeft1Icon7, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/36arrowleft18.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteLayout: {
    height: 23,
    position: "absolute",
  },
  notePosition: {
    top: 6,
    height: 23,
  },
  iconLayout2: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  pesananTypo: {
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  homeTypo: {
    fontWeight: "500",
    height: 18,
    color: Color.white,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  homePosition: {
    top: 33,
    fontWeight: "500",
  },
  userLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  metodePembayaranTypo: {
    width: 126,
    color: Color.black,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ubahPosition: {
    top: 216,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  iconPosition: {
    top: 20,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  cupsellTypo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  checkoutTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  wrapperPosition: {
    width: 303,
    left: 29,
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  parentBorder1: {
    height: 42,
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  parentLayout: {
    width: 285,
    position: "absolute",
    overflow: "hidden",
  },
  ovoTypo: {
    width: 78,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  arrowIconLayout1: {
    height: 19,
    width: 19,
    position: "absolute",
    overflow: "hidden",
  },
  arrowLeft1Position: {
    top: 14,
    position: "absolute",
  },
  msGlowOfficialTypo: {
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  parentPosition: {
    left: 37,
    width: 285,
    position: "absolute",
    overflow: "hidden",
  },
  arrowIconLayout: {
    width: 25,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  rp300000Typo: {
    width: 95,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rp300000Position: {
    left: 223,
    width: 95,
  },
  parentBorder: {
    height: 28,
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  rp31000000Typo: {
    width: 106,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroupLayout: {
    width: 340,
    position: "absolute",
    overflow: "hidden",
  },
  paketMsGlowPosition: {
    color: Color.gray_400,
    left: 115,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.pink_300,
    borderColor: "#fdadad",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: 0,
    height: 57,
    width: 360,
    left: 0,
    position: "absolute",
  },
  note: {
    left: 124,
    width: 27,
  },
  home11Icon: {
    width: 29,
    left: 35,
  },
  home: {
    width: 35,
    height: 18,
    textAlign: "left",
    color: Color.white,
    left: 32,
  },
  pesanan: {
    top: 34,
    left: 111,
    width: 53,
    height: 18,
    textAlign: "left",
    color: Color.white,
  },
  keranjang: {
    left: 195,
    width: 61,
    height: 18,
    textAlign: "left",
    color: Color.white,
  },
  profil: {
    width: 40,
    left: 297,
    height: 18,
    textAlign: "left",
    color: Color.white,
  },
  bag6: {
    left: 211,
    width: 26,
    top: 7,
  },
  userIcon: {
    top: 0,
    width: 32,
    left: 0,
  },
  userWrapper: {
    top: 3,
    left: 297,
  },
  rectangleParent: {
    top: 732,
    height: 57,
    width: 360,
    left: 0,
    position: "absolute",
  },
  metodePembayaran: {
    top: 379,
    left: 35,
  },
  arrowLeft1Icon: {
    top: 213,
    left: 302,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  ubah1: {
    width: 31,
    color: Color.black,
    textAlign: "left",
  },
  ubah: {
    left: 263,
  },
  detailAnda: {
    width: 68,
    left: 36,
    color: Color.black,
    fontWeight: "700",
    textAlign: "left",
  },
  totalPesanan: {
    top: 651,
    width: 86,
    color: Color.black,
    fontWeight: "700",
    textAlign: "left",
    left: 35,
    position: "absolute",
  },
  arrowLeft1Icon1: {
    left: 20,
  },
  cupsell: {
    top: 23,
    left: 138,
    color: Color.white,
  },
  starIcon: {
    left: 306,
  },
  icon2: {
    borderRadius: Border.br_lg,
  },
  wrapper: {
    left: 102,
    top: 684,
    width: 172,
    height: 40,
    position: "absolute",
  },
  checkout: {
    top: 693,
    left: 151,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    fontWeight: "700",
    color: Color.white,
  },
  penerima: {
    width: 93,
    left: 5,
    top: 5,
    color: Color.black,
  },
  penerimaWrapper: {
    top: 237,
    height: 56,
  },
  detailPengiriman: {
    width: 118,
    left: 5,
    top: 5,
    color: Color.black,
  },
  detailPengirimanWrapper: {
    top: 297,
    height: 64,
  },
  transferBank: {
    left: 5,
    top: 5,
  },
  arrowLeft1Icon2: {
    top: 13,
    left: 249,
  },
  tickCircleIcon: {
    left: 225,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  bankRakyatIndonesia: {
    top: 26,
    width: 193,
    left: 5,
  },
  transferBankParent: {
    top: 410,
    left: 36,
  },
  ovo: {
    top: 12,
    left: 5,
  },
  ovoParent: {
    top: 454,
  },
  arrowLeft1Icon4: {
    top: 376,
    left: 313,
  },
  tampilkanSemua: {
    top: 378,
  },
  rp30000000: {
    top: 588,
  },
  rp300000: {
    top: 613,
  },
  ringkasanPesanan: {
    top: 544,
    left: 32,
  },
  dana: {
    left: 5,
    top: 7,
  },
  arrowLeft1Icon5: {
    left: 250,
    top: 5,
  },
  danaParent: {
    top: 501,
  },
  rp1000000: {
    left: 184,
    top: 5,
  },
  pengirimanParent: {
    top: 607,
    left: 39,
  },
  subtotal: {
    top: 593,
    left: 43,
  },
  rp31000000: {
    top: 646,
    left: 221,
  },
  icon3: {
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 19,
  },
  rincianPesanan1: {
    top: 18,
    left: 63,
    width: 187,
    color: Color.black,
  },
  frameChild: {
    left: 8,
    width: 99,
    height: 85,
    top: 38,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  paketMsGlow: {
    textAlign: "center",
    top: 38,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.gray_400,
  },
  whiteningSeries: {
    top: 64,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  rp300000001: {
    top: 85,
    left: 112,
  },
  msGlowOfficial: {
    left: 13,
    width: 162,
    top: 7,
  },
  arrowLeft1Icon6: {
    top: 4,
    left: 115,
    width: 25,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  arrowLeft1Icon7: {
    top: 169,
    left: 140,
  },
  msGlowOfficialParent: {
    top: 1,
    left: 0,
    width: 340,
    height: 28,
  },
  rectangleGroup: {
    top: 11,
    left: 10,
    backgroundColor: Color.gray_100,
    height: 129,
    borderRadius: Border.br_sm,
  },
  rincianPesananInner: {
    top: 50,
    height: 147,
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  rincianPesanan: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default RincianPesanan;
