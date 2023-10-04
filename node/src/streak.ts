const isEven = (char: string): boolean => (char.toLowerCase().charCodeAt(0) - 97) % 2 === 0;
const max = (str1: string, str2: string): string => {
    if (str1.replace(/\s+/g, '').length > str2.replace(/\s+/g, '').length) {
        return str1;
    } else {
        return str2;
    }
}

export const calculateStreak = (input: string): string => {
    // let length = 0;
    let current = "";
    let previous = "";
    let eveness = null;

    const characters = input.split('');

    for (let char of characters) {
        if (char === ' ') {
            current += char;
            continue;
        }

        if (/[^a-zA-Z]/.test(char)) {
            previous = max(current, previous);
            current = "";
            continue;
        }

        if (eveness === null || eveness === isEven(char)) {
            current += char;
        } else {
            previous = max(current, previous);
            current = char;
        }
        eveness = isEven(char);
    }
    return max(current, previous).trim();;
}