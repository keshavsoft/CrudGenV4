import {
    GetFuncs as GetFuncsRepo,
	GetOrderDasboardFunc as GetOrderDasboardFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {

    let LocalFromRepo = GetFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};



let GetOrderDasboardFunc = async (req, res) => {
	let LocalFromRepo = await GetOrderDasboardFuncRepo();

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};
export {
    GetFuncs,
	GetOrderDasboardFunc
};