import { express } from 'express';

const router = express.Router();

// These all are API's
router.get('/', getArticles)

// https:localhost:3000/
router.post('/', createArticle)

router.get('/:id', getArticle)

router.patch('/:id', getArticle)

router.get('/', getArticle)