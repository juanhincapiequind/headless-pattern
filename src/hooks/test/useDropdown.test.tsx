import { act, renderHook } from "@testing-library/react";
import { Item } from "../../models/Item";
import useDropdown from "../useDropdown";

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

test("useDropdown handle toggle and item selection", () => {
    const {result} = renderHook(() => useDropdown(items))

    expect(result.current.isOpen).toBe(false)
    expect(result.current.selectedItem).toBeNull();

    act(() => {
        result.current.toggleDropDown();
    })

    expect(result.current.isOpen).toBe(true);

    act(() => {       
        expect(result.current.isOpen).toBe(true)
        result.current.selectItem(items[0]);
    })

    expect(result.current.isOpen).toBe(false)
})
