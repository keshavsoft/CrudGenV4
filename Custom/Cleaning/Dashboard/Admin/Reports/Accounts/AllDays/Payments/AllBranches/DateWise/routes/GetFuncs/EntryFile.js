import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAsIsFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);
router.get('/AsIs', GetAsIsFuncs);

export { router };