import { splitNames } from '../src/splitNames.js';
import { assert } from 'chai';


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

describe('get correct names', function() {
    const namesObj = splitNames(names);
    namesObj.forEach((name, index) => {
        it('Should match namesObj with the expected values', function() {
            assert.deepEqual(namesObj, expected);
        });
    });
});
