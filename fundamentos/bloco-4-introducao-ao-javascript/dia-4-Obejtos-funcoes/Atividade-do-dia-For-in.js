let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')


  /* "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama '  + leitor.livrosFavoritos[0].titulo)
 console.log(leitor.livrosFavoritos[0].titulo)
  Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".*/