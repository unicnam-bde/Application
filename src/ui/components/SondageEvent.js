import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { Button, Flex } from "@ant-design/react-native";
import SondageIcons from "./SondageIcons";

export default function SondageEvent() {
  return (
    <Flex>
      <Flex.Item style={styles.placeButton}>
        <Button type="default" style={styles.sondageButton}>
          <SondageIcons
            name={
              Platform.OS === "ios"
                ? "ios-checkmark-circle-outline"
                : "md-checkmark-circle-outline"
            }
          />
          <Text style={styles.sondageText}> Participe</Text>
        </Button>
      </Flex.Item>
      <Flex.Item style={styles.placeButton}>
        <Button type="default" style={styles.sondageButton}>
          <SondageIcons
            name={
              Platform.OS === "ios" ? "ios-star-outline" : "md-star-outline"
            }
          />
          <Text style={styles.sondageText}> Intérresé</Text>
        </Button>
      </Flex.Item>
    </Flex>
  );
}

const styles = StyleSheet.create({
  sondageButton: { borderColor: "#ba002a" },
  placeButton: { paddingLeft: 4, paddingRight: 4 },
  sondage: {
    marginTop: 10
  },
  sondageText: {
    color: "#ba002a"
  },
  viewInfo: {
    flexDirection: "row"
  }
});
