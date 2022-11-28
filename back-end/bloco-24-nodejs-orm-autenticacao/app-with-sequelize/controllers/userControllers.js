const express = require('express');
const { User } = require('../models');
const router = express.Router();


router.get('/', async (_req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  });

  //Buscar pelo id

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
  
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  
      return res.status(200).json(user);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

// Criar um usuario User.create

  router.post('/', async (req, res) => {
    try {
      const { fullName, email } = req.body;
      const newUser = await User.create({ fullName, email });
  
      return res.status(201).json(newUser);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

  // Atulizar o banco de dados User.update

  router.put('/:id', async (req, res) => {
    try {
      const { fullName, email } = req.body;
      const { id } = req.params;
  
      const [updateUser] = await User.update(
        { fullName, email },
        { where: { id } },
      );
  
      console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;
  
      if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });
  
      return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

  // Utiliza o Id para retirar do banco de dados User.destroy

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUser = await User.destroy(
        { where: { id } },
      );
  
      console.log(deleteUser) // confira o que é retornado quando o user com o id é ou não encontrado;
  
      return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });
  
  module.exports = router;