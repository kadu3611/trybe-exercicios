const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme pelo ID no BD', () => {
    before(async () =>{
        const execute = [[]];
        sinon.stub(connection, 'execute').resolves(execute); // Trazendo uma cópia 
        // do banco de dados que eu tenho
    });
     after(async () => {
        connection.execute.restore(); // restaurando a conexão com o BD
     })
     describe('Quando não existe um filme com o id informado', () => {
        it("retorna null", async () => {
            const response = await MoviesModel.getById();
            expect(response).not.to.be.equal({}); // verificando diferente para 
            // testar o test
        })
     })

});