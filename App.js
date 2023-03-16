import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { TradesScreen } from "./src/features/trades/screens/trades.screen";

export default function App() {
  return (
    <>
      <TradesScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
