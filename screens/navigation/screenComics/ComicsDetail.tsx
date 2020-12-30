import React, { Dispatch, useCallback, useEffect, useReducer } from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { StackHeaderOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useDispatch } from "react-redux";
import { HeaderComicsCustomButton } from "../../../components_Comics/HeaderCustomButton";
import {
  editComic,
  editComicAsynchThunk,
  editComics,
  togglePreferites,
} from "../../../store/actions/shop";
import { store } from "../../../store/store";
import { Input } from "../../../components_Comics/Input";
import { FORMEDITPRODUCT } from "../../../store/types/types";
import { formReducer } from "../../../utilities/formReducer";

export const ComicsDetailScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  const { navigation } = props;
  console.log("nav", navigation);
  const comic = navigation.getParam("comic");
  const hasClicked = navigation.getParam("isClicked");
  // const isSubmittedComic = navigation.getParam("hasSubmitted");

  console.log("hasClicked", hasClicked);
  console.log("comic", comic);
  // console.log("isSubmitted", isSubmittedComic);
  console.log("store", store.getState());
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputs: {
      description: comic.description,
      price: comic.price,
      coverImg: comic.coverImg,
      title: comic.title,
    },
    inputValidities: {
      description: !!comic.description,
      price: !!comic.price,
      coverImg: !!comic.coverImg,
      title: !!comic.title,
    },
    formIsValid: !!comic,
  });
  console.log("formState", formState);
  const inputChangeHandler = useCallback(
    (inputId: string, inputValue: string, isValue: boolean) => {
      dispatchFormState(editComic(inputId, inputValue, isValue));
    },
    [dispatchFormState]
  );

  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      console.log("caprona");
      return;
    }
    try {
      console.log("kiwi");
      await dispatch(editComics(formState.inputs));
      // navigation.goBack();
    } catch (err) {
      {
        console.log("err", err);
      }
    }
  }, [dispatch, hasClicked]);

  useEffect(() => {
    hasClicked
      ? (navigation.setParams({
          submitedition: submitHandler(),
          isClicked: false,
        }),
        console.log("cetrioli"))
      : console.log("banane");
  }, [submitHandler]);

  return (
    <View style={styles.form}>
      <View style={styles.containerimg}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/3/30/AmericasBestComics2229.jpg",
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Input
          label="Title"
          id="title"
          style={styles.input}
          keyboardType="default"
          returnKeyType="next"
          autoCorrect
          onInputChange={inputChangeHandler}
          initialValue={comic ? comic.title : ""}
          initiallyValid={!!comic}
          required
        ></Input>
        <Input
          label="Description"
          id="description"
          style={styles.input}
          keyboardType="default"
          returnKeyType="next"
          autoCorrect
          multiline
          numberOfLines={3}
          onInputChange={inputChangeHandler}
          initialValue={comic ? comic.description : ""}
          initiallyValid={!!comic}
        ></Input>
        <Input
          label="Cover"
          id="cover"
          style={styles.input}
          keyboardType="default"
          returnKeyType="next"
          autoCorrect
          onInputChange={inputChangeHandler}
          initialValue={comic ? comic.coverImg : ""}
          initiallyValid={!!comic}
        ></Input>
        <Input
          label="Price"
          id="price"
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="next"
          autoCorrect
          onInputChange={inputChangeHandler}
          initialValue={comic ? comic.price.toString() : ""}
          initiallyValid={!!comic}
          required
        ></Input>
        {/* <View>
          <View style={styles.contentPrice}>
            <Text style={styles.price}>Cover</Text>
          </View>
          <TextInput style={styles.input}>
            <Text style={styles.descript}></Text>
          </TextInput>
        </View>
        <View> */}
        {/* <View style={styles.contentPrice}>
            <Text style={styles.price}>Prezzo</Text>
          </View>
          <TextInput style={styles.input}>
            <Text style={styles.descript}></Text>
          </TextInput>
        </View> */}
        <TouchableHighlight
          style={styles.btn}
          onPress={() => {
            submitHandler();
          }}
        ></TouchableHighlight>
      </ScrollView>
    </View>
  );
};

ComicsDetailScreen.navigationOptions = (navData): StackHeaderOptions => {
  // const isSubmitted = navData.navigation.getParam("hasSubmitted");
  // console.log("isSubmittednav", isSubmitted);
  return {
    headerTitle: "Aggiorna le info del fumetto",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderComicsCustomButton}>
        <Item
          title="Edit"
          iconName="md-save"
          onPress={() => {
            navData.navigation.setParams({
              isClicked: true,
              // isSubmitted: !isSubmitted,
            });
            navData.navigation.getParam("submitedition");
          }}
        />
      </HeaderButtons>
    ),
  };
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
    borderColor: "red",
    paddingVertical: 5,
    overflow: "hidden",
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
