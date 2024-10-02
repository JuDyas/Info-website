// Файл конфигурации для browser-synk
module.exports = {
    server: {
        baseDir: "./"
    },
    files: ["*.html", "*.css"],
    watchEvents: ["change", "add", "unlink"],
    reloadDebounce: 50
};
