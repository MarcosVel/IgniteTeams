import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import UserCard from "@components/UserCard";
import React, { useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Container, Form, Gradient, HeaderList, TeamsQuantity } from "./styles";

export default function Users() {
  const [teamList, setTeamList] = useState([
    "Turma React Native",
    "Turma React",
    "Time Angular",
    "Time D",
    "Time E",
  ]);
  const [team, setTeam] = useState(teamList[0]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header showBackButton />

        <Highlight
          title={team}
          subtitle="Adicione a galera e separe os times"
        />

        <Form>
          <Input placeholder="Nome da pessoa" autoCorrect={false} />
          <ButtonIcon icon="add" />
        </Form>

        <HeaderList>
          <FlatList
            data={teamList}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 32 }}
          />
          <Gradient
            colors={["transparent", "#202024"]}
            start={[0, 1]}
            end={[0.6, 1]}
          >
            <TeamsQuantity>{teamList.length}</TeamsQuantity>
          </Gradient>
        </HeaderList>

        <FlatList
          data={teamList}
          keyExtractor={item => item}
          renderItem={({ item }) => <UserCard name={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
