import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./stack_screens/Home";
import SplashScreen from "./stack_screens/SplashScreen";
import SignUp from "./stack_screens/SignUp";
import Weather from "./stack_screens/Weather";
import Signin from "./stack_screens/SignIn";
import Medicines from "./stack_screens/Medicines";
import RiceMed from "./stack_screens/RiceMed";
import BuyTab from "./stack_screens/BuyTab";
import SellTab from "./stack_screens/SellTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PotatoMed from "./stack_screens/PotatoMed";
import CornMed from "./stack_screens/CornMed";
import WheatMed from "./stack_screens/WheatMed";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from "./stack_screens/AboutScreen";
import Profile from "./stack_screens/Profile";
import Prediction from "./stack_screens/Prediction";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: 'yellowgreen',
        drawerLabelStyle: {
          color: 'black', fontSize: responsiveFontSize(2),
          fontWeight: 'bold', padding: responsiveHeight(1)
        },
        drawerStyle: {
          backgroundColor: '#f3fffa', borderTopRightRadius: responsiveHeight(5),
          marginTop: responsiveHeight(6), marginBottom: responsiveHeight(4),
          borderBottomWidth: responsiveHeight(.6), borderBottomRightRadius: responsiveHeight(5)
        },
        drawerItemStyle: { borderRadius: responsiveHeight(10) }
      }}>
      <Drawer.Screen options={{ headerShown: false }}
        name="Home" component={Home} />
      <Drawer.Screen options={{ headerShown: false }}
        name="Profile" component={Profile} />
      <Drawer.Screen options={{ headerShown: false }}
        name="About" component={AboutScreen} />
      <Drawer.Screen options={{ headerShown: false }}
        name="Logout" component={Signin} />
    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function Tabnav() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Sell') {
          iconName = focused
            ? 'home'
            : 'md-home-outline';
        } else if (route.name === 'Buy') {
          iconName = focused ? 'cart-outline' : 'cart';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'seagreen',
      tabBarInactiveTintColor: 'black',
    })} >
      <Tab.Screen options={{ headerShown: false }}
        name="Buy" component={BuyTab}></Tab.Screen>
      <Tab.Screen options={{ headerShown: false }}
        name="Sell" component={SellTab}></Tab.Screen>
    </Tab.Navigator >
  )


}
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash Screen"
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "black",
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sign In"
          component={Signin}
          options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sign up"
          options={{ headerShown: false, headerBackVisible: true }}
          component={SignUp}
        ></Stack.Screen>
        <Stack.Screen name="Weather" component={Weather} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Medicines" component={Medicines} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="RiceMed" component={RiceMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Potato" component={PotatoMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Corn" component={CornMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Wheat" component={WheatMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="BuySell" component={Tabnav} options={{ headerBackVisible: false, headerShown: false }}
        >
        </Stack.Screen>
        <Stack.Screen name="Prediction" component={Prediction} options={{ headerBackVisible: false, headerShown: false }}
        >
        </Stack.Screen>
        <Stack.Screen
          options={{ headerBackVisible: false, headerShown: false }}
          name="Welcome to Home"
          component={MyDrawer}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
