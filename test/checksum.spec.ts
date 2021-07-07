import { checksum } from '../src/checksum';

describe('Checksum', () => {
    test('should be true for account 000000000', () => {
        expect(checksum('000000000')).toBe(true);
    });
    test('should be false for account 000000001', () => {
        expect(checksum('000000001')).toBe(false);
    });

    test('should be true for some correct accounts', () => {
        expect(checksum('000000019')).toBe(true);
        expect(checksum('000000027')).toBe(true);
        expect(checksum('000000116')).toBe(true);
        expect(checksum('123456789')).toBe(true);
    });
});
