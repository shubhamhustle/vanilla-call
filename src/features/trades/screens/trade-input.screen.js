import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { TradeInput } from "../components/trade-input.component";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";

const TradeList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
});

export const TradesInputScreen = () => (
  <SafeArea>
    <View style={styles.list}>
      <TradeInput />
    </View>
  </SafeArea>
);

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
