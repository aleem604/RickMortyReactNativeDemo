import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { Context } from "../context/LocationContext";
import ResultsDetailGrid from "../components/ResultsDetailGrid";

const ShowScreen = ({ route, navigation }) => {
  const { state, getLocationById } = useContext(Context);
  const location = state.find((f) => f.id == route.params.id);

  return (
    <View>
      <ResultsDetailGrid location={location} />
    </View>
  );
};

export default ShowScreen;
