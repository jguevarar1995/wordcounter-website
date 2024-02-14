function handleFileManager(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const fileContent = e.target.result;
        document.getElementById('fileContentLabel').textContent = 'File content: '
        document.getElementById('fileContent').textContent = fileContent;
        document.getElementById('fileInput').value = '';
        countWordsAndCharacters(fileContent);
    };

    reader.readAsText(file);
}