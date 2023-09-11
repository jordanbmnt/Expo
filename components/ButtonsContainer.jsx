import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "./Button";

export default function ButtonsContainer({
  setShowAppOptions,
  setSelectedImage,
  setPickedEmoji,
  pickedEmoji,
  selectedImage,
}) {
  const appReset = () => {
    setSelectedImage(null);
    setPickedEmoji(null);
  };

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.footerContainer}>
      <Button theme='primary' label='Choose a photo' onPress={pickImageAsync} />
      <View style={styles.secondaryButtonContainer}>
        <Button
          theme='secondary'
          label='Use this photo'
          onPress={() => setShowAppOptions(true)}
        />
        <Button
          theme='clear'
          disable={pickedEmoji || selectedImage ? false : true}
          label='Clear'
          onPress={() => appReset()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  secondaryButtonContainer: {
    width: 320,
    flexWrap: "wrap",
    flex: 1 / 2,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 19,
  },
});
