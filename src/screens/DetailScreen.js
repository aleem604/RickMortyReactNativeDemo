import React, { useContext, useState } from "react";
import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Octicons } from "@expo/vector-icons";

const DetailScreen = ({ route }) => {
  const { location, detail } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleModal = () => {
    setModalVisible(false);
    console.log("handle model");
  };

  return (
    <View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Image
            style={styles.cell1}
            source={{
              uri: detail.image,
            }}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
            <Text style={styles.title}>{detail.name}</Text>
            <Text style={styles.h4}>
              Gender: <strong>{detail.gender}</strong>
            </Text>
            <Text style={styles.h4}>
              Species: <strong>{detail.species}</strong>
            </Text>
            <Text style={styles.h4}>
              Type: <strong>{detail.type}</strong>
            </Text>
            <Text style={styles.colorWhite}>
              <Octicons
                name="dot-fill"
                size={24}
                style={styles.icon}
                color={detail.status == "Alive" ? "green" : "red"}
              />
              {detail.status} - {detail.species}
            </Text>
            <Text>
              <p style={styles.greyText}>
                Last Known location:
                <div style={styles.h3}>{location.name}</div>
              </p>
            </Text>
            <Text>
              <p style={styles.greyText}>
                First seen in:
                <div style={styles.h3}>{location.dimension}</div>
              </p>
            </Text>
          </View>
        </View>
        <Button title="Add Notes" onPress={() => toggleModal()} />
      </View>
      <View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{ backgroundColor: "#aaa", lineHeight: 35, padding: 25 }}
          >
            <Text style={styles.h3}>Add Notes!</Text>
            <TextInput style={styles.text} onChange={(t) => setNote(t)} />
            <Button title="Save Note" onPress={handleModal} />
          </View>
        </Modal>
      </View>
    </View>
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
    lineHeight: 25,
  },
  cell1: {
    flex: 1,
    padding: 5,
    borderWidth: 0,
    height: 200,
    textAlign: "center",
  },
  cell2: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    textAlign: "left",
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
    paddingHorizontal: 10,
    color: "white",
  },
  h4: {
    fontSize: 13,
    paddingHorizontal: 10,
    paddingLeft: 0,
    lineHeight: 30,
    color: "white",
  },
  icon: {
    position: "relative",
    top: 4,
    marginRight: 5,
  },
  greyText: {
    paddingTop: 10,
    margin: 2,
    color: "rgb(158, 158, 158)",
  },
  colorWhite: {
    color: "white",
  },
  colorLightGrey: {
    color: "rgb(158, 158, 158)",
  },
  text: {
    height: 30,
    borderBlockColor: "grey",
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    marginVertical: 20,
  },
});

export default DetailScreen;
