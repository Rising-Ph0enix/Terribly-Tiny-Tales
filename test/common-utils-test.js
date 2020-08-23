const expect = require('chai').expect;
const commonUtils = require('../src/backend/utils/common-utils');

let file;
let words;
let wordFrequencies;
describe('common utils tests', function () {
    it('should read the file', async () => {
        file = await commonUtils.getFile();
        expect(Buffer.isBuffer(file)).to.be.true;
    });
    it('should extract the file into an array of words', async () => {
        words = await commonUtils.extractWordsFromFile(file);
        expect(Array.isArray(words)).to.be.true;
    });
    it('should calculate word frequencies of every word and sort in descending order', async () => {
        wordFrequencies = await commonUtils.calculateWordFrequency(words);
        expect(wordFrequencies[0].frequency).to.be.gt(wordFrequencies[1].frequency);
    });
    it('should get the N-most frequent words', async () => {
        const N = 7; 
        const result = await commonUtils.getMostFrequentWords(wordFrequencies, N);
        expect(result.length).to.equal(N);
    })
});