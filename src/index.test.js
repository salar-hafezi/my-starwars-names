const expect = require('chai').expect;
const starwars = require('./index');

describe('Starwars', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
	const isArrayOfStrings = (arr) => {
	  if (Array.isArray(arr) && arr.length > 0) {
            let passed = true;
            for (let i = 0; i < arr.length; i++) {
              if (typeof arr[i] !== 'string') {
		passed = false;
		      break;
	      }
	    }
            return passed;
	  } else {
	    return false;
	  }
	};
      expect(starwars.all()).to.satisfy(isArrayOfStrings);
    });
  });
  // ------------------------------------------------------
  describe('random', () => {
    it('should return a random item of starwars all', () => {
      const item = starwars.random();
      expect(starwars.all()).to.include(item);
    });
  });
});
