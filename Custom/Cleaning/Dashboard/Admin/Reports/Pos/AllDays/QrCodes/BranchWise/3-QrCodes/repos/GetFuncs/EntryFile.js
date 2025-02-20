import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal,
	GetTodayOrdersFunc as GetTodayOrdersFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

let GetTodayOrdersFunc = async () => {
	let LocalFromDal = await GetTodayOrdersFuncDal();

	return LocalFromDal;
};

export {
    GetFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc
};