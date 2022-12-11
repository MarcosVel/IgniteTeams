import { usersGetByGroup } from "./usersGetByGroup";

export async function usersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await usersGetByGroup(group);

    const users = storage.filter(player => player.team === team);

    return users;
  } catch (error) {
    throw error;
  }
}
