let filmes = ['star wars', ' clube da luta', ' o poderoso chefão', ' top gun', ' interestelar'];
console.log(filmes[1]);

let cartoons = ['toy story', ' procurando nemo ', ' kung-fu panda', ' wally', ' fortnite'];

function adicionaFilmes(){
    return filmes + ', '+ cartoons
} adicionaFilmes();

console.log(adicionaFilmes())

cartoons.pop();

console.log(adicionaFilmes())