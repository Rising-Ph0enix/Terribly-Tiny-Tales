const fs = require('fs').promises;

/* 
    Gets file at the given url  
*/
async function getFile() {
    try {
        return await fs.readFile(__dirname + '/../../../file/ttt.txt');
    } catch (err) {
        throw err;
    }
};

/* 
    Converts a text file to an array of words
*/
async function extractWordsFromFile(file) {
    try {
        const specialCharacters = /[ \n\t,.?/:;()@>""]+/;
        const words = file.toString().toLowerCase().split(specialCharacters);
        return words;
    } catch (err) {
        throw err;
    }
};

/* 
    Calculates the words and frequencies of every word in file. Sorts in descending order
*/
async function calculateWordFrequency(words) {
    try {
        const frequencyTable = new Map();
        let frequency;
        words.map(word => {
            frequency = frequencyTable.has(word) ? frequencyTable.get(word) + 1 : 1;
            frequencyTable.set(word, frequency);
        });
        let wordFrequencies = [];
        for (let [word, frequency] of frequencyTable) {
            wordFrequencies.push({
                word: word,
                frequency: frequency
            });
        }
        return wordFrequencies.sort((word1, word2) => word2.frequency - word1.frequency);
    } catch (err) {
        throw err;
    }
};

/* 
    Get the N-most frequent words
*/
async function getMostFrequentWords(wordFrequencies, N) {
    try {
        const mostFrequentWords = [];
        while (N > 0) {
            mostFrequentWords.push(wordFrequencies.shift());
            N--;
        }
        return mostFrequentWords;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getFile: getFile,
    extractWordsFromFile: extractWordsFromFile,
    calculateWordFrequency: calculateWordFrequency,
    getMostFrequentWords: getMostFrequentWords
};
