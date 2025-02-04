import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal,
    GetWithRowsFuncs as GetWithRowsFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

let GetWithRowsFuncs = () => {
    return GetWithRowsFuncsDal();
};

export {
    GetFuncs, GetAsIsFuncs, GetWithRowsFuncs
};