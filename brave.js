function findLastOccurrence(experimentalString, symbol1, symbol2) {
    if (!experimentalString) {
        return -1;
    }

    const aIndex = experimentalString.lastIndexOf(symbol1);
    const bIndex = experimentalString.lastIndexOf(symbol2);

    return Math.max(aIndex, bIndex);

};