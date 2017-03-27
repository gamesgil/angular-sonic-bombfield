export default class Utils {
    static generateRandomNumbers(range:Array<any>, num:number, nonRecurring:boolean = true):Array<any> {
        let result:Array<number> = new Array();

        for (let i = 0; i < num; i++) {
            let rand:number = Math.floor(Math.random() * range.length);
            result.push(range[rand]);

            if (nonRecurring) {
                range.splice(rand, 1);
            }
        }

        return result;
    }

    static idxToGrid(idx:number, gridWidth:number):{x:number, y:number} {
        let result:{x:number, y:number} = {x: idx % gridWidth, y: Math.floor(idx / gridWidth)};

        return result;
    }

    static generateRange(start:number, end:number):Array<number> {
        let result:Array<number> = [];

        for (let i = start; i <= end; i++) {
            result.push(i);
        }

        return result;
    }
}
