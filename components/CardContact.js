import React from "react";
import { Text, View, Image } from "react-native";
import { Card, WhiteSpace, WingBlank } from "@ant-design/react-native";

export function CardContact(props) {
  return (
    <View style={{ marginTop: 20 }}>
      <WingBlank size="lg">
        <Card>
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16, fontSize:16 }}>{props.name}{" "}{props.firstname}</Text>
              <Text style={{ marginLeft: 16 }}>{props.email}</Text>
              <Text style={{ marginLeft: 16 }}>{props.phone}</Text>
            </View>
          </Card.Body>
        </Card>
      </WingBlank>
    </View>
  );
}