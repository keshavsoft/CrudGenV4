import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inCustomerName, inMobileNumber, inBranch, inPostBody }) => {
    return PostFuncDal({ inCustomerName, inMobileNumber, inBranch, inPostBody });
};

export { PostFunc };