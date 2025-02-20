import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAsIsFuncs, GetTodayOrdersFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/AsIs', GetAsIsFuncs);
router.get('/TodayQrCodes', GetTodayOrdersFunc);

export { router };