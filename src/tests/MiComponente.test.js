import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {
        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })
        test("devuelve string vacío", () =>{
            expect(titleCase('')).toBe('')
        })

    });

    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })
        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
       
    });
    describe('divide', () =>{
        test('devuelve int', () => {
            expect(typeof divide(9, 3)).toBe('number')
        })
        test('entra string devuelve null', () => {
            expect(divide('hola')).toBeNull()
        })
        test('divide 10/2', () => {
            expect(divide(10, 2)).toBe(5)
        })
        test('divide 10/4', () => {
            expect(divide(10, 4)).toBe(2.5)
        })
        test('dividir 0 devuelve null', () => {
            expect(divide(10, 0)).toBeNull()
        })
    })
    describe('isapple', () => {
        test('devuelve boolean', () => {
            expect(typeof isapple('gg')).toBe('boolean')
        })
        test('entra manzana devuelve true', () => {
            expect(isapple('manzana')).toBe(true)
        })
        test('string != manzana == false', () => {
            expect(isapple('pera')).toBe(false)
        })
    })

});