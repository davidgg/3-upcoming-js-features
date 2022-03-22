/**
 * SHADOW REALM
 *
 * Stage: 3/4 (Candidate)
 *
 * Process: https://tc39.es/process-document/
 * https://github.com/tc39/proposals
 *
 * spec: https://github.com/tc39/proposal-shadowrealm
 * https://dev.to/smpnjn/future-javascript-shadowrealms-20mg
 */

/**
 * Fixes the global context (globalThis cross-environment, window in browsers, global in Node)
 *
 * The ShadowRealms proposal provides a new mechanism to execute JavaScript code
 * within the context of a new global object and set of JavaScript built-ins.
 *
 * - New Environment with a different global object.
 * - Safe environment for running code, isolated.
 *
 */

/**************************************/
/**
 * Creating a shadowRealm, creating a new context
 */
const newRealm = new ShadowRealm();

const { tokenize } = await myRealm.importValue("./scripts.js", "tokenize");

const words = tokenize("1 2 3");

/**
 * Evaluating code in the realm
 */
const words = newRealm.evaluate('tokenize("1 2 3");');

/**
 *
 */
window.myVariable = "hello";

newRealm.importValue("someFile.js", "createFunction").then((createFunction) => {
  // Do something with createFunction();
  console.log(window.myVariable); // Returns undefined
});


/**
 * Sample applications:
 *
 *  - Web-based IDEs or any kind of 3rd party code execution using same origin evaluation policies.
 *  - DOM Virtualization (e.g.: Google AMP)
 *  - Test frameworks and reporters (in-browser tests, but also in node using vm).
 *  - testing/mocking (e.g.: jsdom)
 *  - Most plugin mechanism for the web (e.g., spreadsheet functions).
 *  - Sandboxing (e.g.: Oasis Project)
 *  - Server side rendering (to avoid collision and data leakage)
 *  - in-browser code editors
 *  - in-browser transpilation
 */
