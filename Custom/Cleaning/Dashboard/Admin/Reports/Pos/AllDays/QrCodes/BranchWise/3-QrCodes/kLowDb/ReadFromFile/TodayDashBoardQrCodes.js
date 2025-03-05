import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    const LocalQrCodeData = buildData();
    const today = new Date().toISOString().split('T')[0];

    const LocalFilteredData = LocalQrCodeData.filter(element => {

        const elementDate = new Date(element.OrderDateTime).toISOString().split('T')[0];
        
        return element.BranchName === inBranch && elementDate === today;
    });

    return LocalFilteredData.slice().reverse();
};

export { StartFunc };
