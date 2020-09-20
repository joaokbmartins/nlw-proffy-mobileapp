import React from "react";
import { View, ImageBackground, Text, Linking } from "react-native";

import giveClassesBgImg from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useLinking, useNavigation } from "@react-navigation/native";

function ToTeach() {
  const { goBack } = useNavigation();
  const supportedURL = __DEV__
    ? "http://localhost:3000"
    : "https://5f67cb5654e3f20007f5bb08--naughty-ramanujan-b7bb9a.netlify.app/";

  const handleNavigateBack = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.container}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para comecar, voce precisa se cadastrar como professor utilizando
          nossa plataforma web: {"\n"}
          <RectButton
            onPress={() => Linking.openURL(supportedURL)}
            style={styles.buttonOpenWebApp}
          >
            <Text style={styles.okButtonText}>Proffy Webapp</Text>
          </RectButton>
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Voltar</Text>
      </RectButton>
    </View>
  );
}

export default ToTeach;
