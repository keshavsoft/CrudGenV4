import { StartFunc as BranchDc } from '../CommonFuncs/FromApi/FactoryOut_DC.js';
import { StartFunc as EntryScan } from '../CommonFuncs/FromApi/FromFactoryCancelScan.js';

const StartFunc = ({ inId }) => {
    const localId = inId;
    const LocalBranchDcData = BranchDc();
    const LocalEntryScanData = EntryScan();

    const LocalFilterBranchDcData = LocalBranchDcData.find(e => e.pk == localId);

    if (!LocalFilterBranchDcData) {
        return { KTF: false, KReason: `No data ${localId}` };
    };

    const LocalFilterBranchScanDataCount = LocalEntryScanData.filter(e => e.VoucherRef == localId).length;

    return {
        KTF: true,
        QrCount: LocalFilterBranchScanDataCount,
        AsIs: {
            ...LocalFilterBranchDcData,
            DateTime: new Date(LocalFilterBranchDcData.DateTime).toLocaleDateString('en-GB')// hh:mm:ss format

        }

    };
};

export { StartFunc };
