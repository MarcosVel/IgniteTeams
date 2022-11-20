import Header from "@components/Header";
import Highlight from "@components/Highlight";
import React from "react";
import { Container } from "./styles";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
