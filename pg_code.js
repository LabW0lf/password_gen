function generatePassword(difficulty, length) {
    const numbers = "1234567890";
    const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const characters = "!§$%&/()#=?+*~-_.:,;'";

    let result = [];

    switch (difficulty) {
        case 1:
            for (let i = 0; i < length; i++) {
                result.push(numbers[Math.floor(Math.random() * numbers.length)]);
            }
            break;

        case 2:
            for (let i = 0; i < length; i++) {
                if (Math.random() < 0.5) {
                    result.push(numbers[Math.floor(Math.random() * numbers.length)]);
                } else {
                    result.push(alphabetLower[Math.floor(Math.random() * alphabetLower.length)]);
                }
            }
            break;

        case 3:
            for (let i = 0; i < length; i++) {
                const rand = Math.random();
                if (rand < 0.33) {
                    result.push(numbers[Math.floor(Math.random() * numbers.length)]);
                } else if (rand < 0.66) {
                    result.push(alphabetLower[Math.floor(Math.random() * alphabetLower.length)]);
                } else {
                    result.push(characters[Math.floor(Math.random() * characters.length)]);
                }
            }
            break;

        case 4:
            for (let i = 0; i < length; i++) {
                const rand = Math.random();
                if (rand < 0.25) {
                    result.push(numbers[Math.floor(Math.random() * numbers.length)]);
                } else if (rand < 0.5) {
                    result.push(alphabetLower[Math.floor(Math.random() * alphabetLower.length)]);
                } else if (rand < 0.75) {
                    result.push(alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]);
                } else {
                    result.push(characters[Math.floor(Math.random() * characters.length)]);
                }
            }
            break;

        default:
            return "Invalid difficulty";
    }

    return result.join('');
}


document.getElementById('generate').addEventListener('click', function() {
    const difficulty = parseInt(document.getElementById('difficulty').value);
    const length = parseInt(document.getElementById('length').value);



    if (isNaN(difficulty) || isNaN(length) || length < 1 || difficulty < 1 || difficulty > 4) {
        document.getElementById('result').textContent = "Please enter valid inputs.";
        return;
    }

    const password = generatePassword(difficulty, length);
    document.getElementById('result').textContent = `${password}`;
});