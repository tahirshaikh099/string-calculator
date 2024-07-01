function stringCalculator(input) {
    if (input === '') return 0;

    // Default delimiters
    let delimiters = [',', '\n'];
    let numbersString = input;

    // Check for custom delimiter
    if (input.startsWith('//')) {
        const delimiterEndIndex = input.indexOf('\n');
        const delimiter = input.substring(2, delimiterEndIndex);
        delimiters.push(delimiter);
        numbersString = input.substring(delimiterEndIndex + 1);
    }

    // Split the numbers by the delimiters
    const numbers = numbersString.split(new RegExp(`[${delimiters.join('')}]`)).map(Number);

    // Check negative numbers
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }

    // Sum numbers, ignoring those greater than 1000
    return numbers.reduce((sum, num) => {
        if (num <= 1000) {
            return sum + num;
        }
        return sum;
    }, 0);
}

module.exports = stringCalculator;
