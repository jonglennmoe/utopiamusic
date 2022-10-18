import { canAttack } from '../src/chessAttack.js';
import { assert } from 'chai';

const positions = [
    {a: ["C", 2], b: ["F", 4], canAttack: true},
    {a: ["C", 2], b: ["A", 1], canAttack: true},
    {a: ["A", 6], b: ["B", 4], canAttack: true},
    {a: ["A", 6], b: ["B", 5]},
    {a: ["C", 2], b: ["C", 2]},
    {a: ["F", 7], b: ["E", 5], canAttack: true},
    {a: ["A", -1], b: ["B", 1]},
    {a: ["D", 4], b: ["E", 5]}
];

const validate = () => {
    describe('can attack', function () {
        positions.forEach((test, index) => {
            it('should have correct attack values when possible', function() {
                assert.equal(canAttack(positions[index]), !!test.canAttack);
            });
        });
    });
}

validate();
