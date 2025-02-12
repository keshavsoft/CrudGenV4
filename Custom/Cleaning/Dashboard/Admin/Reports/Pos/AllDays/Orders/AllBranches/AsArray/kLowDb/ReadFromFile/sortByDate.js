import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    const extractedData = LocalQrCodeData.flatMap(item =>
        item.FileData.map(file => ({
            CustomerName: file.CustomerData.CustomerName,
            Mobile: file.CustomerData.Mobile,
            BranchName: file.OrderData.BranchName,
            OrderDate: new Date(file.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            OrderDateWithTime: new Date(file.OrderData.Currentdateandtime).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            OrderNumber: file.UuId,
            TimeSpan: TimeSpan(file.OrderData.Currentdateandtime)
        }))
    );

    // Extract dates
    const dateStrings = extractedData.map(obj => obj.OrderDate);

    // Sorting dates properly (latest first)
    const sortedDates = dateStrings.sort((a, b) => {
        const dateA = new Date(a.split('/').reverse().join('/'));
        const dateB = new Date(b.split('/').reverse().join('/'));
        return dateB - dateA; // Sorting in descending order
    });

    // Mapping sorted dates back to the objects
    const sortedData = sortedDates.map(date => extractedData.find(obj => obj.OrderDate === date));

    return sortedData;
};

const TimeSpan = (dateTime) => {
    const now = new Date();
    const past = new Date(dateTime);
    const diffMs = now - past;

    const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
    const diffDays = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffMonths > 0) return `${diffMonths} months, ${diffDays} days, ${diffHrs} hrs, ${diffMins} min`;
    if (diffDays > 0) return `${diffDays} days, ${diffHrs} hrs, ${diffMins} min`;
    if (diffHrs > 0) return `${diffHrs} hrs, ${diffMins} min`;

    return `${diffMins} min`;
};

export { StartFunc };
