import { fireEvent, render } from "@testing-library/react";
import { Dropdown } from "../../../components/dropdown/Dropdown";
import { Item } from "../../../models/Item";

const items: Item[] = [
  {
    icon: "icon1.png",
    text: "Item 1",
    description: "Description 1"
  },
  {
    icon: "icon2.png",
    text: "Item 2",
    description: "Description 2"
  },
  {
    icon: "icon3.png",
    text: "Item 3",
    description: "Description 3"
  }
];

test("Dropdown toggler menu and select item", () => {
  const { getByText, queryByText } = render(<Dropdown items={items} />);

  
  expect(queryByText("Item 1")).not.toBeInTheDocument();

  
  const trigger = getByText("Select an item...");
  fireEvent.click(trigger);

  
  items.forEach(item => {
    expect(getByText(item.text)).toBeInTheDocument();
  });

  
  const selectedItem = items[0];
  const selectedItemElement = getByText(selectedItem.text);
  fireEvent.click(selectedItemElement);

  
  expect(getByText(selectedItem.text)).toBeInTheDocument();
});
