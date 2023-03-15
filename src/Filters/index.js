// Checks any object, array, string, or integer exhaustively for a value
const recursiveFilter = (concern, value) => {
    if (Array.isArray(concern)) {
        return concern.some((item) => {
            if (recursiveFilter(item, value)) {
                return true
            }
            return false
        })
    }
    if (typeof concern === 'object') {
        if (concern === null) {
            return false
        }
        const keys = Object.keys(concern)
        return keys.some((key) => {
            if (recursiveFilter(concern[key], value)) {
                return true
            }
            return false
        })
    }
    if (typeof concern === 'string') {
        if (concern.toLowerCase().includes(value.toLowerCase())) {
            return true
        }
    }
    if (Number.isInteger(parseInt(concern, 10))) {
        if (concern.toString().includes(value)) {
            return true
        }
        if (concern === value) {
            return true
        }
        return false
    }
    return false
}

const tableFilter = (row, columnId, value) => {
    let concern = row.original[columnId]
    if (!concern) {
        concern = row.renderValue(columnId)
    }
    return recursiveFilter(concern, value)
}

const valueFilter = (row, columnId, value) => {
    const concern = row.renderValue(columnId)
    if (!concern || !typeof concern === 'string') {
        return false
    }
    // Check if concern contains value:
    if (concern.toLowerCase().includes(value.toLowerCase())) {
        return true
    }
    return false
}

export {tableFilter, valueFilter}
