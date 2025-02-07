import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';

let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let SimpleFuncs = () => {
    return StartFuncmergeArray();
};

let ItemCountFuncs = () => {
    return StartFuncmergeArray();
};

export {
    GetAllFuncs, SimpleFuncs, ItemCountFuncs
};