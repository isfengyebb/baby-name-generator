import { NameCard } from '../NameCard';
import './NameList.css';

function NameList({ nameList, onSelect }) {
  return (
    <div className="name-list">
      <h2 className="name-list-header">
        为您精选了 {nameList.length} 个好名字
      </h2>
      {nameList.map((name) => (
        <NameCard
          key={name.index}
          name={name}
          onClick={() => onSelect(name.index)}
        />
      ))}
    </div>
  );
}

export default NameList;
