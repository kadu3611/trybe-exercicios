import { connect } from 'mongoose';

connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados');

// connect('mongodb://username:password@host:port/nomeDaMinhaBaseDeDados');

//connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', { user: 'user', pass: 'password' });

// const options = {
//     user: 'user', // Usuário do banco de dados.
//     pass: 'password' // senha do usuário do banco de dados.
//     autoIndex: false, // Não cria index para cada inserção de dado no banco.
//     dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
//   };
  
//   connect('mongodb://localhost:27017/', options);


// Repare que aqui importamos a função 'model' do Mongoose:
// import { Schema, model } from 'mongoose';

// interface IBook {
//   title: string,
//   author: string,
// }

// const bookSchema = new Schema<IBook>({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
// });

// Para acessarmos os métodos disponibilizados pelo Mongoose(create, find, update...) e
// implementarmos nossa API, criamos um model

// const bookModel = model<IBook>('Book', bookSchema);