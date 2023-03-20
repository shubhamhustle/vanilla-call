import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Card, Title } from "react-native-paper";

export const TradeInfoCard = ({ trade = {} }) => {
  const {
    instrument = "TATA MOTORS",
    qunatity = 15,
    buyPrice = 18,
    sellPrice = 19,
    target = 123,
    stopLoss = 1234,
    rational = "100 some random street",
    slTriggeredAt = 12 - 10 - 2022,
    tgtTriggeredAt = 12 - 10 - 2022,
    boughtAt = 12 - 10 - 2022,
    soldAt = 12 - 10 - 2022,
    holdTill = 12 - 10 - 2022,
    trailingSL = 10,
    category = "Cash",
    userId = "",
    tradeId = "",
  } = trade;

  return (
    <Card elevation={5} style={styles.card} containerStyle={{ padding: 0 }}>
      <Title>{instrument}</Title>
      <View>
        <Text style={styles.title}></Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 30 },
});
