import { TextField } from "@material-ui/core";
import colors from "@src/common/styles/colors";
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTextFieldWrapper = styled.div`
  margin-top: 15px;
`;

export const StyledTextField = styled(TextField)`
  margin-top: 300px;
  width: 100%;
`;

export const Message = styled.div``;

export const MessageText = styled.h2`
  font-weight: 400;
  font-size: 28px;
  text-align: center;

  color: ${colors.navy};
`;

export const Error = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  color: ${colors.pink};

  margin-top: 8px;
`;
