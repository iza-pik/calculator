import { handleKeyPress } from "./";

class testValues(){
    constructor(value){
        this.value = value
    }
    get value(){
        return this.value
    }
    set value(value){
        this.value = value
    }
}

describe("handleKeyPress should", () => {
  it("exist", () => {
    expect(handleKeyPress).toBeDefined();
  });
//   it("should display a value", () => {
//       const result = handleKeyPress()
//   })
});
