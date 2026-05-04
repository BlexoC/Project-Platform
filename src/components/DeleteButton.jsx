function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete Item
    </button>
  );
}

export default DeleteButton;