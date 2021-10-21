const rect = {
    id: '12',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
const rect2 = {
    id: '123',
    size: {
        width: 10,
        height: 5
    },
};
rect2.color = 'black';
// rect2.id = "1254"
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: '1235',
    size: {
        width: 20,
        height: 30,
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
