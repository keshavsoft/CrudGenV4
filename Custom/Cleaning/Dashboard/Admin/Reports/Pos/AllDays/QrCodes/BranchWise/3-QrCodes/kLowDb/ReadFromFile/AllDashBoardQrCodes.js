import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    const LocalQrCodeData = buildData();
    
    const LocalFilteredData = LocalQrCodeData.filter(element => {
        return element.BranchName === inBranch;
    });

    return LocalFilteredData.slice().reverse();
};

export { StartFunc };
