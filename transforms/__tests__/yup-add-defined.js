jest.autoMockOff();
const defineTest = require("jscodeshift/dist/testUtils").defineTest;
defineTest(__dirname, "yup-add-defined");
