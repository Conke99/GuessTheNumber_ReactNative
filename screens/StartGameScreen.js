import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Colors from "../Util/colors";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props) {
  const [enteredNum, setEnteredNum] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandlar(enteredText) {
    setEnteredNum(enteredText);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNum);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be a number 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]); // show alert ...
      return;
    }

    props.pickedNumHandler(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.RootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.NumInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandlar}
              value={enteredNum}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  NumInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  RootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
