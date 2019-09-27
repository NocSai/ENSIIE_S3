let Util = {};
Util.factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n >= 3000) {
        throw 'n too large'
    }

    if (n < 0) {
        throw 'n is negative'
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function (n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;

};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {

	total = 0;
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
	for (var i = 2; i <= n; i++)
        if (Util.isPrime(i) === true) total = total + i;
    return total;	
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

	fizzBuzzArray = [];
	if (n < 0) {
        throw 'Unable to compute fizzBuzz for n < 0'
    }
	for (var i=1; i <= n; i++){
		if (i % 15 == 0) fizzBuzzArray.push("FizzBuzz");
		else if (i % 3 == 0) fizzBuzzArray.push("Fizz");
		else if (i % 5 == 0) fizzBuzzArray.push("Buzz");
		else fizzBuzzArray.push(i);
	}
	return fizzBuzzArray;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

	returnPhrase = "";
	for (var i=0; i < phrase.length; i++) {
		ASCIICode = phrase.charCodeAt(i);
		if ( ( ASCIICode >= 97 && ASCIICode < 122 ) || ( ASCIICode >= 65 && ASCIICode < 90 ) ) returnPhrase += String.fromCharCode(ASCIICode + 1)
		else if ( ASCIICode === 90 ) returnPhrase += String.fromCharCode(65)
		else if ( ASCIICode === 122 ) returnPhrase += String.fromCharCode(97)
		else returnPhrase += phrase.charAt(i);
	}
	return returnPhrase;
};


module.exports = Util;

