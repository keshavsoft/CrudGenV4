import {
    GetAllFuncs as GetAllFuncsDal,
	GetOrderDasboardFunc as GetOrderDasboardFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};


let GetOrderDasboardFunc = async () => {
	let LocalFromDal = await GetOrderDasboardFuncDal();

	return LocalFromDal;
};
export {
    GetFuncs,
	GetOrderDasboardFunc
};