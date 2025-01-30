import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../../../../../../binV4/Config.json' assert {type: 'json'};

let StartFunc = (intableName) => {
    let LocaltableName = intableName;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${LocaltableName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        return false;
    };

    return db.data;
};

export { StartFunc };