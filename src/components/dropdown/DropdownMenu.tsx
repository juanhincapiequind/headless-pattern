import { Item } from "../../models/Item";

const DropdownMenu = ({items,onItemClick,}: {items: Item[];onItemClick: (items: Item) => void;}) => {
  return (
    <div className="dropdown-menu" data-testid='menudd'>
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