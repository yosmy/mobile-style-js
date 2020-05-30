const match = (string, elements) => {
    if (!string) {
        return false;
    }

    for (let i = 0; i <= elements.length - 1; i++) {
        if (!string.includes(elements[i])) {
            return false;
        }
    }

    return true;
}

export default match