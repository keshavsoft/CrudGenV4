import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';
import { StartFunc as StartFuncsimple } from '../../kLowDb/ReadFromFile/simple.js';


let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let SimpleFuncs = () => {
    return StartFuncsimple();
};

let ItemCountFuncs = () => {
    return StartFuncmergeArray();
};

export {
    GetAllFuncs, SimpleFuncs, ItemCountFuncs
};