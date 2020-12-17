import React, { useState, useReducer } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Accordion } from "react-native-paper/lib/typescript/src/components/List/List";
const formREducer = (state: any, action: any) => {
  //condizione con action
  if (action.type === "x") {
    const updateinputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updateinputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    //verifico validita foprm ciclando gli input se sono validi

    return {
      inputValues: updateinputValues,
      // etc
    };
  }
};
export const FilterMealsScreen = (props: any) => {
  const [on, setOn] = useState(false);
  //creo oggetto
  const x = {};
  //usereducer vuole oggetto coninstate
  const [formState, dispatchformState] = useReducer(
    formREducer as any,
    {
      inputValues: {
        //inserisci input
        title: x ? true : false,
      },
      inputValidities: {
        title: x ? true : false,
        //inserisci input con mode booelan con object
      },
      formIsValid: x ? true : false,
    } as any
  );

  //poi in validazione richiamo dispatch con type di action inserita
  // dispatchformState({type:x, value:"",isValid:false,input:""})
  return (
    <View style={styles.start}>
      <Text>FilterMealsScreen</Text>
      <Switch
        value={on}
        trackColor={{ false: "red", true: "green" }}
        thumbColor="black"
        onValueChange={() => setOn(!on)}
      ></Switch>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.testInput}
          value="test"
          keyboardType="phone-pad"
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  start: {
    margin: 30,
    flex: 1,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  containerInput: {
    color: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
  },
  testInput: {
    display: "flex",
    padding: 10,
  },
});
