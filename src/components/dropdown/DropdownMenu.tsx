interface Item {
  icon: String;
  text: String;
  description: String;
}

const DropdownMenu = ({
  items,
  onItemClick,
}: {
  items: Item[];
  onItemClick: (items: Item) => void;
}) => {
  return (
    <div className="dropdown-menu">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          className="item-container"
        >
          <img src={item.icon} alt={item.text} />
          <div className="details">
            <div>{item.text}</div>
            <small>{item.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu