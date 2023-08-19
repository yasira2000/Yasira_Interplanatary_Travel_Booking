import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import TouchableRow from "./touchable-row";

export default function PlanTravel() {
  const row1 = { text: "Promotion", bgColor: "lime" };
  const row2 = { text: "Promotion", bgColor: "lime" };
  const row3 = { text: "Promotion", bgColor: "lime" };
  const row4 = { text: "Promotion", bgColor: "lime" };
  const row5 = { text: "Promotion", bgColor: "lime" };

  const Data = [
    { id: 1, data: row1 },
    { id: 2, data: row2 },
    { id: 3, data: row3 },
    { id: 4, data: row4 },
    { id: 5, data: row5 },
  ];

  const bgColor = "yellow";

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text>APP BAR</Text>
      </View>
      <View style={styles.planTravelContainer}>
        <Text style={styles.planTravelText}>Plan travel</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={Data}
          //renderItem={({ item }) => <DetailRow props={item.details} />}
          renderItem={({ item }) => <TouchableRow props={item.data} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "yellow",
    height: "100%",
    width: "100%",
    paddingTop: 40,
  },

  planTravelContainer: {
    height: 30,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  content: {
    height: "70%",
    width: "100%",
    backgroundColor: "yellow",
  },

  flatList: {
    flex: 1,
    alignContent: "space-evenly",
    justifyContent: "space-evenly",
  },
  appBar: {
    height: 80,
    width: "100%",
    backgroundColor: "green",
  },
});
