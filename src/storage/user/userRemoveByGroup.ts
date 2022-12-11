import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "@storage/storageConfig";
import { usersGetByGroup } from "./usersGetByGroup";

export async function userRemoveByGroup(userName: string, group: string) {
  try {
    const storage = await usersGetByGroup(group);

    const filtered = storage.filter(user => user.name !== userName);
    const users = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${USER_COLLECTION}-${group}`, users);
  } catch (error) {
    throw error;
  }
}
