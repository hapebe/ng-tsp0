export class Vector2 {
    x: number;
    y: number;

    constructor() {
        this.x = this.randn_bm();
        this.y = this.randn_bm();
    }

    distanceTo(other: Vector2) : number {
        let dx = other.x - this.x;
        let dy = other.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Standard Normal variate using Box-Muller transform.
    randn_bm() {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    }
}

export class Point2 extends Vector2 {
    id: string;

    constructor(id: string) {
        super();
        this.id = id;
    }
}

export class Line2 {
    a: Point2;
    b: Point2;

    constructor(a: Point2, b: Point2) {
        this.a = a;
        this.b = b;
    }

    length() : number {
        return this.a.distanceTo(this.b);
    }
}

export class TSPProblem {
    id: string;
    points: Vector2[];

    /**
     * construct a TSPProblem object
     * @param id identifier for this problem
     * @param n number of points in the problem
     */
    constructor(id: string, n: number) {
        this.id = id;
        this.points = [];
        for (let i=0; i<n; i++) {
            this.points.push(new Point2("p" + i));
        }
    }
}

export class TSPPath {
    private problem: TSPProblem;
    pointIdx: number[];

    constructor(problem: TSPProblem) {
        this.problem = problem;
        this.pointIdx = new Array<number>(problem.points.length);
    }
}