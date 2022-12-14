import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, USER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupRemoved: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter(group => group !== groupRemoved);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${USER_COLLECTION}-${groupRemoved}`);
  } catch (error) {
    throw error;
  }
}
