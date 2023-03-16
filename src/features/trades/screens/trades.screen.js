import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

import { TradeInfo } from "../components/trade-info.component";

export const TradesScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <TradeInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
