const { sum,divisor,mult,sub } = require('./index')

describe('Operações básicas', () => {
    test('Adição',()=>{
        expect(sum(3,4)).toBe(7)
    })
    test('subtração',()=>{
        expect(sub(8,3)).toBe(5)
    })
    test('Multiplicação',()=>{
        expect(mult(3,4)).toBe(12)
    })
    test('Divisão',()=>{
        expect(divisor(8,2)).toBe(4)
    })
});
