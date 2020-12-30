import React, { useEffect, useReducer } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CHANGEINPUT, BLURINPUT } from "../store/types/types";
import { blurInput, changeInput } from "../store/actions/shop";

export const Input: React.FC<any> = (props) => {
  const { label, id, onInputChange } = props;

  const inputReducer = (state: any, action: any) => {
    if (action.type === BLURINPUT) {
      return {
        ...state,
        touched: action.touched,
      };
    }
    if (action.type === CHANGEINPUT) {
      return {
        ...state,
        inputValue: action.value,
        isValid: action.isValid,
      };
    }
    return state;
  };
  const [inputState, dispatch] = useReducer(inputReducer, {
    inputValue: props.initialValue,
    isValid: props.initiallyValid,
    touched: false,
  });

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.inputValue, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangehandler = (value: string) => {
    let isValid = true;
    if (props.required && value.trim().length === 0) {
      isValid = false;
    }
    return dispatch(changeInput(value, isValid));
  };

  const willLoseFocus = () => {
    return dispatch(blurInput());
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.contentPrice}>
        <Text style={styles.price}>{label}</Text>
      </View>
      <TextInput
        {...props}
        defaultValue={inputState.inputValue}
        onChangeText={textChangehandler}
        style={styles.input}
        onBlur={willLoseFocus}
      >
        <Text style={styles.descript}></Text>
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // margin: "30px",
    width: "100%",
    // width: "90%",
    height: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2,
  },
  scroll: {
    padding: 20,
  },

  input: {
    display: "flex",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    paddingVertical: 5,
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  maincontent: {
    display: "flex",
    flexDirection: "row",
    //width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
  },
  contentPrice: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    // marginBottom: 10,
  },

  containerimg: {
    display: "flex",
    width: "100%",
    height: 300,
  },
  img: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "red",
    justifyContent: "center",
    fontWeight: "bold",
  },
  descript: {
    padding: 15,
    marginVertical: 10,
  },
  btn: {
    borderRadius: 40,
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flex: 2,
    padding: 15,
    marginVertical: 8,
    // paddingBottom: 9,
    //width: 50,
  },
  price: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
    padding: 20,
  },
});
