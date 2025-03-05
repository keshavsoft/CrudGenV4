import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal,
	GetTodayOrdersFunc as GetTodayOrdersFuncDal,
	GetQrCodesDashBoardFunc as GetQrCodesDashBoardFuncDal
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

let GetQrCodesDashBoardFunc = async () => {
	let LocalFromDal = await GetQrCodesDashBoardFuncDal();

	return LocalFromDal;
};

export {
    GetFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc,
	GetQrCodesDashBoardFunc
};