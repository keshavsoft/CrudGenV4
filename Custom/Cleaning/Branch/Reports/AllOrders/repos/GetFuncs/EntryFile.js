import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch,inFromDate, inToDate }) => {
    return GetFuncsDal({ inBranch ,inFromDate, inToDate});
};

let GetItemsFuncs = ({ inBranch }) => {
    return GetItemsFuncsDal({ inBranch });
};

export {
    GetFuncs, GetItemsFuncs
};