import { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Button, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { stylesInput } from "../../../components/Form/Input/style";
import ResultCalculator from "./result";
import { IFuelResponse } from "./type";

export default function FormCalculator() {
  const [result, setResult] = useState('')
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      alcool: '',
      gasolina: ''
    }
  });
  const onSubmit = (data: IFuelResponse) => {
    const result = data.alcool / data.gasolina

    if (result <= 0.7) {
      setResult('Compensa abastecer com Álcool')
    } else {
      setResult('Compensa abastecer com Gasolina')
    }
  };

  return (
    <>
    {result === '' ?
      <View style={styles.container}>
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={stylesInput.formLabel}>Álcool (preço por litro)</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="R$ 3.68"
                  keyboardType='numeric'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={stylesInput.input}
                />
              )}
              name="alcool"
            />
            {errors.alcool && <Text>This is required.</Text>}

            <Text style={stylesInput.formLabel}>Gasolina (preço por litro)</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="R$ 5.99"
                  keyboardType='numeric'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={stylesInput.input}
                />
              )}
              name="gasolina"
            />
            {errors.gasolina && <Text>This is required.</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </Pressable>
      </View> :
      <View>
        <ResultCalculator />
      </View>
    }


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
  buttonCalc: {
    width: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  txtBtnCalc: {
    fontSize: 20,
    color: "#ffffff",
  },
});
