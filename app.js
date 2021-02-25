const mm = {
    h: 1.008,
    he: 4.00,
    li: 6.94,
    be: 9.01,
    b: 10.81,
    c: 12.01,
    n: 14.01,
    o: 16.00,
    f: 19.00,
    ne: 20.18,
    na: 22.99,
    mg: 24.30,
    al: 26.98,
    si: 28.09,
    p: 30.97,
    s: 32.16,
    cl: 35.45,
    ar: 39.95,
    k: 39.10,
    ca: 40.08,
    sc: 44.96,
    ti: 47.87,
    v: 50.94,
    cr: 52.00,
    mn: 59.94,
    fe: 55.85,
    co: 58.93,
    ni: 58.69,
    cu: 63.55,
    zn: 65.38,
    ga: 69.72,
    ge: 72.63,
    as: 74.92,
    se: 78.97,
    br: 79.00,
    kr: 83.80,
    rb: 85.47,
    sr: 87.62,
    y: 88.91,
    zr: 91.22,
    nb: 92.91,
    mo: 95.95,
    tc: "",
    ru: 101.07,
    rh: 102.91,
    pd: 106.62,
    ag: 107.87,
    cd: 112.41,
    in: 114.82,
    sn: 118.71,
    sb: 121.76,
    te: 127.60,
    i: 126.90,
    xe: 131.29,
    cs: 132.91,
    ba: 137.33,
    la: 138.91,
    ce: 140.12,
    pr: 140.91,
    nd: 144.24,
    pm: "",
    sm: 150.36,
    eu: 151.97,
    gd: 157.25,
    tb: 158.93,
    dy: 162.50,
    ho: 164.93,
    er: 167.26,
    tm: 168.93,
    yb: 173.05,
    lu: 174.97,
    hf: 178.49,
    ta: 180.95,
    w: 183.84,
    re: 186.21,
    os: 190.23,
    ir: 192.22,
    pt: 195.08,
    au: 196.97,
    hg: 200.59,
    ti: 204.38,
    pb: 207.2,
    bi: 208.98,
    po: "",
    at: "",
    rn: "",
    fr: "",
    ra: "",
    ac: "",
    th: 232.04,
    pa: 231.04,
    u: 238.03,
    np: "",
    pu: "",
    am: "",
    cm: "",
    bk: "",
    cf: "",
    es: "",
    es: "",
    fm: "",
    md: "",
    no: "",
    lr: ""

}

document.querySelector('#button').addEventListener('click', function() {
    let numbers = [];
    let letters = [];
    let molarMasses = [];
    let sum = [];
    let output = 0;
    const rawInput = document.querySelector('#box').value;
    const regEx = rawInput.match(/[a-z]+|[^a-z]+/gi);

    for(i = 1; i < regEx.length; i += 2) {
        numbers.push(parseInt(regEx[i]));
    }

    for(i = 0; i < regEx.length; i += 2) {
        letters.push(regEx[i].toLowerCase());
    }

    for(i = 0; i < letters.length; i++) {
        molarMasses.push(mm[letters[i]]);
    }

    for(i = 0; i < letters.length; i++) {
        sum.push(molarMasses[i] * numbers[i]);
    }

    for(i = 0; i < sum.length; i++) {
        output += sum[i];
    }

    document.querySelector('#output').innerHTML = output + " g/mol";
})
