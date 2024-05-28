import Trigger from "../Trigger";
import {render, fireEvent } from '@testing-library/react'



test("Trigger renders with label and responds to click", () => {
    const handleClick = jest.fn();
    const {getByText} = render(<Trigger label={'Test label'} onClick={handleClick} />)

    const triggerElement = getByText('Test label')
    expect(triggerElement).toBeInTheDocument();

    fireEvent.click(triggerElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
})