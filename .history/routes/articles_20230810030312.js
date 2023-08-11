import { express } from 'express';

const router = express.Router();

// These all are API's
router.get('/', getArticles)

// https: loca
router.post('/', createArticle)
