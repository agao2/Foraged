import { calculateStreak } from './streak';

describe('calculateStreak', () => {
    it('should get longest even streak', () => {
        const input = 'ace';
        const output = calculateStreak(input);
        expect(output).toEqual('ace');
    });

    it('should get longest odd streak with even character', () => {
        const input = 'abdfh';
        const output = calculateStreak(input);
        expect(output).toEqual('bdfh');
    });

    it('should ignore spaces', () => {
        const input = 'ac bd';
        const output = calculateStreak(input);
        expect(output).toEqual('ac');
    });

    it('should break streaks on non-alpha characters', () => {
        const input = 'b@df';
        const output = calculateStreak(input);
        expect(output).toEqual('df');
    });

    it('Should ignore casing', () => {
        const input = 'AcE';
        const output = calculateStreak(input);
        expect(output).toEqual('ace');
    });

    it('Should work with longer sentence', () => {
        const input = 'This is what your final project could look like';
        const output = calculateStreak(input);
        expect(output).toEqual('is is w');
    });
});
