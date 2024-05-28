import { fireEvent, render } from "@testing-library/react";
import DropdownMenu from "../DropdownMenu";
import { Item } from "../../../models/Item";


const items: Item[] = [
  {
    icon: "https://via.placeholder.com/20",
    text: "Item 1",
    description: "This is the first item",
  },
  {
    icon: "https://via.placeholder.com/20",
    text: "Item 2",
    description: "This is the second item",
  },
];

test("DropdownMenu renders items and responds to item click", () => {
  const handleItemClick = jest.fn();
  const { getByText } = render(
    <DropdownMenu items={items} onItemClick={handleItemClick} />
  );

  items.forEach(item => {
    const itemElement = getByText(item.text);
    expect(itemElement).toBeInTheDocument();
    fireEvent.click(itemElement);
  });

  expect(handleItemClick).toHaveBeenCalledTimes(items.length);
});
