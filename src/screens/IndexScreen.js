import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Context as LocationContext } from "../context/LocationContext";
import ResultsDetailGrid from "../components/ResultsDetailGrid";
import ResultsDetail from "../components/ResultsDetail";

const IndexScreen = ({ navigation }) => {
  const { state, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();

    navigation.addListener("focus", () => {
      getLocations();
    });
  }, []);

  return (
    <View style={styles.row}>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
