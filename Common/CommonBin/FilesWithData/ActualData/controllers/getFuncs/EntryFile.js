import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.json(LocalFromRepo);
};

let GetAsArrayFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.json(LocalFromRepo.JsonData);
};

export { GetFunc, GetAsArrayFunc };