
import { Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

const TextInput1 = ({
  mode,
  inputLabel,
  placeholder,
  onChange,
  editable,
  rightElement,
  multiline,
  numberOfLines,
  ...props
}) => {
  const [passwordShow, setPasswordShow] = useState(false);

  let propsCustom = {
    mode: mode === undefined || mode === "" ? "outlined" : mode,
    inputLabel:
      inputLabel === undefined || inputLabel === "" ? "Label" : inputLabel,
    placeholder:
      placeholder === undefined || placeholder === ""
        ? "Placeholder"
        : placeholder,
    onChange: onChange === undefined ? () => {} : onChange,
    multiline: multiline === undefined || multiline === "" ? false : multiline,
    numberOfLines:
      numberOfLines === undefined || numberOfLines === "" ? 5 : numberOfLines,
  };

  return (
    <TextInput
      mode={propsCustom.mode}
      label={propsCustom.inputLabel}
      secureTextEntry={passwordShow}
      style={props.style}
      placeholder={propsCustom.placeholder}
      onChangeText={propsCustom.onChange}
      multiline={propsCustom.multiline}
      numberOfLines={propsCustom.numberOfLines}
      disabled={editable}
      right={
        inputLabel == "Password" ? (
          <TextInput.Icon
            icon={(props) => (
                <Pressable onPress={() => setPasswordShow(!passwordShow)}>
              <MaterialCommunityIcons
                {...props}
                name={
                    passwordShow ? "eye" : "eye-off"
                }
                size={25}
                style={{ color: "gray" }}
              />
               </Pressable>
            )}
          />
        ) : (
          <>{rightElement}</>
        )
      }
    />
  );
};

// const styles = StyleSheet.create({
//   inputContainer: {
//     width: "100%",
//   },
//   label: {
//     marginTop: 20,
//     fontSize: 5,
//     fontWeight: "200",
//   },
//   inputFlieds: {
//     fontSize: 12,
//     color: "black",
//     borderColor: "#00008B",
//   },
// });

export default TextInput1;


