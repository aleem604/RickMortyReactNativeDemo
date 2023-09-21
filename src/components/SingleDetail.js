import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import jsonServer from "../api/jsonServer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SingleDetail = ({ location, resident }) => {
  const navigation = useNavigation();
  const [residentDetail, setResidentDetail] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    jsonServer.get(resident).then((res) => {
      console.log(res.data);
      setResidentDetail(res.data);
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", {
          location: location,
          detail: residentDetail,
        });
      }}
    >
      <View style={styles.table}>
        <View style={styles.row}>
          <Image
            style={styles.cell1}
            source={{
              uri: residentDetail.image,
            }}
          />
          <View style={styles.cell2}>
            <Text style={styles.title}>{residentDetail.name}</Text>
            <Text style={styles.colorWhite}>
              <Octicons
                name="dot-fill"
                size={24}
                style={styles.icon}
                color={residentDetail.status == "Alive" ? "green" : "red"}
              />
              {residentDetail.status} - {residentDetail.species}
            </Text>
            <Text>
              <p style={styles.greyText}>Last Known location:</p>
              <div style={styles.h3}>{location.name}</div>
            </Text>
            <Text>
              <p style={styles.greyText}>First seen in:</p>
              <div style={styles.h3}>{location.dimension}</div>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    marginTop: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cell1: {
    flex: 1,
    padding: 5,
    borderWidth: 0,
    width: 200,
    height: 150,
    textAlign: "center",
  },
  cell2: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    textAlign: "left",
    height: 150,
    fontSize: 18,
    color: "black",
    backgroundColor: "rgb(60, 62, 68)",
    color: "white",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  h3: {
    fontSize: 15,
    color: "white",
  },
  icon: {
    position: "relative",
    top: 4,
    marginRight: 5,
  },
  greyText: {
    padding: 0,
    margin: 0,
    color: "rgb(158, 158, 158)",
  },
  colorWhite: {
    color: "white",
  },
  colorLightGrey: {
    color: "rgb(158, 158, 158)",
  },
});

export default SingleDetail;
