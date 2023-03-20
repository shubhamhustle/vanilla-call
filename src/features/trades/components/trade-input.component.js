import React from "react";
import { Text, View } from "react-native";
import { VanillaTextInput as TextInput } from "../../../components/TextInput";
import { StyleSheet } from "react-native";

export const TradeInput = ({ trade = {} }) => {
  return (
    <View>
      <TextInput text={"Instrument"} />
      <TextInput text={"Qunatity"} />
      <TextInput text={"Buy Price"} />
      <TextInput text={"Target"} />
      <TextInput text={"StopLoss"} />
      <TextInput text={"Rational"} />
      <TextInput text={"Category"} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "space-between",
  },
});
