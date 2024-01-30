import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('renderiza componentes', () => {
    let box
    let button

    beforeEach(() => {
        render(<TextBox2 />)
        box = screen.getByRole('caja', { name: 'es una caja' })
        button = screen.getByRole('button', {name: 'Pulsa para modificar el color del texto'})
    })
    test('se renderizan correctamente', () => {
        expect(box).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })
    test('la caja con el texto tiene un color inicial', () => {

        expect(box).toHaveStyle({
            color: 'pink'
        });
    });
    test('interacción usuario', async () => {
        const user = userEvent.setup()
        await user.click(button)
        expect(box).toHaveStyle({
            color: 'black'
        })
    })
})