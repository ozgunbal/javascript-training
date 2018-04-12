// Load dependent module
const dependency = require('./module-closure-2');

// Find and assign module's needed method
const dependentFunc = dependency.moduleFunc;

dependentFunc();