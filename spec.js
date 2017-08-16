import component from './component.html'

let testElem;

beforeEach(() => {
    testElem = document.createElement('test');
    document.body.appendChild(testElem);
});

function createComponent(data) {
    return new component({
        target: document.querySelector('test'),
        data: Object.assign({}, data),
    });
}

it("should initialize the count when no data is given", () => {
    let test = createComponent();
    let count = test.get('count');
    expect(count).toBe(0);
});

it("should start the count with given data", () => {
    let test = createComponent({count:5});
    let count = test.get('count');
    expect(count).toBe(5);
});
