import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAsIsFuncs, GetTodayOrdersFunc, GetQrCodesDashBoardFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/AsIs', GetAsIsFuncs);
router.get('/TodayQrCodes', GetTodayOrdersFunc);
router.get('/QrCodesDashBoard', GetQrCodesDashBoardFunc);

export { router };