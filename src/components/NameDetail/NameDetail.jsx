import { FIVE_ELEMENTS_COLOR_MAP } from '../../constants';
import './NameDetail.css';

function NameDetail({ detail }) {
  return (
    <div className="name-detail">
      <HeroSection detail={detail} />
      <CharacterSection characters={detail.characters} />
      <TextSection title="整体寓意" text={detail.overallMeaning} />
      <PoetrySection text={detail.poetryReference} />
      <TextSection title="起名理由" text={detail.namingReason} />
    </div>
  );
}

/* 顶部展示区 */
function HeroSection({ detail }) {
  return (
    <div className="name-detail-hero">
      <div className="name-detail-fullname">{detail.fullName}</div>
      <div className="name-detail-pinyin">{detail.pinyin}</div>
      <div className="name-detail-tags">
        {detail.tags.map((tag) => (
          <span key={tag} className="name-detail-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

/* 逐字解析 */
function CharacterSection({ characters }) {
  return (
    <div className="name-detail-section">
      <h3 className="name-detail-section-title">逐字解析</h3>
      <div className="name-detail-chars">
        {characters.map((ch) => (
          <CharacterItem key={ch.char} character={ch} />
        ))}
      </div>
    </div>
  );
}

function CharacterItem({ character }) {
  const bgColor = FIVE_ELEMENTS_COLOR_MAP[character.fiveElements] || '#999';

  return (
    <div className="name-detail-char-item">
      <div className="name-detail-char">{character.char}</div>
      <div className="name-detail-char-pinyin">{character.pinyin}</div>
      <div className="name-detail-char-meta">{character.strokes} 画</div>
      <span
        className="name-detail-five-element"
        style={{ backgroundColor: bgColor }}
      >
        {character.fiveElements}
      </span>
      <div className="name-detail-char-meaning">{character.meaning}</div>
    </div>
  );
}

/* 通用文字段落 */
function TextSection({ title, text }) {
  return (
    <div className="name-detail-section">
      <h3 className="name-detail-section-title">{title}</h3>
      <p className="name-detail-text">{text}</p>
    </div>
  );
}

/* 诗词典故 */
function PoetrySection({ text }) {
  return (
    <div className="name-detail-section">
      <h3 className="name-detail-section-title">诗词典故</h3>
      <p className="name-detail-poetry">{text}</p>
    </div>
  );
}

export default NameDetail;
