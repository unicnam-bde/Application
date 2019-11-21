import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Platform
} from "react-native";
import { Button, WingBlank, Flex } from "@ant-design/react-native";
import MonoText from "../../ui/components/StyledText";
import SondageEvent from "../../ui/components/SondageEvent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function DetailArticle(props) {
  
  function TypeNews(props){
    switch (props.typeNews) {
      case 'event':
        return(
          <SondageEvent/>
        )
        break;
      case 'project':
        return(
          <View/>
        )
        break;

      default:
        return(
          <View/>
        )
        break;
    }
  };

  const { navigation } = props;
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.bandeau}
          source={require("../assets/logo_bde_rouge_noir.png")}
          resizeMode="contain"
        >
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>
              {navigation.getParam("title", "default value")}
            </Text>
          </View>
        </ImageBackground>
        <MonoText style={styles.info}>
          {navigation.getParam("date", "A définir")}
        </MonoText>
        <WingBlank style={styles.sondage}>
          <TypeNews typeNews={navigation.getParam('type','default')} />
        </WingBlank>
        <View style={styles.viewInfo}>
          <Text style={styles.titreInfo}>Nombre de participants : </Text>
          <Text style={styles.textInfo}>
            {navigation.getParam("nbParticipant", "Pas assez")}
          </Text>
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.titreInfo}>Lieu : </Text>
          <Text style={styles.textInfo}>
            {navigation.getParam("lieu", "A définir")}
          </Text>
        </View>

        <Text style={styles.textTitreDetail}>Details :</Text>
        <Text style={styles.description}>
          {navigation.getParam(
            "description",
            "Pour plus d'information, contacter le BDE."
          )}
        </Text>
      </ScrollView>
    </View>
  );
}

DetailArticle.navigationOption = {
  headerTitle: "Test"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bandeau: {
    width: windowWidth,
    height: windowHeight / 5,
    backgroundColor: "grey"
  },
  viewTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end"
  },
  textTitle: { color: "white", fontSize: 25 },
  info: {
    marginTop: 10,
    textAlign: "center"
  },
  sondageButton: { borderColor: "#ba002a" },
  placeButton: { paddingLeft: 4, paddingRight: 4 },
  sondage: {
    marginTop: 10
  },
  titreInfo: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 15
  },
  sondageText: {
    color: "#ba002a"
  },
  viewInfo: {
    flexDirection: "row"
  },
  textInfo: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15
  },
  textTitreDetail: {
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20
  },
  description: {
    margin: 20
  }
});
