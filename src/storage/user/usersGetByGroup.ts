import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "@storage/storageConfig";
import { UserStorageDTO } from "./UserStorageDTO";

export async function usersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${USER_COLLECTION}-${group}`);

    const users: UserStorageDTO[] = storage ? JSON.parse(storage) : [];

    return users;
  } catch (error) {
    throw error;
  }
}
