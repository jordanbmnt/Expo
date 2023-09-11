const PlaceholderImage = require("./assets/images/background-image.png");
import { StatusBar } from "expo-status-bar";
import { StyleSheet} from 'react-native';
import { useRef, useState } from "react";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import ImageContainer from "./components/ImageContainer.jsx";
import OptionsContainer from "./components/OptionsContainer";
import ButtonsContainer from "./components/ButtonsContainer";


export default function App() {
  const imageRef = useRef();
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  if (status === null) {
    requestPermission();
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  
  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageContainer imageRef={imageRef}
       PlaceholderImage={PlaceholderImage}
        selectedImage={selectedImage}
         pickedEmoji={pickedEmoji}
         />
      {showAppOptions ? (
        <OptionsContainer setShowAppOptions={setShowAppOptions}
         setIsModalVisible={setIsModalVisible}
          imageRef={imageRef} 
          />
      ) : (
        <ButtonsContainer 
        setShowAppOptions={setShowAppOptions}
        setSelectedImage={setSelectedImage}
        setPickedEmoji={setPickedEmoji} 
        pickedEmoji={pickedEmoji} 
        selectedImage={selectedImage}
        />
      )}
      <EmojiPicker 
      isVisible={isModalVisible} 
      onClose={onModalClose}>
      <EmojiList 
      onSelect={setPickedEmoji} 
      onCloseModal={onModalClose} 
      />
      </EmojiPicker>
      <StatusBar style='light' />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
});
