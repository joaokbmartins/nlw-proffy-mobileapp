import React, { useState } from "react";
import { View, Image, Text, Linking, AsyncStorage } from "react-native";
import TeachersList from "../../pages/TeacherList";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import Favorites from "../../pages/Favorites";
import api from "../../services/api";

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  whatsapp: string;
  cost: number;
  subject: string;
}

interface TeacherProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FunctionComponent<TeacherProps> = ({
  teacher,
  favorited,
}) => {
  const mobileLocalFavoritesBase = "favorites";

  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleToggleFavorite() {
    const savedFavorites = await AsyncStorage.getItem(mobileLocalFavoritesBase);
    let favoritesArray = [];

    if (savedFavorites) {
      favoritesArray = JSON.parse(savedFavorites);
      console.log(favoritesArray);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem(
      mobileLocalFavoritesBase,
      JSON.stringify(favoritesArray)
    );
  }

  function handleLiinkToWhatsapp() {
    api.post("connections", {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio} </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preco/hora {"  "}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton
            style={[styles.favoriteButton, isFavorited && styles.favorited]}
            onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLiinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
