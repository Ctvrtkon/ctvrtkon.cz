const types = {
    "dev": "DEV",
    "mkt": "MKT",
    "ux": "UX",
    "special": "Speciál",
    "other": "Ostatní"
};

export function mapSection(section) {
    if (types[section]) {
        return `[${types[section].toUpperCase()}] `;
    }
    return '';
}
