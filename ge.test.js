global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const { JSDOM } = require("jsdom");
global.chrome = {
    runtime: {
        onMessage: {
            addListener: jest.fn(),
        },
    },
  };
  const { getElements, shouldBeTranslated } = require("./content");
  describe("getElements", () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    // JSDOMを使用して、テスト用のDOMを作成
    dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p><input type="text" value="input text"><script>console.log('test');</script>`);
    window = dom.window;
    document = window.document;
  });

  it("should return only the elements that should be translated", () => {
    const elements = getElements(document.body);

    // 全ての要素が翻訳対象であることを確認
    for (const element of elements) {
      expect(shouldBeTranslated(element)).toBe(true);
    }

    // 翻訳対象でない要素が含まれていないことを確認
    expect(elements).not.toContain(document.querySelector("input"));
    expect(elements).not.toContain(document.querySelector("script"));
  });
});