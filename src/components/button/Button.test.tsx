/* eslint-disable testing-library/render-result-naming-convention */
import Button, { ButtonPropTypes } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react"
describe("If Button works properly",()=>{
    test('If label rendered correctly',()=>{
        const ButtonProps:ButtonPropTypes = {
            text:'Button',
            type:'submit'

        }
        render(<Button {...ButtonProps}/>)
        const element = screen.getByTestId('button-test');
        expect(element.innerHTML).toBe('Button');

    })

    test('If type rendered correctly',()=>{
        const ButtonProps:ButtonPropTypes = {
            text:'Button',
            type:'button'

        }
        render(<Button {...ButtonProps}/>)
        const element = screen.getByTestId('button-test');
        expect(element.getAttribute('type')).toBe('button');

    })
    test('If Snapshot exists correctly',()=>{
        const ButtonProps:ButtonPropTypes = {
            text:'Button',
            type:'button'

        }
        // render(<Button {...ButtonProps}/>)
        const element = render(<Button {...ButtonProps}/>);
        expect(element).toMatchSnapshot();

    })
    test('If onClick is triggered',()=>{
        const onClick = jest.fn();
        const ButtonProps: ButtonPropTypes = {
            text:'Button',
            type:'submit',
            onClick
        };
        render(<Button {...ButtonProps}/>);
        const element = screen.getByTestId('button-test');
        fireEvent.click(element);
        expect(onClick).toBeCalled();



    })
});