import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/WithChecking/StartFunc.js';

let PostFunc = ({ inCustomerName, inMobileNumber, inBranch, inPostBody }) => {
    return EntryScan({ inCustomerName, inMobileNumber, inBranch, inDataToInsert: inPostBody });
};

export { PostFunc };