import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';
import { StartFunc as StartFuncsimple } from '../../kLowDb/ReadFromFile/simple.js';
import { StartFunc as StartFuncitemCount } from '../../kLowDb/ReadFromFile/itemCount.js';



let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let SimpleFuncs = () => {
    return StartFuncsimple();
};

let ItemCountFuncs = () => {
    return StartFuncitemCount();
};

export {
    GetAllFuncs, SimpleFuncs, ItemCountFuncs
};