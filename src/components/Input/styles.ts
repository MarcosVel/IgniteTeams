import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const InputContainer = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
  `}
`;
