import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { AuthorDescription } from "./styled";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Jan Hickiewicz"
      body={
        <AuthorDescription>
          Aktualnie zaoczny student informatyki z podstawową znajomością takich
          jezyków jak python, java czy javascript.
          <br />
          <strong>
            Uczestnik kursu programowania w szkole programowania Youcode.
          </strong>
        </AuthorDescription>
      }
    />
  </Container>
);

export default AuthorPage;
