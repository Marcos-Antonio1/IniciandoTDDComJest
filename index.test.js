 const {sum} = require('./index');


test('adds 1 + 2  to equal 3 ', () => {
    expect(sum(1,2)).toBe(3);
});

test('Atribuição de objeto',()=>{
    const data={one:1};
    data['two']=2;
    expect(data).toEqual({one: 1, two: 2})
})

test('Adicionando números positivos não é zero',()=>{
    for(let a=1;a<10;a++){
        for(let b=1;b<10;b++){
            expect(a+b).not.toBe(0);
        }
    }
})

const  shoppingList=[
    'maça',
    'banana',
    'abacaxi',
    'pera',
    'morango'
]

test('Está na lista de compras',()=>{
    expect(shoppingList).toContain('maça')
    expect(shoppingList).toContain('morango')
})

// usando execeções

function compileAndroidCode(){
    throw new Error("você está usando o JDK errado");
}

test('Compilando para android segue conforme  esperado',()=>{
    expect(()=>compileAndroidCode()).toThrow()
    expect(()=>compileAndroidCode()).toThrow(Error) 
})

// trabalhando com chamadas assincronas 
// callback
test('o dado é manteiga de amendoin',done =>{
    function callback(data){
        try{
            expect(data).toBe('manteiga de amendoin');
            done();
        }catch(error){
            done(error)
        }
    }
    fetchData(callback);
})

//usando promises

test('the data is peanut butter',()=>{
    return fetchData().then(data=>{
        expect(data).toBe('penaut butter')
    })
})

// resolves / rejects
// o jest irá aguardar a promise se resolver(resolves) se for rejeitada ele falhará

//esperando a promise ser resolvida
test('the data is peanut butter',()=>{
    return expect(fetchData()).resolves.toBe('peanut butter')
})

//esperando a promise ser rejeitada
test('the data is peaunt butter',()=>{
    return expect(fetchData()).reject.toMatch('error')
})

// async await 

test('the data is peaunt butter',async ()=>{
    const data= await fetchData()
    expect(data).toBe('peaunt butter');
})

// combinando async await  com resolves and reject 

test('the data is peaunt butter',async()=>{
    await expect(fetchData()).resolves.toBe('penaut butter')
})


test('the data is peaunt butter',async()=>{
    await expect(fetchData()).reject.toMatch('error')

})

// nenhuma forma dessas é melhor que a outra, você escolhe qual estratégia usar

// métodos auxiliares que podem ajudar a cada teste 


beforeEach (()=>{
    // método
    // usar o return quando estiver retornando uma promise
})

afterEach(()=>{
    // método
    // usar o return quando estiver retornando uma promise
})

// antes de cada teste ser executado é chamado o before each e depois de é chamado o after each
// exemplo preciso criar um banco de dados auxiliar para realizar os testes 


// há casos que é preferivel usar métodos auxiliares que são utilizados por todos os testes, sendo assim podemos definir no inicio do arquivo dessa forma 

beforeAll(()=>{
    //metódo
    // return se for retornar uma promise 
})

afterAll(()=>{
    //metódo
    // return se for retornar uma promise 
})


// podemos agrupar testes usando o metódo describe 

describe('testes do relacionados ao cadastro de usuários', () => {
    /* beforeEach(() => {
        return initializeFoodDatabase();
      });
    
      test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Würstchen')).toBe(true);
      });
    
      test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
      });
    */
});

// para rodar apenas um teste
test.only('esse teste vai ser o único a ser rodado',()=>{
    expect(true).toBe(false)
})

