import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';
import { StartFunc as StartFuncsimple } from '../../kLowDb/ReadFromFile/simple.js';
import { StartFunc as StartFuncitemCount } from '../../kLowDb/ReadFromFile/itemCount.js';
import { StartFunc as StartFuncisSettled } from '../../kLowDb/ReadFromFile/isettled.js';

let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let GetSimpleFuncs = () => {
    return StartFuncsimple();
};

let GetItemCountFuncs = () => {
    return StartFuncitemCount();
};

let GetIsSettledFuncs = () => {
    return StartFuncisSettled();
};

let GetWithSettlementFuncs = () => {
    return StartFuncmergeArray();
};

let GetWithDeliveryFuncs = () => {
    return StartFuncmergeArray();
};

export {
    GetAllFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs, GetWithSettlementFuncs, GetWithDeliveryFuncs
};