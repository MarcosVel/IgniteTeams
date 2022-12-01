import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Groups from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import Users from "@screens/Users";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="users" component={Users} />
    </Navigator>
  );
}
