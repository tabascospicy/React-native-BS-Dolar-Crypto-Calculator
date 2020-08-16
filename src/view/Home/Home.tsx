import React, { FC , useContext} from "react";
import styles from "./style";
import { View,RefreshControl} from "react-native";
import { props} from "interfaces/interfaces";
import NavBar from "components/navBar/navBar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer , DarkTheme,DefaultTheme } from "@react-navigation/native";
import {GlobalState} from "interfaces/interfaces";
import Context from "services/context";
import ShowList from "./Home/Home";
import {ColorsThemes} from "themes/colors";
import Calculator from "./Calculator/Calculator";
const Stack = createStackNavigator();
const BlueDarkTheme = {
  ...DarkTheme,
  colors: {
    notification:ColorsThemes.dark.secondary,
    card:ColorsThemes.dark.secondary,
    border:ColorsThemes.dark.secondary,
    text:ColorsThemes.dark.secondary,
    background: ColorsThemes.dark.primary,
    primary:ColorsThemes.dark.secondary
}
}
const LightBlueTheme = {
  ...DefaultTheme,
  colors:{
    notification:ColorsThemes.light.secondary,
    card:ColorsThemes.light.light,
    border:ColorsThemes.light.strong,
    text:ColorsThemes.light.font,
    background: ColorsThemes.light.primary,
    primary:ColorsThemes.light.primary
  }
}

const Home: FC<props> = ({ name }) => {
  const {dark,refresh} :  GlobalState = useContext(Context);

    return (
        <View style={styles.container}>
            <NavBar />
            <NavigationContainer theme={dark ? BlueDarkTheme : LightBlueTheme}>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Home"
                            component={ShowList}
                        />
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Calculator"
                            component={Calculator}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
        </View>
    );
};
export default Home;
