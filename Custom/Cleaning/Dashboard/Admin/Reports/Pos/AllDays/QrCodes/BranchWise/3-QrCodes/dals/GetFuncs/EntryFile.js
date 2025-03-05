import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';
import { StartFunc as StartFuncFromGetTodayOrders } from '../../kLowDb/ReadFromFile/TodayOrders.js';
import { StartFunc as StartFuncFromGetQrCodesDashBoard } from '../../kLowDb/ReadFromFile/QrCodesDashBoard.js';

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

let GetQrCodesDashBoardFunc = async () => {
	let LocalFromLowDb = await StartFuncFromGetQrCodesDashBoard();

	return await LocalFromLowDb;
};

export {
    GetAllFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc,
	GetQrCodesDashBoardFunc
};