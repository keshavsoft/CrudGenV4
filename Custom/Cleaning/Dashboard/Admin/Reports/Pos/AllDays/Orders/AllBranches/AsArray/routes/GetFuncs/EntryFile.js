import express from 'express';

var router = express.Router();

import {
    GetFuncs, SimpleFuncs, ItemCountFuncs, IsSettledFuncs, WithSettlementFuncs, WithDeliveryFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/Simple', SimpleFuncs);
router.get('/ItemCount', ItemCountFuncs);
router.get('/IsSettled', IsSettledFuncs);
router.get('/WithSettlement,', WithSettlementFuncs);
router.get('/WithDelivery,', WithDeliveryFuncs);

export { router };