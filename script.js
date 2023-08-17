document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const entryTextarea = document.getElementById('entry');
    const entriesList = document.getElementById('entries');

    saveButton.addEventListener('click', () => {
        const entryText = entryTextarea.value.trim();
        if (entryText !== '') {
            const entryTimestamp = new Date().toLocaleString();
            const entryFilename = `entry_${Date.now()}.txt`;

            const entryElement = document.createElement('div');
            entryElement.classList.add('entry');
            entryElement.textContent = entryText;
            entriesList.appendChild(entryElement);

            // Criar um Blob (objeto de dados binários)
            const blob = new Blob([entryText], { type: 'text/plain' });

            // Criar um link para download
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = entryFilename;
            downloadLink.textContent = `Download (${entryTimestamp})`;
            entryElement.appendChild(downloadLink);

            entryTextarea.value = '';
        }
    });
});
