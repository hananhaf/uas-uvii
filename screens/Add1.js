import * as React from "react";
import { StyleSheet, View } from "react-native";

const Add1 = () => {
  return (
    <View style={styles.add}>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
  },
  add: {
    flex: 1,
    width: "100%",
    height: 30,
  },
});

export default Add1;
