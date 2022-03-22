const { Tuple, Record } = require("@bloomberg/record-tuple-polyfill");

/**
 * RECORDS AND TUPLES
 * 
 * Stage: 2/4 (Draft)
 *
 * Immutable Records
 * spec: https://github.com/tc39/proposal-record-tuple
 *
 * https://dev.to/smpnjn/future-javascript-records-and-tuples-14fk
 */
/**
 * TUPLES ARE IMMUTABLE ARRAYS
 */
// const regularArray = ["this", "is", "just", "a", "regular", "array"];
// const tupleArray = #["this", "is", "just", "a", "regular", "array"];

// console.log({ regularArray });
// regularArray.push('extra'); // This is OK
// console.log({ regularArray });

// tupleArray.push('extra'); // Throws an error

// const newTuple = #[...tupleArray, "extra"];
// console.log({ newTuple });

/**************************************/
/** RECORDS ARE IMMUTABLE OBJECTS */

// const regularObject = {a: "apple", b:"orange"};
// const recordObject = #{a: "apple", b:"orange"};

// console.log({regularObject});
// regularObject.c = "banana";
// console.log({regularObject});

// recordObject.c = "banana"; //throws an error

// const newRecord = #{...recordObject, c: "banana"};
// console.log({newRecord});

/**************************************/
/** A NEW TYPE OF PRIMITIVE, THEY COMPARE VALUES NOT IDENTITY */
// console.log("\nCompare ARRAYS and TUPLES");
// const a = [1, 2];
// const b = a;
// console.log("a === b", a === b); // true
// console.log("[1,2] === [1,2]", [1, 2] === [1, 2]); // false
// console.log("#[1,2] === [1,2]", #[1, 2] === [1, 2]); // false
// console.log("#[1,2] === #[1,2]", #[1, 2] === #[1, 2]); // true
// console.log("#[1,2] === #[1,2]", #[2, 1] === #[1, 2]); // false

// console.log('\nCompare OBJECTS and RECORDS');
// console.log(
//   "{a: 1, b: [1,2]} === {a: 1, b: [1,2]}",
//   { a: 1, b: [1, 2] } === { a: 1, b: [1, 2] }
// ); // false
// console.log(
//   "#{a: 1, b: #[1,2]} === #{a: 1, b: #[1, 2]}",
//   #{ a: 1, b: #[1, 2] } === #{ a: 1, b: #[1, 2] }
// ); // true

/**************************************/
/** CONVERT REGULAR ARRAYS  */
// const regularArray = [1, 2];
// const tupleArray = Tuple.from(regularArray);
// const tupleArray2 = Tuple.from(regularArray);

// tuppleArray === tupleArray2

// console.log({regularArray, tupleArray});

/**************************************/
/** CONVERT REGULAR OBJECTS */
// const regularObject = { a: 1, b: 2 };
// const recordObject = Record(regularObject);

// console.log({regularObject, recordObject});

/**************************************/
/** REST OF METHODS APPLY */
// const tupleArray = #[1, 2];
// console.log({ tupleArray: tupleArray.map((n) => n * 2) });

// const recordObject = #{ a: 1, b: 2 };
// console.log({ keys: Object.keys(recordObject) });

// console.log("**************************************");
