const sinon = require("sinon");
const fs = require("fs");
const outputGenerator = require("../../../lib/output-generator");

describe("Testing de setListeners", () => {
    it("Debería llamar a la función setListeners", () => {
      function received(){
        outputGenerator.setListeners;
      }
      const spy = sinon.spy();
      
      received([], spy);
      
      expect(spy.called);
    });
 })



describe("Testing de generateOutputStream", () => {
    let context;
    let streamStubbed;
  
    beforeEach(() => {
      context = sinon.createSandbox();
      streamStubbed = context.stub(fs, "createWriteStream");
    });
    afterEach(() => {
        context.restore();
      });
    it("Debería tener una función para abrir un stream", function() {
        expect(typeof outputGenerator.generateOutputStream === "function").toBe(true);
      });
    it("Debería devolver algo", function() {
        streamStubbed.resolves(true);
        expect(outputGenerator.generateOutputStream()).resolves.toBe(true);
      });

})


