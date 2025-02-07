import express from 'express';

var router = express.Router();

import {
    GetFuncs, SimpleFuncs, ItemCountFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/Simple', SimpleFuncs);
router.get('/ItemCount', ItemCountFuncs);

export { router };