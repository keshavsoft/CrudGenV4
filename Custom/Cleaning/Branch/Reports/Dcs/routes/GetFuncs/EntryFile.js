import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetToScanFuncs

} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/ToScan/:inBranch/:inFromDate/:inToDate', GetToScanFuncs); //Only Sent Dcs

export { router };