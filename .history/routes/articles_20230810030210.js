import { express } from 'express';

const router = express.Router();

// These all are API's
router.get('/', getArticles)


router.get('/', createArticles)
