var words = {
    mostFrequentWords : []
};

var handlers = {
    getMostFrequentWords : async function () {
        const N = document.getElementById('N').valueAsNumber;
        const url = `http://127.0.0.1:3000/most-frequent-words?N=${N}`;
        const mostFrequentWords = await fetch(url);
        words.mostFrequentWords = await mostFrequentWords.json();
        view.displayTable();
    }
};

var view = {
    displayTable : function() {
        const table = document.querySelector('table');
        this.eraseTable(table);
        this.renderTable(table);
    },
    eraseTable: function (table) {
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
    },
    renderTable : function(table) {
        let wordHeader = document.createElement('th');
        let frequencyHeader = document.createElement('th');
        wordHeader.textContent = 'Word';
        frequencyHeader.textContent = 'Frequency';
        table.appendChild(wordHeader);
        table.appendChild(frequencyHeader);
        for (let i = 0; i <  words.mostFrequentWords.length; i++) {
            let row = document.createElement('tr');
            let word = document.createElement('td');
            let frequency = document.createElement('td');
            word.textContent = words.mostFrequentWords[i].word;
            frequency.textContent = words.mostFrequentWords[i].frequency;
            table.appendChild(row);
            row.appendChild(word);
            row.appendChild(frequency);
        }
    }
};
