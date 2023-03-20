import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { TradeInput } from "../components/trade-input.component";
import { TradeInfoCard } from "../components/trade-info-card.component";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";

const TradeList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
});

export const TradesScreen = () => (
  <SafeArea>
    <View style={styles.search}>
      <Searchbar placeholder="Search My Trades" />
    </View>

    <View style={styles.list}>
      <FlatList
        data={[
          {
            instrument: "TATA MOTORS",
            qunatity: 15,
            buyPrice: 18,
            sellPrice: 19,
            target: 123,
            stopLoss: 1234,
            rational: "100 some random street",
            slTriggeredAt: 12 - 10 - 2022,
            tgtTriggeredAt: 12 - 10 - 2022,
            boughtAt: 12 - 10 - 2022,
            soldAt: 12 - 10 - 2022,
            holdTill: 12 - 10 - 2022,
            trailingSL: 10,
            category: "Cash",
            userId: "",
            tradeId: "",
          },
        ]}
        renderItem={() => <TradeInfoCard />}
        keyExtractor={(item) => item.tradeId}
        contentContainerStyle={{ padding: 16 }}
      />
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
