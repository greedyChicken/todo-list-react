import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { AuthorDescription } from "./styled";

const AuthorPage = () => (
  <Container>
    <Header title="About author" />
    <Section
      title="Jan Hickiewicz"
      body={
        <AuthorDescription>
          Actually computer science student with knowledge of some popular
          programming languages like Java, Javascript or Python. Mainly focused
          on Javascript and React.js.
          <br />
        </AuthorDescription>
      }
    />
  </Container>
);

export default AuthorPage;
