import FormUsuario from "../components/FormUsuario";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('renderización', () => {
    let cabecera
    let textF
    let button
    
    beforeEach(() => {
        render(<FormUsuario />)
        cabecera = screen.getByRole('heading', {level:2})
        textF = screen.getByLabelText('Nombre')
        button = screen.getByRole('button', {name: 'Submit'})
    })
    test('se renderizan los componentes', () =>{
        expect(cabecera).toBeInTheDocument()
        expect(textF).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })
    test('interacción usuario', async () => {
        const user = userEvent.setup()
        await user.type(textF, 'Óscar')
        await user.click(button)
        expect(textF.value).toBe('')
    })
})