/**
 * PIPE OPERATOR       | >
 *
 * Stage: 2/4 (Draft)
 *
 * Chaining transformations *
 * spec: https://github.com/tc39/proposal-pipeline-operator
 *
 * https://dev.to/smpnjn/future-javascript-javascript-pipeline-operators-5jj
 */

// Takes a string and normalizes it
function normalizeString(value) {
  return String(value).trim();
}
// Takes a string and returns words
function tokenize(value) {
  return value.split(" ");
}
// Converts to number
function toNumber(values) {
  return values.map((number) => parseInt(number, 10));
}
// Filter even numbers
function filterEven(values) {
  return values.filter((number) => number % 2 === 0);
}
// Converts array to string
function joinNumbers(values) {
  return values.join(" ");
}
/**************************************/

// Filter even numbers "10 234 123 12" --> "10 234 12"
const input = "10 234 123 12";

// const normalized = normalizeString(input);
// const tokenized = tokenize(normalized);
// const number = toNumber(tokenized);
// const evenNumbers =  filterEven(number);
// const result = joinNumbers(evenNumbers);

// console.log(result);

// const result = joinNumbers(
//   filterEven(toNumber(tokenize(normalizeString(input))))
// );
// console.log(result);

/**************************************/

/**
 * CONS: readability, fluency, and applicability
 */

/**************************************/
// input
// |> normalizeString(%)
// |> tokenize(%)
// |> toNumber(%)
// |> filterEven(%)
// |> joinNumbers(%)
// |> console.log(%);

console.log("**************************************");
