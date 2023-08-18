/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react"
import FormInput, { FormInputPropTypes } from "./FormInput";
describe("If Button works properly",()=>{
    test('If label rendered correctly',()=>{
        const onChange = jest.fn();
        const FormInputProps:FormInputPropTypes = {
            label:'username',
            value:'',
            type:'text',
            onChange


        }
        render(<FormInput {...FormInputProps}/>)
        const element = screen.getByTestId("input-label-test");
        expect(element.innerHTML).toBe('username');

    })

    test('If type text rendered correctly',()=>{
        const onChange = jest.fn();
        const FormInputProps:FormInputPropTypes = {
            label:'username',
            value:'',
            type:'text',
            onChange


        }
        render(<FormInput {...FormInputProps}/>)
        const element = screen.getByTestId("form-input-test");
        expect(element.getAttribute('type')).toBe('text');

    })

    test('If type password rendered correctly',()=>{
        const onChange = jest.fn();
        const FormInputProps:FormInputPropTypes = {
            label:'password',
            value:'',
            type:'password',
            onChange


        }
        render(<FormInput {...FormInputProps}/>)
        const element = screen.getByTestId("form-input-test");
        expect(element.getAttribute('type')).toBe('password');

    })

    test('If Snapshot exists correctly',()=>{
        const onChange = jest.fn();
        const FormInputProps:FormInputPropTypes = {
            label:'password',
            value:'',
            type:'password',
            onChange


        }
        
        const {asFragment } = render(<FormInput {...FormInputProps}/>)
        expect(asFragment).toMatchSnapshot();

    })
    test('If onChange is triggered',()=>{
        const onChange = jest.fn();
        const FormInputProps:FormInputPropTypes = {
            label:'password',
            value:'',
            type:'password',
            onChange


        }
        render(<FormInput {...FormInputProps}/>)
        const element = screen.getByTestId("form-input-test");
        fireEvent.change(element,{ target: { value: "new_value" } });
        expect(onChange).toBeCalled();



    })
});