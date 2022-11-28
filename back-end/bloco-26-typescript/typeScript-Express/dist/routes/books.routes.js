"use strict";
// ./routes/books.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const book_middlewares_1 = __importDefault(require("../middlewares/book.middlewares"));
const router = (0, express_1.Router)();
const booksController = new book_controller_1.default();
router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', book_middlewares_1.default, booksController.create);
router.put('/books/:id', book_middlewares_1.default, booksController.update);
exports.default = router;
