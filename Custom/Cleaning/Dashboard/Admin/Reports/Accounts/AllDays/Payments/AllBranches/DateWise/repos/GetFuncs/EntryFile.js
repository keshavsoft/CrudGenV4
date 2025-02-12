import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetAllFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

export {
    GetFuncs, GetAsIsFuncs
};