import EmptyList from "@components/EmptyList";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Rocket",
    "Amigos",
    "Curso JavaScript",
    "React Native",
    "Família",
  ]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={
          groups.length === 0 ? { flex: 1 } : { paddingBottom: 32 }
        }
        ListEmptyComponent={() => (
          <EmptyList message="Nenhuma turma cadastrada" />
        )}
      />
    </Container>
  );
}
