function choice(items) {
    const randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx]
}

function remove(items, item) {
    const idx = items.indexOf(item);
    if (idx !== -1) {
        return items.splice(idx, 1)[0];
    }
    return undefined;
}

export {choice, remove}
