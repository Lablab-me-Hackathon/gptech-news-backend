import { express } from 'express';

const router = express.Router();

// These all are API's
router.get('/', getArticles)

// https:localhost:3000/
router.post('/', createArticle)
router.get('/:id', getArticle)
router.patch('/:id', updateArticle)
router.delete('/:id', deleteArticle)
router.patch('/:id/likeArticle', likeArticle)



