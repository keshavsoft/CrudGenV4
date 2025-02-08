import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';
import { StartFunc as StartFuncsimple } from '../../kLowDb/ReadFromFile/simple.js';
import { StartFunc as StartFuncitemCount } from '../../kLowDb/ReadFromFile/itemCount.js';

import { StartFunc as StartFuncisSettled } from '../../kLowDb/ReadFromFile/isettled.js';

let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let SimpleFuncs = () => {
    return StartFuncsimple();
};

let ItemCountFuncs = () => {
    return StartFuncitemCount();
};

let IsSettledFuncs = () => {
    return StartFuncisSettled();
};

let WithSettlementFuncs = () => {
    return StartFuncmergeArray();
};

let WithDeliveryFuncs = () => {
    return StartFuncmergeArray();
};

export {
    GetAllFuncs, SimpleFuncs, ItemCountFuncs, IsSettledFuncs, WithSettlementFuncs, WithDeliveryFuncs
};