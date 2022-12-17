import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => {
  return (
    <section className="section">
      <header className="section__header section__header--extraContent">
        <h2 className="section__title">{title}</h2>
        {extraHeaderContent}
      </header>
      {body}
    </section>
  );
};

export default Section;
