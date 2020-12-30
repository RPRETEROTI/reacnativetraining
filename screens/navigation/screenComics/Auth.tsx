import React, { useCallback, useReducer } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useDispatch } from "react-redux";
import { Input } from "../../../components_Comics/Input";
import {
  loginAsynch,
  signup,
  signupAsynch,
  validateCredentials,
} from "../../../store/actions/auth";
import { formReducer } from "../../../utilities/formReducer";

export const AuthScreen: NavigationStackScreenComponent = ({ ...props }) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputs: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });
  console.log("formState", formState);
  console.log("formStatein", formState.inputs);
  console.log("formvalid", formState.formIsValid);
  const [login, setLogin] = React.useState(true);
  const inputChangeHandler = useCallback(
    (inputId: string, inputValue: string, isValue: boolean) => {
      dispatchFormState(validateCredentials(inputId, inputValue, isValue));
    },
    [dispatchFormState]
  );
  const onSubmitHandler = async () => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      console.log("caprona");
      return;
    }
    try {
      console.log("kiwi");
      if (login) {
        await dispatch(loginAsynch(formState.inputs));
      } else {
        await dispatch(signupAsynch(formState.inputs));
      }
      navigation.navigate("Home");
    } catch (err) {
      {
        console.log("err", err);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, height: 20 }}
      behavior="height"
      keyboardVerticalOffset={50}
    >
      <View style={styles.start}>
        <View style={styles.containerbtn}>
          {/* <View style={styles.inputContainer}>
            <TextInput
              {...props}
              defaultValue="Email"
              style={styles.input}
              onChangeText={(value) => inputHandler(value)}
              onBlur={() => {
                setTouched(!!touched);
              }}
            ></TextInput>
            <TextInput
              defaultValue="Password"
              style={styles.input}
              onChangeText={(value) => inputHandler(value)}
              onBlur={() => {
                setTouched(!!touched);
              }}
            ></TextInput>
          </View> */}
          <Input
            id="email"
            style={styles.input}
            keyboardType="default"
            returnKeyType="next"
            autoCorrect
            onInputChange={inputChangeHandler}
            initialValue="  Email"
            initiallyValid={false}
            required
          ></Input>
          <Input
            id="password"
            style={styles.input}
            keyboardType="default"
            returnKeyType="next"
            autoCorrect
            secureTextEntry
            onInputChange={inputChangeHandler}
            initialValue=""
            initiallyValid={false}
            required
          ></Input>
          <TouchableHighlight style={styles.btn} onPress={onSubmitHandler}>
            <Text style={styles.tx}>{login ? "Login" : "Sign In"}</Text>
          </TouchableHighlight>
          <View></View>
          <TouchableHighlight
            style={styles.btn}
            onPress={() => setLogin(!login)}
          >
            <Text style={styles.tx}>
              Swith to {login ? "Sign In" : "Login"}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Authenticate",
};
const styles = StyleSheet.create({
  start: {
    // margin: "30px",
    flex: 1,
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginVertical: 25,
  },
  or: {
    fontWeight: "bold",
    fontSize: 14,
    color: "red",
    textAlign: "center",
  },
  btn: {
    borderRadius: 40,
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    //flex: 2,
    padding: 15,
    marginVertical: 8,
    // paddingBottom: 9,
    //width: 50,
  },
  input: {
    display: "flex",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    marginVertical: 10,
    width: 300,
  },
  inputContainer: {
    //width: "100%",
    width: 250,
    display: "flex",
  },
  containerbtn: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    //justifyContent: "space-around",
  },
  tx: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
