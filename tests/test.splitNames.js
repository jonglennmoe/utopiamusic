const assert = require('chai').assert;

const names = [
    'Michael Daniel Jäger',
    'LINUS HARALD christer WAHLGREN',
    'Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP',
    'Kalle Anka',
    'Ghandi'
];

const expected = [
    {
        firstName:'Michael',
        middleNames: ['Daniel'],
        lastName: 'Jäger'
    },
    {
        firstName: 'LINUS',
        middleNames: ['HARALD','christer'],
        lastName: 'WAHLGREN'
    },
    {
        firstName: 'Pippilotta',
        middleNames: ['Viktualia', 'Rullgardina', 'Krusmynta' , 'Efraimsdotter' ],
        lastName: 'LÅNGSTRUMP'
    },
    { firstName: 'Kalle' , middleNames: [], lastName: 'Anka' },
    { firstName: 'Ghandi' , middleNames: [], lastName: null }
];

const validate = (namesObj) => {
    namesObj.forEach((name, index) => {
        it('Should match namesObj with the expected values', function() {
            assert.deepEqual(namesObj, expected);
        });
    });
};

const splitNames  = () => {
    let result = [];
    for (const fullName of names) {
        let nameParts = fullName.split(' ');
        let nameObj = {};

        nameObj.firstName = nameParts[0];
        nameParts.shift();

        const lastName = nameParts[nameParts.length - 1] || null;
        nameParts.pop();

        nameObj.middleNames = getMiddleNames(nameParts);
        nameObj.lastName = lastName;

        result.push(nameObj);
    }
    return result;
}

const getMiddleNames = (nameParts) => {
    let middleNames = [];
    for (const middleName of nameParts) {
        middleNames.push(middleName);
    }
    return middleNames;
}

validate(splitNames());