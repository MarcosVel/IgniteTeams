import Button from "@components/Button";
import EmptyList from "@components/EmptyList";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Loading from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export default function Groups() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setLoading(true);

      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("users", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          style={{ flex: 1 }}
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            groups.length === 0 ? { flex: 1 } : { paddingBottom: 32 }
          }
          ListEmptyComponent={() => (
            <EmptyList message="Nenhuma turma cadastrada" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
