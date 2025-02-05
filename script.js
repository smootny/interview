document.querySelectorAll('pre').forEach(pre => {
    const lines = pre.innerHTML.split('\n');
    const trimmedLines = lines.map(line => line.trimStart());
    pre.innerHTML = trimmedLines.join('\n');
});
