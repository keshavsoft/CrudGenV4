import express from 'express';
var router = express.Router();

import { GetFunc, GetAsArrayFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/AsArray', GetAsArrayFunc);

export { router };