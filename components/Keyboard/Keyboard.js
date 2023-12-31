import { View, Text,TouchableOpacity } from "react-native";
import { keys, ENTER, CLEAR, colors } from "../constants";
import styles, { keyWidth } from "./Keyboard.styles";

const Keyboard = ({
  onKeyPressed = () => {},
  greenCaps = [],
  yellowCaps = [],
  greyCaps = [],
  hardMode = false,
}) => {
  const isLongButton = (key) => {
    return key === ENTER || key === CLEAR;
  };

  const getKeyBGColor = (key) => {
    if (greenCaps.includes(key)) {
      return colors.primary;
    }
    if (yellowCaps.includes(key)) {
      return colors.secondary;
    }
    if (greyCaps.includes(key)) {
      return colors.darkgrey;
    }
    return colors.grey;
  };

  const isDisabled = (key) => {
    if (hardMode && greyCaps.includes(key)) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <TouchableOpacity
              onPress={() => onKeyPressed(key)}
              disabled={ isDisabled(key) } 
              key={key}
              style={[
                styles.key,
                isLongButton(key) ? { width: keyWidth * 1.4 } : {},
                { backgroundColor: getKeyBGColor(key) },
              ]}
            >
              <Text style={styles.keyText}>{key.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Keyboard;
