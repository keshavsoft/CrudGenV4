import defaultJson from './default.json' assert {type: 'json'};

const StartFunc = ({ inBranch }) => {
    let LocalBranch = inBranch;
    let LocalDefalultKeys = defaultJson;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");
    LocalDefalultKeys.OrderData.BranchName = modifiedBranch;
    return LocalDefalultKeys
};

export { StartFunc };