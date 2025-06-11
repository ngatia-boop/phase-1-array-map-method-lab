const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const specialCases = {
    "api": "API",
    "oo": "OO",
    "nan": "NaN",
    "jsonp": "JSONP",
    "stoppropagation": "StopPropagation",
    "preventdefault": "PreventDefault",
    "constructor": "Constructor" // <== make sure this is included
  };

  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        const punctuation = word.match(/[^\w]+$/); // e.g., '?'
        const baseWord = word.replace(/[^\w]+$/, ''); // strip punctuation

        const lower = baseWord.toLowerCase();
        const replacement = Object.prototype.hasOwnProperty.call(specialCases, lower)
          ? specialCases[lower]
          : baseWord.charAt(0).toUpperCase() + baseWord.slice(1).toLowerCase();

        return punctuation ? replacement + punctuation[0] : replacement;
      })
      .join(" ");
  });
}
