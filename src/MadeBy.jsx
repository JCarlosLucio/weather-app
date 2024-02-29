import PropTypes from 'prop-types';
import './MadeBy.scss';

function MadeBy({ link }) {
  return (
    <div className="MadeBy">
      <a href={link}>
        <i className="fab fa-github-alt" aria-hidden="true" />
      </a>
    </div>
  );
}

MadeBy.propTypes = {
  link: PropTypes.string,
};

export default MadeBy;
