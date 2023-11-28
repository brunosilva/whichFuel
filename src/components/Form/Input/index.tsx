import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

interface IProps {
  label: string;
  name: string;
  type: KeyboardTypeOptions | undefined;
  placeholder?: string;
  messageError?: string
}
export default function Input({label, name, type, placeholder = '', messageError}: IProps) {
  return (
    <View style={styles.rowElementForm}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
      />
      <Text style={styles.errorMessage}>{messageError}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowElementForm: {
    marginBottom: 10,
  },
  formLabel: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 0,
  },
  input: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    marginBottom: 0,
    paddingLeft: 10,
  },
  errorMessage: {
    fontSize: 12,
    color: "#ff0043",
    fontWeight: "bold",
    paddingLeft: 20,
  },
});
