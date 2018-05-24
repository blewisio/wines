const styles = {
    RED: 'red',
    WHITE: 'white',
    ROSE: 'rose'
};

const wines = [
    {
        name: 'Cabernet Sauvignon',
        style: styles.RED,
        isSparkling: false
    },
    {
        name: 'Champagne',
        style: styles.WHITE,
        isSparkling: true
    },
    {
        name: 'Chardonnay',
        style: styles.WHITE,
        isSparkling: false
    },
    {
        name: 'Chianti',
        style: styles.RED,
        isSparkling: false
    },
    {
        name: 'Malbec',
        style: styles.RED,
        isSparkling: false
    },
    {
        name: 'Petite Sirah',
        style: styles.RED,
        isSparkling: false
    },
    {
        name: 'Pinot Grigio',
        style: styles.WHITE,
        isSparkling: false
    }, 
    {
        name: 'Pinot Noir',
        style: styles.RED,
        isSparkling: false
    },
    {
        name: 'Riesling',
        style: styles.RED,
        isSparkling: false
    }, 
    {
        name: 'Rose (dry)',
        style: styles.ROSE,
        isSparkling: false
    }, 
    {
        name: 'Rose Champagne',
        style: styles.RED,
        isSparkling: true
    },
    {
        name: 'Sauvignon Blanc',
        style: styles.WHITE,
        isSparkling: false
    }, 
    {
        name: 'Syrah',
        style: styles.RED,
        isSparkling: false
    }, 
    {
        name: 'Zinfandel',
        style: styles.ROSE,
        isSparkling: false
    }
];

const toName = wine => {
    return wine.name;
};

const reds = () => {
    return wines.filter(wine => wine.style === styles.RED).map(toName);
};

const whites = () => {
    return wines.filter(wine => wine.style === styles.WHITE).map(toName);
};

module.exports = {
    list: () => wines,
    reds: reds,
    whites: whites
};
