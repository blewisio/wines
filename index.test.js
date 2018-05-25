const wines = require('./index');

test('has an all function', () => {
    expect(typeof wines.all).toEqual('function');
});

test('all returns all wines', () => {
    const all = wines.all();
    const reds = wines.reds();
    const whites = wines.whites();
    expect(all.length).toBeGreaterThanOrEqual(whites.length + reds.length);
});

test('has a reds function', () => {
    expect(typeof wines.reds).toEqual('function');
});

test('reds only returns red wines', () => {
    const all = wines.all();
    const reds = wines.reds();
    expect(reds.length).toBeGreaterThan(7);
    const nonRedStyles = reds
        .map(red => all.find(x => x.name === red))
        .filter(red => red.style !== 'red');
    expect(nonRedStyles.length).toEqual(0);
});

test('has a whites function', () => {
    expect(typeof wines.whites).toEqual('function');
});

test('whites only returns white wines', () => {
    const all = wines.all();
    const whites = wines.whites();
    expect(whites.length).toBeGreaterThan(2);
    const nonWhiteStyles = whites
        .map(white => all.find(x => x.name === white))
        .filter(white => white.style !== 'white');
    expect(nonWhiteStyles.length).toEqual(0);
});

test('has a roses function', () => {
    expect(typeof wines.roses).toEqual('function');
});

test('has a list function', () => {
    expect(typeof wines.list).toEqual('function');
});
