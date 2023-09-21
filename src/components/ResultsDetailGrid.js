import React, { useState } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import SingleDetail from "./SingleDetail";

const ResultsDetailGrid = ({ location, nav }) => {
  const residents = location.residents;

  return (
    <View>
      <FlatList
        data={residents}
        renderItem={({ item }) => {
          return <SingleDetail location={location} resident={item} nav={nav} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsDetailGrid;
