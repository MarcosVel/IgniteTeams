import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { usersGetByGroup } from "./usersGetByGroup";
import { UserStorageDTO } from "./UserStorageDTO";

export async function userAddByGroup(newUser: UserStorageDTO, group: string) {
  try {
    const storedUsers = await usersGetByGroup(group);

    const userAlreadyInGroup = storedUsers.filter(
      user => user.name === newUser.name
    );

    if (userAlreadyInGroup.length > 0) {
      throw new AppError("Usuário já está em um time");
    }

    const storage = JSON.stringify([...storedUsers, newUser]);

    await AsyncStorage.setItem(`${USER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
