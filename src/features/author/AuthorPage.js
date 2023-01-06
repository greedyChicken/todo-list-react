import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Jan Hickiewicz"
      body={
        <p>
          Aktualnie zaoczny student informatyki z podstawową znajomością takich
          jezyków jak python, java czy javascript.
          <strong>
            Uczestnik kursu programowania w szkole programowania Youcode.
          </strong>
        </p>
      }
    />
  </Container>
);

export default AuthorPage;
