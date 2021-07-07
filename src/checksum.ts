export function checksum(account: string): boolean {
    let value = parseInt(account);
    let sum = 0;
    for(let factor = 1; factor <= 9; factor++) {
        sum = sum + (value % 10) * factor;
        value = Math.floor(value / 10);
    }
    return sum % 11 == 0;
}

