import { express } from 'express';

const router = express.Router();

// These all are API's
router.get('/', getPosts)


router.get('/', createPost)
