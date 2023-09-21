import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ResultsDetail = ({ result }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Show", { id: result.id })}
    >
      <View style={styles.container}>
        <Text style={styles.name}>{result.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    padding: 15,
    borderColor: "grey",
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ResultsDetail;
