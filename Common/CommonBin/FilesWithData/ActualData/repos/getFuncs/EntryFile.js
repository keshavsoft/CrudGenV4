import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';
import { GetFunc as GetRowWithDataFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};
let GetRowWithDataFunc = () => {
    return GetRowWithDataFuncDal();
};

export { GetFunc, GetRowWithDataFunc };