const StartFunc = ({ inDataToInsert, inData, inColumns }) => {
    let LocalInData = inData;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalDefalultKeys = LocalFuncDefalultKeys({ inColumns })
    let MaxPk = Math.max(...LocalInData.map(el => el.pk).filter(el => el !== undefined).map(Number), 0) + 1;
    let LoclaReWashCount = 1;

    LocalReturnData.InsertData = { ...LocalDefalultKeys, ...inDataToInsert, ReWash: true, ReWashCount: LoclaReWashCount, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };
    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

const LocalFuncDefalultKeys = ({ inColumns }) => {
    let LocalinColumns = inColumns;

    let LocalDefaultfilteredObject = Object.fromEntries(
        Object.entries(LocalinColumns)
            .filter(([key, value]) => "defaultValue" in value)
            .map(([key, value]) => [key, value.defaultValue])
    );

    return LocalDefaultfilteredObject;
};

export { StartFunc };