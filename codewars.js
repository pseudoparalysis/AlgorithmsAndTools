/* Display string beside the like button like facebook
 * names are arrays
 */

//Solution 1 no string replacement
function likes(names) {
	switch(names.length) {
		case 0: return "no one likes this";
		case 1: return names[0] + " likes this";
		case 2: return names[0] + " and " + names[1] + " like this";
		case 3: return names[0] + ", " + names[1] + " and " + names[2] + " like this";
		case 4: return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
	}
}

//Solution 2, string replacement
function likesV2(names) {
	return {
		0: "no one likes this",
		1: `${names[0]} likes this`,
		2: `${names[0]} and ${names[1]} like this`,
		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	}[Math.min(names.length, 4)]
}


/* Title case, case of minor words are ignored
 * arguments are string delimited by spaces
 */
function titleCase(title, minorWords) {
	var minorWordsList = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(" ") : [""];
	var titleWordsList = title.toLowerCase().split(" ");

	titleWordsList = titleWordsList.map(function(word, index) {
		if(word !== "" && (minorWordsList.indexOf(word) === -1 || index === 0) ) {
			word =  word[0].toUpperCase() + word.slice(1);
		}
    
    	return word;
	});

	return titleWordsList.join(" ");
}

/*Count the number of repeated letters
 * e.g. is text is feeble, e is repeated 3 times, therefore number of repeated letters is 1.
 */

function duplicateCount(text){
  var repeatedLetters = [];
  var occurence = 0;
  text = text.toLowerCase();
  for(var i = 0, max = text.length; i < max; i++) {
    occurence = text.split(text[i]).length - 1;
    if(occurence > 1 && repeatedLetters.indexOf(text[i]) === -1) {
      repeatedLetters.push(text[i]);
    }
  }
  
  return repeatedLetters.length;
}

//regexpway
function duplicateCountV2(text) {
	//sort by alphabetical order so that match(regexp) can detected repeated letter by groups
	// match returns an array of matched but to catch "", return [] is required. 
	return (text.toLowerCase().split("").sort().join("").match(/([^])\1+/g) || []).length;
}

/*In each word in a sentence, there is a number that indicates its position, from 1 to 9
 *Sort the words according to their numbers.
 */
function order(words) {
	words = words.split.(" ").sort(function(a, b) {
		return a.match(/\d/g) - b.match(/\d/g);
	});

	return words.join(" ");
}

//Shorter version
function order(words) {
	return words.split.(" ").sort(function(a, b) {
		return a.match(/\d/g) - b.match(/\d/g);
	}).join(" ");
}

/*Given strarr and k, return the longest k consecutive str in strarr
 *if strarr.length < k  or k <= 0 or strarr.length = 0 then return ""
 */

function longestConsec(strarr, k) {
	var longestStr = ""; //Default return value

	for(var i = 0; k > 0 && i <= strarr.length - k; i++) { 
	//strarr.length - k captures the case where strarr.length < k, k > 0 capture k <= 0 and strarr.length = 0 tgt!!!!
		var str = strarr.slice(i, i + k).join("");
		if(str.length > longestStr.length) {
			longestStr = str;
		}
	}

	return longestStr;
}

/*Converting decimal rgb to hex string*/

function rgb(r, g, b) {
	var rgbNum = [r, g, b];

	return rgbNum.map(function(val) {
		if(val < 0) { return "00" }
		if(val > 255) { return "FF" }

		//Smart way to cut out/include the "0" when needed or not.
		return ("0" + Number(val).toString(16)).slice(-2).toUpperCase();

	}).join("");
}