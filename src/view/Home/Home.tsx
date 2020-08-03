import React, { FC} from "react";
import styles from "./style";
import { View} from "react-native";
import NavBar from "./../../components/navBar/navBar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer , DarkTheme } from "@react-navigation/native";
import ShowList from "./Home/Home";
import Colors from "./../../themes/colors";
import Calculator from "./Calculator/Calculator";
const Stack = createStackNavigator();
const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.primary
}
}
const Home: FC<props> = ({ name }) => {
    return (
        <View style={styles.container}>
            <NavBar />
            <NavigationContainer theme={theme}>
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
