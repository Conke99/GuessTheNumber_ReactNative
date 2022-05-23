import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../Util/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent500,
    padding: deviceWidth < 300 ? 12 : 24,
    margin: deviceWidth < 300 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "black",
    fontSize: deviceWidth < 300 ? 28 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
