import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkout}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Pressable
          style={[styles.note, styles.noteLayout, styles.notePosition]}
          onPress={() => navigation.navigate("Pesanan1")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/8note3.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.home11Icon,
            styles.noteLayout,
            styles.notePosition,
            styles.iconLayout1,
          ]}
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
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/24bag63.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Profil")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/frame-33.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.checkoutChild, styles.checkoutLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.checkoutItem, styles.checkoutLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.pengirimanKeRumah, styles.ambilKeTokoTypo]}>
        PENGIRIMAN KE RUMAH
      </Text>
      <Text style={[styles.ambilKeToko, styles.ambilKeTokoTypo]}>
        AMBIL KE TOKO
      </Text>
      <Text style={styles.detailAnda}>Detail Anda :</Text>
      <Text
        style={[
          styles.metodePengiriman,
          styles.lokasiTypo,
          styles.kecamatanTypo,
        ]}
      >
        Metode Pengiriman :
      </Text>
      <View
        style={[
          styles.penerimaWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
          styles.wrapperPosition,
        ]}
      >
        <Text
          style={[styles.penerima, styles.penerimaTypo, styles.emailPosition]}
        >
          Penerima
        </Text>
      </View>
      <View
        style={[
          styles.emailWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.emailTypo, styles.emailPosition]}>Email</Text>
      </View>
      <View
        style={[
          styles.alamatWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
          styles.wrapperPosition,
        ]}
      >
        <Text style={styles.emailPosition}>Alamat</Text>
      </View>
      <Text style={[styles.lokasi, styles.lokasiPosition, styles.lokasiTypo]}>
        Lokasi :
      </Text>
      <View
        style={[
          styles.provinsiWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
          styles.wrapperPosition,
        ]}
      >
        <Text style={styles.emailPosition}>Provinsi</Text>
      </View>
      <View
        style={[
          styles.kotaWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
          styles.wrapperPosition,
        ]}
      >
        <Text style={styles.emailPosition}>Kota</Text>
      </View>
      <View
        style={[
          styles.kecamatanWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
        ]}
      >
        <Text
          style={[styles.kecamatan, styles.emailTypo, styles.kecamatanTypo]}
        >
          Kecamatan
        </Text>
      </View>
      <View
        style={[
          styles.kelurahanWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.lokasiPosition, styles.emailTypo]}>Kelurahan</Text>
      </View>
      <View
        style={[
          styles.nomorHandphoneWrapper,
          styles.wrapperLayout,
          styles.wrapperLayout1,
        ]}
      >
        <Text
          style={[
            styles.nomorHandphone,
            styles.lokasiPosition,
            styles.penerimaTypo,
          ]}
        >
          Nomor Handphone
        </Text>
      </View>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text style={styles.detailPemesan}>Detail Pemesan</Text>
      <Image
        style={[styles.checkoutInner, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-431.png")}
      />
      <Pressable
        style={styles.simpan}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Text style={styles.simpan1}>Simpan</Text>
      </Pressable>
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
  iconLayout1: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  homeTypo: {
    height: 18,
    color: Color.white,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  homeTypo1: {
    top: 34,
    color: Color.white,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  checkoutLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  ambilKeTokoTypo: {
    width: 99,
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  lokasiTypo: {
    width: 127,
    fontWeight: "700",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  kecamatanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  wrapperLayout: {
    height: 40,
    position: "absolute",
  },
  wrapperLayout1: {
    borderBottomWidth: 1,
    borderColor: "#a2a2a2",
    height: 40,
    borderStyle: "solid",
    width: 360,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  wrapperPosition: {
    left: 0,
    borderColor: "#a2a2a2",
  },
  penerimaTypo: {
    color: Color.gray_200,
    top: 16,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  emailPosition: {
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  lokasiPosition: {
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  emailTypo: {
    width: 103,
    color: Color.gray_200,
    fontSize: FontSize.size_xl,
    top: 16,
    fontWeight: "500",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.pink_300,
    borderColor: "#fdadad",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    height: 59,
    width: 360,
    left: 0,
    position: "absolute",
  },
  note: {
    left: 124,
    width: 27,
  },
  home11Icon: {
    left: 35,
    width: 29,
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
    left: 293,
    width: 40,
  },
  bag6: {
    left: 211,
    top: 7,
    width: 26,
  },
  wrapper: {
    left: 292,
    top: 4,
    width: 32,
    height: 32,
    position: "absolute",
  },
  rectangleParent: {
    top: 732,
    height: 59,
    width: 360,
    left: 0,
    position: "absolute",
  },
  checkoutChild: {
    top: 553,
    left: 203,
  },
  checkoutItem: {
    top: 551,
    left: 82,
  },
  pengirimanKeRumah: {
    top: 550,
    left: 234,
  },
  ambilKeToko: {
    top: 558,
    left: 114,
  },
  detailAnda: {
    top: 126,
    left: 17,
    width: 76,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  metodePengiriman: {
    top: 514,
    left: 8,
  },
  penerima: {
    width: 93,
  },
  penerimaWrapper: {
    top: 144,
  },
  emailWrapper: {
    top: 184,
  },
  alamatWrapper: {
    top: 287,
  },
  lokasi: {
    top: 276,
  },
  provinsiWrapper: {
    top: 327,
  },
  kotaWrapper: {
    top: 367,
  },
  kecamatan: {
    left: 23,
  },
  kecamatanWrapper: {
    top: 407,
    left: -3,
  },
  kelurahanWrapper: {
    top: 447,
  },
  nomorHandphone: {
    width: 130,
  },
  nomorHandphoneWrapper: {
    top: 225,
    left: -1,
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
  detailPemesan: {
    top: 23,
    left: 60,
    fontSize: FontSize.size_4xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  checkoutInner: {
    top: 624,
    left: 127,
    borderRadius: Border.br_lg,
    width: 109,
  },
  simpan1: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
  },
  simpan: {
    left: 156,
    top: 634,
    position: "absolute",
  },
  checkout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Checkout;
