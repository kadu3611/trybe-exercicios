// fazer a requerimento do connection

const connection = require('./connection');

const collectNewActhor = 

// Colocar os nomes em CamelCase
const camelCase = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name, 
    middleName: authorData.middle_name,
    lastName:authorData.last_name
});

// Buscar todas as pessoas autoras do banco de dados. De forma assicrona
const collectAllAuthor = async () => {
    const [authors] = await connection.execute(
        // faço a busca de todos as colunas que desejo no MYSQL
        'SELECT  id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(camelCase);
};

module.exports = {
    collectAllAuthor,
}