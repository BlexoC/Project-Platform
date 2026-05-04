function SearchBar({ query, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;