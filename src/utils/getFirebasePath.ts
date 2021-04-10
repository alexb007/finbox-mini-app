import getCurrentUserId from "./getCurrentUserId";

const crypto = require('crypto');


export default function getFirebasePath(): string {
    const userId = getCurrentUserId();
    return crypto
        .createHmac('sha256', 'KAQsqOyzW8R7wDuNYhzR')
        .update(userId)
        .digest()
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=$/, '');
}
