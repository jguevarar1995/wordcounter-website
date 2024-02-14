function countWordsAndCharacters(fileContent) {
    const words = fileContent.trim().split(/\s+/);
    const summary = new Set(words);
    const totalWords = words.length;
    const totalCharacters = fileContent.replace(/\n+/g, '').length;

    let result = `<b>${totalWords} words</b>`;
    result += `<br><b>${totalCharacters} characters</b><br><br>`;
    summary.forEach(word => {
        const count = words.filter(w => w === word).length;
        result += `<span>${word}: ${count}</span><br>`;
    });

    document.getElementById('wordCountResult').innerHTML = result;
}