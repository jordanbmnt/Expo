import * as MediaLibrary from "expo-media-library";
import { Platform, StyleSheet, View } from "react-native";
import IconButton from "./IconButton";
import CircleButton from "./CircleButton";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";

export default function OptionsContainer({
  setShowAppOptions,
  setIsModalVisible,
  imageRef,
}) {
  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <IconButton icon='chevron-left' label='Back' onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
