//1: Hello world
let text: string = 'Hello world';
console.log(text);

//2: OOP
interface IShape {
    caculateArea(): number;
    caculatePremeter(): number;
    resize(): void;
    sumEdge(edge1: number, edge2: number): number;
    sumEdge(edge1: number, edge2: number, edge3: number): number;
};

abstract class Shape implements IShape {
    protected name: string;
    protected color: string;

    constructor(name: string, color: string) {        
        this.name = name;
        this.color = color;
    };

    //getter
    public getShapeInformation(): string {
        return `Name is ${this.name} and color is ${this.color}`
    };
    
    //setter
    public setShapeInformation(name?: string, color?: string) {
        if (name !== undefined) {
            this.name = name;
        }
        if (color != undefined) {
            this.color = color;
        }
    };

    abstract resize(): void;

    abstract caculateArea(): number;

    abstract caculatePremeter(): number;

    // overloading
    public sumEdge(edge1: number, edge2: number): number;
    public sumEdge(edge1: number, edge2: number, edge3?: number): number;
    public sumEdge (edge1: number, edge2: number, edge3?: number): number {
        if (!edge3) {
            return edge1 + edge2;
        };
        return edge1 + edge2 + edge3;
    };
}

class Rectangle extends Shape {
    public width: number;
    public length: number;

    public constructor(name: string, color: string, width: number, length: number) {
        super(name, color);
        this.width = width;
        this.length = length;
    }

    public caculateArea(): number {
        return this.width * this.length
    }

    public caculatePremeter(): number {
        return (this.width + this.length) * 2
    }

    public resize(width?: number, length?: number): void {
        if (width) {
            this.width = width
        }
        if (length) {
            this.length = length
        }
    }
}

class Square extends Rectangle {
    public constructor(name: string, color: string, width: number, length: number) {
        super(name, color, width, length)   
    }
}

class Circle extends Shape {
    public radius: number;
    
    public constructor(name: string, color: string, radius: number) {
        super(name, color);
        this.radius = radius;
    };

    public caculateArea(): number {      
        return Math.PI*Math.pow(this.radius, 2);
    };

    public caculatePremeter(): number {
        return 2 * Math.PI * this.radius;
    };

    public resize(radius?: number): void {
        if (radius) {
            this.radius = radius
        }
    };
}

const rectangle = new Rectangle('RectangleA', 'Green', 5, 6);
const circle = new Circle('CircleB', 'Red', 5);
const square = new Square('SquareC', 'Orange', 5, 5);
