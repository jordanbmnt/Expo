import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress, disable }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name='picture-o'
            size={18}
            color='#25292e'
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else if (theme === "secondary") {
    return (
      <View style={styles.secondaryButtonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  } else if (theme === "clear") {
    return (
      <View style={styles.secondaryButtonContainer}>
        <Pressable style={styles.button} onPress={!disable ? onPress : null}>
          <Text
            style={
              disable ? styles.disabledButtonContainer : styles.buttonLabel
            }
          >
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  secondaryButtonContainer: {
    width: 130,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#454545",
    borderRadius: 18,
  },
  disabledButtonContainer: {
    fontSize: 16,
    color: "#454545",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
