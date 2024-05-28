import { useState } from "react";
import { Item } from "../models/Item";


const useDropdown = (items: Item[]) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const toggleDropDown = () => setIsOpen(!isOpen)
    const selectItem = (item: Item) => {
        setSelectedItem(item)
        setIsOpen(false)
    }

    return {
        isOpen,
        selectedItem,
        items,
        toggleDropDown,
        selectItem
    }
}

export default useDropdown;