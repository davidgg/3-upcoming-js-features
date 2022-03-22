module.exports = {
  presets: ["@babel/env"],
  plugins: [
    [
      "@babel/plugin-proposal-pipeline-operator",
      {
        proposal: "hack",
        topicToken: "%",
      },
    ],
    [
      "@babel/plugin-proposal-record-and-tuple",
      { syntaxType: "hash", importPolyfill: true },
    ],
  ],
};
