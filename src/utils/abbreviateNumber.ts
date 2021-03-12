export default function abbreviateNumber(value: number) {
    let newValue = value.toString();
    if (value >= 1000) {
        const suffixes = ["", "тыс", "млн", "млрд","трлн"];
        const suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = null;
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue != null && shortValue % 1 != 0)  shortValue = shortValue?.toFixed(1);
        newValue = shortValue + ' ' + suffixes[suffixNum];
    }
    return newValue;
}