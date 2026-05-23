const catalogo =
[{
    "id": 1,
    "titulo": "Homem-Aranha 2",
    "tipo": "filme",
    "ano": 2004,
    "generos": ["acao","aventura","satirico"],
    "nota": 7.5,
    "assistido": true
},
{
    "id": 2,
    "titulo": "Até que a sorte nos separe",
    "tipo": "filme",
    "ano": 2012,
    "generos": ["comedia"],
    "nota": 5.5,
    "assistido": true
},
{
    "id": 3,
    "titulo": "Arcane",
    "tipo": "serie",
    "ano": 2021,
    "generos": ["acao","aventura","animacao-adulta"],
    "nota": 9,
    "assistido": false
},
{
    "id": 4,
    "titulo": "The boys",
    "tipo": "serie",
    "ano": 2019,
    "generos": ["drama","comedia-dramatica","super-heroi"],
    "nota": 8.6,
    "assistido": true
},
{
    "id": 5,
    "titulo": "Origem",
    "tipo": "serie",
    "ano": 2022,
    "generos": ["terror","misterio"],
    "nota": 7.8,
    "assistido": false
},
{
    "id": 6,
    "titulo": "Interestelar",
    "tipo": "filme",
    "ano": 2014,
    "generos": ["aventura","ficcao-cientifica"],
    "nota": 8.7,
    "assistido": false
}]

console.log(catalogo[0].titulo)
console.log(catalogo[5].ano)
if (catalogo[2]?.generos?.[1])
{
    console.log(catalogo[2].generos[1])
}
else
{
    console.log("O item 3 do catálogo, não possui segundo gênero!")
}

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`)
})

const titulosEmCaixaAlta =  catalogo.map(item => {
    return item.titulo.toUpperCase()
})

console.log(titulosEmCaixaAlta)

const naoAssitidos = catalogo.filter(item => {
    return item.assistido === false
})

console.log(naoAssitidos)
console.log(`Existem ${naoAssitidos.length} itens não assistidos`)

const notaMaior9 = catalogo.find(item => {
    return item.nota >= 9
})

if (notaMaior9)
{
    console.log(`Título: ${notaMaior9.titulo}`)
    console.log(`Nota: ${notaMaior9.nota}`)
}
else
{
    console.log("Nenhum item com nota maior ou igual a nove foi encontrado!")
}

const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador +item.nota
},0)

const mediaGeral = somaNotas / catalogo.length

console.log(`Média geral: ${mediaGeral.toFixed(2)}`)

const assistidos = catalogo.filter(item => item.assistido === true)
const somaAssitidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota
},0)
const mediaAssistidos = somaAssitidos / assistidos.length
console.log(`Média dos assistidos: ${mediaAssistidos.toFixed(2)}`)

const existeItemAntigo = catalogo.some(item => item.ano < 2000)

const todosTemGenero = catalogo.every(item => {
    return item.generos.length >= 1
})

console.log(`Existe item anterior a 2000? ${existeItemAntigo}`)
console.log(`Todos possuem pelo menos 1 gênero? ${todosTemGenero}`)

const output = document.getElementById("output")

const totalItens = catalogo.length

const quantidadeFilmes =
    catalogo.filter(item => item.tipo === "Filme").length

const quantidadeSeries =
    catalogo.filter(item => item.tipo === "Série").length

const naoAssistidos =
    catalogo.filter(item => item.assistido === false).length

const mediaNotas =
    catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3)

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p>Total de itens: ${totalItens}</p>

    <p>Quantidade de filmes: ${quantidadeFilmes}</p>

    <p>Quantidade de séries: ${quantidadeSeries}</p>

    <p>Quantidade de não assistidos: ${naoAssistidos}</p>

    <p>Média geral das notas: ${mediaNotas.toFixed(2)}</p>

    <h3>Top 3 maiores notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>
                ${item.titulo} - Nota ${item.nota}
            </li>
        `).join("")}
    </ol>
`