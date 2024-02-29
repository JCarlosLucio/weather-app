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

export default MadeBy;
