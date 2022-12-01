import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type Props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.navigate("groups")}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
