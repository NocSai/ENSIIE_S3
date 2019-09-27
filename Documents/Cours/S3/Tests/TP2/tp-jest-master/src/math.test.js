const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function () {

    test('Test sumPrime de 2 => 2', () => {
        expect(Util.sumPrime(2)).toBe(2)
    });
    test('Test sumPrime de 6 => 10', () => {
        expect(Util.sumPrime(6)).toBe(10)
    });
    test('Test sumPrime de 8 => 17', () => {
        expect(Util.sumPrime(8)).toBe(17)
    });
    test('Test sumPrime < 0 => throw exception', () => {
        expect(() => { Util.sumPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, 2],
        [6, 10],
        [8, 17],
    ])(
        'sumPrime %i equals to %i',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        }
    );
});

describe('fizzBuzz', function () {

	test('Test fizzBuzz de 15 => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]', () => {
        expect(Util.fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])
    });
    test('Test fizzBuzz < 0 => throw exception', () => {
        expect(() => { Util.fizzBuzz(-10) }).toThrow('Unable to compute fizzBuzz for n < 0');
    });

    test.each([
        [0, []],
        [2, [1, 2]],
        [5, [1, 2, "Fizz", 4, "Buzz"]],
    ])(
        'fizzBuzz %i equals to %i',
        (n, expected) => {
            expect(Util.fizzBuzz(n)).toEqual(expected);
        }
    );
});

describe('cipher', function () {

	test('Test cipher de "Test Unitaire" => "Uftu Vojubjsf"', () => {
        expect(Util.cipher("Test Unitaire")).toEqual("Uftu Vojubjsf")
    });
	test('Test cipher de "1234" => "1234"', () => {
        expect(Util.cipher("1234")).toEqual("1234")
    });
	test('Test cipher de "Test Unitaire" => "Test Unitaire"', () => {
        expect(Util.cipher("Test Unitaire")).not.toEqual("Test Unitaire")
    });
});
