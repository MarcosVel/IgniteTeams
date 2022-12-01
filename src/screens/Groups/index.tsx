import Button from "@components/Button";
import EmptyList from "@components/EmptyList";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export default function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState<string[]>([
    "Galera da Rocket",
    "Amigos",
    "Curso JavaScript",
    "React Native",
    "Família",
  ]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        style={{ flex: 1 }}
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          groups.length === 0 ? { flex: 1 } : { paddingBottom: 32 }
        }
        ListEmptyComponent={() => (
          <EmptyList message="Nenhuma turma cadastrada" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
