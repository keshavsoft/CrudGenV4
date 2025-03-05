let StartFunc = ({ inGroupedData }) => {
    const grouped = inGroupedData;

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length,
        });
    };


    let LocalTodayQrCodes = [];
    const today = new Date().toISOString().split('T')[0];

    for (const [key, value] of Object.entries(grouped)) {
        const todayQRCodes = value.filter(qr => new Date(qr.BookingData.OrderData.Currentdateandtime).toISOString().split('T')[0] === today);

        if (todayQRCodes.length > 0) {
            LocalTodayQrCodes.push({
                BranchName: key,
                QrCount: todayQRCodes.length,
            });
        }
    }

    return { AllQrCodes: LocalReturnArray, TodayQrCodes: LocalTodayQrCodes };
};

export { StartFunc };