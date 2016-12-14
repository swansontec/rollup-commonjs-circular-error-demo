import hashjs from 'hash.js'

function magic (data) {
    return hashjs.sha256().update(data).digest()
}

magic([1, 2, 3, 4])