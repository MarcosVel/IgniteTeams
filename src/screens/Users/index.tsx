import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import React from "react";
import { Container } from "./styles";

export default function Users() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <ButtonIcon />
    </Container>
  );
}
