import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetOrderDasboardFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/OrderDasboard', GetOrderDasboardFunc);


export { router };