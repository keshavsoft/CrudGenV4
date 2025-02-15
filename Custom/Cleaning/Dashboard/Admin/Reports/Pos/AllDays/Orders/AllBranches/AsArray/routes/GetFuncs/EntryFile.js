import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs, GetWithSettlementFuncs, GetWithDeliveryFuncs, GetSortByDateFuncs, GetSortByDateDescFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/Simple', GetSimpleFuncs);
router.get('/ItemCount', GetItemCountFuncs);
router.get('/IsSettled', GetIsSettledFuncs);
router.get('/WithSettlement', GetWithSettlementFuncs);
router.get('/WithDelivery', GetWithDeliveryFuncs);
router.get('/SortByDate', GetSortByDateFuncs);
router.get('/SortByDateDesc', GetSortByDateDescFuncs);

export { router };