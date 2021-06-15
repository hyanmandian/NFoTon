import { ReactNode } from "react";
import { Container } from "./styles";

interface HelloProps {
  children?: ReactNode;
}

function Hello({ children }: HelloProps) {
  return (
    <Container>
      <h1>Hello Noia 😎</h1>
      {children}
      <span>teste</span>
    </Container>
  );
}

export default Hello;
