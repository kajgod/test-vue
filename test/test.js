const assert = require("assert");

import { textLength, validateEmail, validateText } from "../shared/validation";

describe("Checking validation model", function() {
  //#region textLength
  describe("#textLength()", function() {
    it("should be 0 when no value", function() {
      assert.strictEqual(textLength(), 0);
    });
    it("should be 0 when empty string", function() {
      assert.strictEqual(textLength(""), 0);
    });
    it('should be 20 when "opšđćčlk j _:,,q234;"  ', function() {
      assert.strictEqual(textLength("opšđćčlk j _:,,q234;"), 20);
    });
    it('should be 5 when "😀😁😂😃😄"', function() {
      assert.strictEqual(textLength("😀😁😂😃😄"), 5);
    });
    it("should be 33 with all kinds of characters in template string", function() {
      assert.strictEqual(
        textLength(`1234567890
qwertzuiop

😀😁😂😃😄😀😁😂😃😄`),
        33
      );
    });
  });
  //#endregion
  //#region validateEmail
  describe("#validateEmail()", function() {
    it("should be false when no value", function() {
      assert.strictEqual(validateEmail(), false);
    });
    it("should be false when empty string", function() {
      assert.strictEqual(validateEmail(""), false);
    });
    it("should be true when kajgod@gmail.com", function() {
      assert.strictEqual(validateEmail("kajgod@gmail.com"), true);
    });
    it("should be true when ------@example.com", function() {
      assert.strictEqual(validateEmail("------@example.com"), true);
    });
    it("should be true when very.unusual.”@”.unusual.com@example.com", function() {
      assert.strictEqual(
        validateEmail("very.unusual.”@”.unusual.com@example.com"),
        true
      );
    });
    it("should be true when very.unusual.”@”.unusual.com@example.com", function() {
      assert.strictEqual(
        validateEmail("very.unusual.”@”.unusual.com@example.com"),
        true
      );
    });
    it("should be false when kajgod@gmail.", function() {
      assert.strictEqual(validateEmail("kajgod@gmail."), false);
    });
    it("should be false when kajgod@@gmail.com", function() {
      assert.strictEqual(validateEmail("kajgod@@gmail.com"), false);
    });
  });
  //#endregion
  //#region validateText
  describe("#validateText()", function() {
    it("should be false when no value", function() {
      assert.strictEqual(validateText(), false);
    });
    it("should be false when empty string", function() {
      assert.strictEqual(validateText(""), false);
    });
    it("should be false when ”abc”", function() {
      assert.strictEqual(validateText("abc"), false);
    });
    it("should be false when ”qwertzuiopšđžćčlkjhgfdsayxcvb😄”", function() {
      assert.strictEqual(validateText("qwertzuiopšđžćčlkjhgfdsayxcvb😄"), false);
    });
    it("should be true when ”qwertzuiopšđžćčlkjhgfdsayxcvbn1”", function() {
      assert.strictEqual(validateText("qwertzuiopšđžćčlkjhgfdsayxcvbn1"), true);
    });
    it("should be true when ”qwertzuiopšđžćčlkjhgfdsayxcvbn1234567890”", function() {
      assert.strictEqual(validateText("qwertzuiopšđžćčlkjhgfdsayxcvbn1234567890"), true);
    });
  });
  //#endregion
});
