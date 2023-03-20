import { TextInput } from "react-native-paper";

export const VanillaTextInput = (props) => {
  return (
    <TextInput mode="outlined" label={props.text} placeholder={props.text} />
  );
};
