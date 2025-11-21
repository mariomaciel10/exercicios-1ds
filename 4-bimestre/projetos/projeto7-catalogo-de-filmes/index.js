// CRIE UMA LÓGICA ABAIXO
// === Catálogo de Filmes ===

const prompt = require("prompt-sync")() 

const filme1 = {
     titulo: "Shrek",
     genero: "Animação/Comédia/Fantasia",
     ano: 2001,
     avaliacao: 8.6
}
const filme2 = {
     titulo: "Como Treinar o Seu Dragão",
     genero: "Animação/Fantasia",
     ano: 2010,
     avaliacao: 8.0
}
const filme3 = {
     titulo: "Kung Fu Panda",
     genero: "Animação/Ação/Aventura",
     ano: 2008,
     avaliacao: 8.5
}
const filme4 = {
     titulo: "Madagascar",
     genero: "Animação/Aventura/Comédia",
     ano: 2005,
     avaliacao: 8.0
}
const filme5 = {
     titulo: "Gato de Botas 2: O Último Pedido",
     genero: "Animação/Aventura/Comédia",
     ano: 2022,
     avaliacao: 7.6
}
const filme6 = {
     titulo: "O Príncipe do Egito",
     genero: "Animação/Drama/Musical",
     ano: 1998,
     avaliacao: 7.8
}
const filme7 = {
     titulo: "A Fuga das Galinhas",
     genero: "Animação Stop-motion/Comédia",
     ano: 2000,
     avaliacao: 7.6
}
const filme8 = {
     titulo: "Megamente",
     genero: "Animação/Comédia/Ação",
     ano: 2010,
     avaliacao: 7.2
}
const filme9 = {
     titulo: "Os Croods",
     genero: "Animação/Aventura/Comédia",
     ano: 2013,
     avaliacao: 7.9
}
const filme10 = {
     titulo: "Os Sem-Floresta",
     genero: "Animação/Comédia",
     ano: 2006,
     avaliacao: 6.9
}

const filmes = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]

console.log("=== Catálogo de Filmes ===")
for (let i = 0; i < filmes.length; i++) {
     console.log(`${i + 1}. ${filmes[i].titulo} - ${filmes[i].genero}`)
   }

let melhorFilme = filmes[0]
for (let i = 1; i < filmes.length; i++) {
     if (filmes[i].avaliacao > melhorFilme.avaliacao) {
          melhorFilme = filmes[i]
     }
}

let somaAvaliativa = 0
for (let i = 0; i < filmes.length; i++) {
     somaAvaliativa += filmes[i].avaliacao
}
const media = somaAvaliativa / filmes.length

// === Exibir resultados finais ===
console.log("\nFilme mais bem avaliado:")
console.log(`${melhorFilme.titulo} (${melhorFilme.avaliacao}/10)`)
console.log(`\nMédia geral das avaliações: ${media.toFixed(2)}`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }
