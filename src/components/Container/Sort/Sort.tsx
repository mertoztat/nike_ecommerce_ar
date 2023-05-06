import "./Sort.css";

export interface IProps {
  sortOption: any;
  setSortOption: any;
}

const Sort: React.FC<IProps> = ({ sortOption, setSortOption }) => {
  return (
    <div className="select">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option defaultValue="Sort by">Sort by</option>
        <option value="a-z">Alphabetic (A-Z)</option>
        <option value="z-a">Alphabetic (Z-A)</option>
        <option value="price: high-to-low">high-to-low</option>
        <option value="price: low-to-high">low-to-high</option>
      </select>
    </div>
  );
};

export default Sort;
