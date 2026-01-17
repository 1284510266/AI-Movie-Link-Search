/**
 * Formats file size to a human-readable string.
 */
function formatSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Basic magnet link validation.
 */
function isValidMagnet(url) {
    return typeof url === 'string' && url.startsWith('magnet:?xt=urn:btih:');
}

/**
 * Extract hash from magnet link.
 */
function getMagnetHash(url) {
    const match = url.match(/btih:([a-zA-Z0-9]+)/);
    return match ? match[1].toLowerCase() : null;
}

/**
 * Deduplicate results based on magnet hash or title.
 */
function deduplicateResults(results) {
    const seen = new Set();
    return results.filter(item => {
        const hash = getMagnetHash(item.link);
        const id = hash || item.title.toLowerCase().trim();
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
    });
}

module.exports = {
    formatSize,
    isValidMagnet,
    deduplicateResults
};
