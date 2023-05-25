import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterPlant } from "../screens/RegisterPlant";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="RegisterPlant" component={RegisterPlant} />
    </Navigator>
  );
}
