import useDropdown from "../../hooks/useDropdown";
import { Item } from "../../models/Item";
import DropdownMenu from "./DropdownMenu";
import Trigger from "./Trigger";

type DropdownProps = {
  items: Item[];
};

export const Dropdown = ({ items }: DropdownProps) => {
  const { isOpen, selectedItem, toggleDropDown, selectItem } =
    useDropdown(items);

  return (
    <div>
      <Trigger
        label={selectedItem ? selectedItem.text : "Select an item... "}
        onClick={toggleDropDown}
      />
      {isOpen && <DropdownMenu items={items} onItemClick={selectItem} />}
    </div>
  );
};
