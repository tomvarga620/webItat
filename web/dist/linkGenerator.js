"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkGenerator = (item, actualPage) => {
    const active = item.local === actualPage ? "active" : "";
    const important = item.important ? "active" : "";
    let classString = "";
    if (active || important)
        classString = `class="${(active && important) ? active + '' + important : active + important}"`;
    const title = item.title ? `title="${item.title}"` : '';
    return `<li><a href="/${item.local}"${classString}${title}>${item.label}</a></li>`;
};
//# sourceMappingURL=linkGenerator.js.map