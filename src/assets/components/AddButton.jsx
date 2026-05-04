function AddButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      Add Item
    </button>
  );
}

export default AddButton;