// Check Vowel or Consonant
// Check if a given character is a vowel or a consonant.

var char = "S";

var charInLower = char.toLowerCase();

if (charInLower == 'a' || charInLower == 'e' || charInLower == 'i' || charInLower == 'o' || charInLower == 'u') {
    console.log(`${char} is a vowel...!`);
}
else {
    console.log(`${char} is a consonant...!`);
}