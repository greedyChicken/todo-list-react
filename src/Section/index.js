import { StyledSection, SectionHeader, SectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => {
  return (
    <StyledSection>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {extraHeaderContent}
      </SectionHeader>
      {body}
    </StyledSection>
  );
};

export default Section;
