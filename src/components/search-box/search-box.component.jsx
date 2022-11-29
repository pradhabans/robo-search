import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, className, placeholder }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
