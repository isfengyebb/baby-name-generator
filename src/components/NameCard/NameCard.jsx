import './NameCard.css';

function NameCard({ name, onClick }) {
  return (
    <div className="name-card" onClick={onClick}>
      <div className="name-card-header">
        <span className="name-card-name">{name.fullName}</span>
        <span className="name-card-pinyin">{name.pinyin}</span>
      </div>
      <p className="name-card-summary">{name.summary}</p>
      <div className="name-card-tags">
        {name.tags.map((tag) => (
          <span key={tag} className="name-card-tag">{tag}</span>
        ))}
      </div>
      <span className="name-card-arrow">&rsaquo;</span>
    </div>
  );
}

export default NameCard;
