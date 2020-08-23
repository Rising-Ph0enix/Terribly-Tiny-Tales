const express = require('express');
const cors = require('cors')
const router = express.Router(); 
const { getFile, 
        extractWordsFromFile, calculateWordFrequency, getMostFrequentWords } = require('../utils/common-utils');

router.get('/', cors(), (req, res) => {
    res.send('Compute the most frequently used words at: /most-frequent-words');
});

/* 
    Returns a list of N-most frequent <word,frequency> pairs in file 
*/
router.get('most-frequent-words', cors(), async (req, res) => {
    try {
        const N = req.query.N;
        const file = await getFile();
        const words = await extractWordsFromFile(file); 
        const wordFrequencies = await calculateWordFrequency(words);        
        const nMostFrequentWords = await getMostFrequentWords(wordFrequencies, N);
        res.send(nMostFrequentWords);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;