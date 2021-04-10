const crypto = require('crypto');


export function isSearchParamsValid(): boolean {
    let params = new URLSearchParams(window.location.search);
    const sign = params.get('sign');
    params.delete('sign');
    let sorted = new Map(Array.from(params.entries()).sort());
    const keys = Array.from(sorted.keys());
    const values = Array.from(sorted.values());
    const hashText = keys.map((e, i) => e + '=' + values[i]).join('&');
    const paramsHash = crypto
        .createHmac('sha256', 'KAQsqOyzW8R7wDuNYhzR')
        .update(hashText)
        .digest()
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=$/, '');
    return paramsHash === sign;
}
