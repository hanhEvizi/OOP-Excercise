//1: Hello world
let text: string = 'Hello world';
console.log(text);

//2: OOP
interface ShapeInterface {
    getName(): string;
    getSide(): string;
    getArea(): number;
    getPremeter(): number;
    sumEdge(edge1: number, edge2: number): number;
    sumEdge(edge1: number, edge2: number, edge3: number): number;
};

class Shape implements ShapeInterface {
    private name: string;
    protected side1: number;
    protected side2: number;

    constructor(name: string, side1: number, side2: number) {
        this.name = name;
        this.side1 = side1;
        this.side2 = side2;
    };

    public getName(): string {
        return this.name
    };

    //getter
    public getSide(): string {
        return `${this.side1} & ${this.side2}`;
    };
    
    //setter
    public setName(newName: string) {
        this.name = newName;
    }

    public getArea(): number {
        return this.side1 * this.side2;
    }

    public getPremeter(): number {
        return (this.side1 + this.side2) * 2;
    }

    // overloading
    public sumEdge(edge1: number, edge2: number): number;
    public sumEdge(edge1: number, edge2: number, edge3?: number): number;
    public sumEdge (edge1: number, edge2: number, edge3?: number): number {
        if (!edge3) {
            return edge1 + edge2
        }
        return edge1 + edge2 + edge3
    };
}

class Rectangle extends Shape {
    public constructor(name: string, side1: number, side2: number) {
        super(name, side1, side2);
    };
}

class Circle extends Shape {
    public constructor(name: string, side1: number, side2: number) {
        super(name, side1, side2)
    };

    // override
    public getArea(): number {
        return Math.PI*Math.pow(this.side1, 2);
    };

    // override
    public getPremeter(): number {
        return 2 * Math.PI * this.side1;
    };
}

const rectangle = new Rectangle('Rectangle', 2, 3);
console.log('rectangle.getArea()', rectangle.getArea());
console.log('rectangle.sumEdge(30, 20, 10)', rectangle.sumEdge(30, 20, 10));
console.log('rectangle.sumEdge(30, 20)', rectangle.sumEdge(30, 20))

const circle = new Circle('Circle', 2, 0)
console.log('circle.getArea()', circle.getArea());
console.log('circle.getSide()', circle.getSide());


