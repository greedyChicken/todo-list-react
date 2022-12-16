import './style.css';

const Section = ({title, body, extraHeaderContent}) => {
    return (
        <section className="section">
            <header className="section__header section__header--withButtons">
                <h2 className="section__title">{title}</h2>
                {extraHeaderContent}
            </header>
            <div className="section__body">
                {body}
            </div>
        </section>
    )
};

export default Section;