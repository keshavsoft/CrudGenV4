import {
    GetAllFuncs as GetAllFuncsDal,
    SimpleFuncs as SimpleFuncsDal,
    ItemCountFuncs as ItemCountFuncsDal
    
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let SimpleFuncs = () => {
    return SimpleFuncsDal();
};

let ItemCountFuncs = () => {
    return ItemCountFuncsDal();
};

export {
    GetFuncs, SimpleFuncs,ItemCountFuncs
};