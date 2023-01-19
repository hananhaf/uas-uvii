import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DetailPesanan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailPesanan}>
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
            source={require("../assets/2home113.png")}
          />
        </Pressable>
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
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/frame-33.png")}
        />
      </View>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("RincianPesanan")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.detailPesanan1,
          styles.pesananTypo,
          styles.detailPesanan1Typo,
        ]}
      >
        Detail Pesanan
      </Text>
      <Image
        style={styles.detailPesananChild}
        resizeMode="cover"
        source={require("../assets/rectangle-431.png")}
      />
      <Pressable
        style={styles.selesai}
        onPress={() => navigation.navigate("Pesanan1")}
      >
        <Text style={[styles.selesai1, styles.selesai1Typo]}>Selesai</Text>
      </Pressable>
      <Text
        style={[
          styles.pesananSelesai,
          styles.pesananSelesaiPosition,
          styles.pesananTypo,
        ]}
      >
        PESANAN SELESAI
      </Text>
      <Image
        style={styles.tickCircleIcon}
        resizeMode="cover"
        source={require("../assets/88tickcircle1.png")}
      />
      <Text style={[styles.id43342244555555, styles.pembayaranTypo]}>
        ID43342244555555
      </Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View
          style={[
            styles.perincianPesanWrapper,
            styles.frameParentPosition,
            styles.groupChildBorder,
          ]}
        >
          <Text
            style={[
              styles.perincianPesan,
              styles.selesai1Typo,
              styles.detailPesanan1Typo,
            ]}
          >
            Perincian Pesan:
          </Text>
        </View>
        <Text style={[styles.nomorPesanan, styles.textTypo]}>
          Nomor Pesanan
        </Text>
        <Text style={[styles.tanggalPemesanan, styles.pembayaranTypo]}>
          Tanggal Pemesanan
        </Text>
        <Text
          style={[
            styles.metodePembayaran,
            styles.pembayaranTypo,
            styles.pesananSelesaiPosition,
          ]}
        >
          Metode Pembayaran
        </Text>
        <Text style={[styles.waktuPembayaran, styles.pembayaranTypo]}>
          Waktu Pembayaran
        </Text>
        <Text style={[styles.subtotal, styles.pembayaranTypo]}>Subtotal</Text>
        <Text style={[styles.text, styles.textTypo]}>23434540346868473</Text>
        <Text style={[styles.nov152023, styles.novTypo]}>
          Nov 15, 2023 2:11 PM
        </Text>
        <Text style={[styles.bankRakyatIndonesia, styles.pembayaranTypo]}>
          Bank Rakyat Indonesia (BRI)
        </Text>
        <Text style={[styles.nov1520231, styles.novTypo]}>
          Nov 15, 2023 2:15 PM
        </Text>
        <Text style={[styles.rp31000000, styles.pembayaranTypo]}>
          Rp. 310.000,00
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 59,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderStyle: "solid",
    top: 0,
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
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    color: Color.white,
    fontWeight: "500",
    position: "absolute",
  },
  homeTypo1: {
    top: 34,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
  },
  pesananTypo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  detailPesanan1Typo: {
    fontWeight: "500",
    color: Color.black,
  },
  selesai1Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  pesananSelesaiPosition: {
    top: 132,
    color: Color.black,
  },
  pembayaranTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameParentPosition: {
    width: 359,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  textTypo: {
    top: 50,
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  novTypo: {
    left: 199,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.pink_300,
    borderColor: "#fdadad",
    borderTopWidth: 1,
    borderRadius: Border.br_xl,
  },
  icon: {
    borderRadius: Border.br_xl,
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
    top: 35,
    width: 53,
    left: 111,
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
  groupItem: {
    top: 2,
    left: 296,
    width: 32,
    height: 32,
    position: "absolute",
  },
  rectangleParent: {
    top: 732,
  },
  arrowLeft1: {
    top: 20,
    width: 30,
    height: 30,
    left: 20,
    position: "absolute",
  },
  detailPesanan1: {
    top: 23,
    left: 56,
    color: Color.black,
  },
  detailPesananChild: {
    top: 624,
    left: 132,
    borderRadius: Border.br_lg,
    width: 109,
    height: 40,
    position: "absolute",
  },
  selesai1: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.white,
    fontSize: FontSize.size_xl,
  },
  selesai: {
    left: 159,
    top: 635,
    position: "absolute",
  },
  pesananSelesai: {
    left: 88,
    fontWeight: "700",
  },
  tickCircleIcon: {
    top: 87,
    left: 162,
    height: 35,
    width: 35,
    position: "absolute",
    overflow: "hidden",
  },
  id43342244555555: {
    top: 174,
    color: "#e94949",
    width: 130,
    left: 111,
  },
  perincianPesan: {
    top: 16,
    width: 116,
    left: 19,
    color: Color.black,
    position: "absolute",
  },
  perincianPesanWrapper: {
    borderColor: "#a2a2a2",
    borderBottomWidth: 1,
    height: 40,
  },
  nomorPesanan: {
    width: 112,
    left: 19,
  },
  tanggalPemesanan: {
    top: 81,
    width: 80,
    left: 19,
    color: Color.black,
  },
  metodePembayaran: {
    width: 79,
    left: 20,
  },
  waktuPembayaran: {
    top: 183,
    width: 78,
    color: Color.black,
    left: 20,
  },
  subtotal: {
    top: 240,
    left: 23,
    width: 55,
    color: Color.black,
  },
  text: {
    left: 203,
    width: 140,
    fontWeight: "700",
  },
  nov152023: {
    top: 86,
    width: 144,
  },
  bankRakyatIndonesia: {
    top: 135,
    left: 196,
    width: 147,
    fontWeight: "700",
    color: Color.black,
  },
  nov1520231: {
    top: 191,
    width: 140,
  },
  rp31000000: {
    top: 237,
    left: 242,
    width: 101,
    fontWeight: "700",
    color: Color.black,
  },
  frameParent: {
    top: 200,
    height: 297,
  },
  detailPesanan: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default DetailPesanan;
