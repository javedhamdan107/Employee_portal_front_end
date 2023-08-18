import { render, screen, fireEvent } from "@testing-library/react";
import DropDown, { DropDownPropTypes } from "./DropDown";
import '@testing-library/jest-dom'
const options = ["option 1","option 2","option 3"];

describe("If DropDown works properly",()=>{
    test('If label rendered correctly',()=>{
        const DropDownProps:DropDownPropTypes = {
            options:options,
            value:'',
            onChange:()=>{},
            label:'Select An Option'


        }
        render(<DropDown {...DropDownProps}/>)
        const element = screen.getByTestId("label-test");
        expect(element.innerHTML).toBe('Select An Option');

    })

    test('Renders options correctly',()=>{
        const DropDownProps:DropDownPropTypes = {
            options:options,
            value:'',
            onChange:()=>{},
            label:'Select An Option'


        }
        render(<DropDown {...DropDownProps}/>)
        const option1 = screen.getByText("option 1");
        const option2 = screen.getByText("option 2");
        const option3 = screen.getByText("option 3");
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(option3).toBeInTheDocument();

    })

    test('If Snapshot exists correctly',()=>{
        const DropDownProps:DropDownPropTypes = {
            options:options,
            value:'',
            onChange:()=>{},
            label:'Select An Option'


        }
        
        const {asFragment } = render(<DropDown {...DropDownProps}/>);
        expect(asFragment).toMatchSnapshot();

    })
    test('calls onChange when an option is selected', () => {
        const onChange = jest.fn();
        const DropDownProps:DropDownPropTypes = {
            options:options,
            value:'',
            onChange,
            label:'Select An Option'


        }
        
        render(<DropDown {...DropDownProps}/>);
    
        const selectElement = screen.getByTestId('select-test');
        fireEvent.change(selectElement, { target: { value: 'option 3' } });
    
        expect(onChange).toBeCalled();
      });

   
   
   
});
