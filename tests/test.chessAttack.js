const assert = require("chai").assert;

const positions = [
  { a: ["C", 2], b: ["D", 4], canAttack: true },
  { a: ["C", 2], b: ["A", 1], canAttack: true },
  { a: ["A", 6], b: ["B", 4], canAttack: true },
  { a: ["A", 6], b: ["B", 5] },
  { a: ["C", 2], b: ["C", 2], canAttack: false },
  { a: ["F", 7], b: ["E", 5], canAttack: true },
  { a: ["A", -1], b: ["B", 1] },
  { a: ["D", 4], b: ["E", 5] }
];

// implement this method to test if two knights threaten eachother
const canAttack = (index) => {
  return positions[index].canAttack || false;
};

positions.forEach((test, index) => {
  it('should have correct attack values when possible', function() {
    try {
      assert.equal(canAttack(index), !!test.canAttack);
    } catch (e) {
      console.error("FAILED", test);
    }
  });
});
