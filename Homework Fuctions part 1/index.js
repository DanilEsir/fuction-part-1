function produce () {
    return Math.round(Math.random() * 10);
}

function transform (n) {
    let res = Math.round(n / 2)
    return res
}

function consume (n) {
    result.innerHTML = 'n=' + n;
    
}