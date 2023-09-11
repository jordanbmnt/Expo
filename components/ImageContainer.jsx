import { StyleSheet, View  } from 'react-native';
import EmojiSticker from "./EmojiSticker";
import ImageViewer from "./ImageViewer";

export default function ImageContainer({
  imageRef,
  PlaceholderImage,
  selectedImage,
  pickedEmoji,
}) {
  return (
    <View style={styles.imageContainer}>
      <View ref={imageRef} collapsable={false}>
        <ImageViewer
          placeholderImage={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji !== null ? (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
