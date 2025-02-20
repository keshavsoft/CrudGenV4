import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';
import { StartFunc as StartFuncFromGetTodayOrders } from '../../kLowDb/ReadFromFile/TodayOrders.js';

let GetAllFuncs = () => {
    return TodayAllQrCodes();
};

let GetAsIsFuncs = () => {
    return TodayAllQrCodes();
};

let GetTodayOrdersFunc = async () => {
	let LocalFromLowDb = await StartFuncFromGetTodayOrders();

	return await LocalFromLowDb;
};

export {
    GetAllFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc
};