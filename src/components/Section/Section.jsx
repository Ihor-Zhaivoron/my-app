import PropTypes from "prop-types";
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={title ? css.superSection : css.baseSection}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
export default Section;
