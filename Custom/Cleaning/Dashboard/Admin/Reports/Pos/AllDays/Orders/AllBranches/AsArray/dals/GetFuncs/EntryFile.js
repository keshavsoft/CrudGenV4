import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';

let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

export {
    GetAllFuncs
};