"use strict";

function debugLog(str) {
  console.log(`${new Date().toISOString()} [DEBUG] ${str}`);
}

module.exports = debugLog;
