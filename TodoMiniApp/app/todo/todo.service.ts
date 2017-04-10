import {Injectable} from "@angular/core";
/**
 * Created by GilS on 31-Mar-17.
 */

@Injectable()
export class TodoService {
    counter:number = 0
    items:any[] = []

    addItem(str:string) {
        this.items.push({
            id: this.counter++,
            text: str
        })

    }

    removeItem(id:number) {
        this.items = this.items.filter((item) => {
            if (item.id !== id) {
                return item
            }})
    }

    clear() {
        while (this.items.length) {
            this.removeItem(0)
        }
    }

    getItems():any[] {
        return this.items
    }

    getItem(id:number) {
        let results = this.items.filter((item) => {
            if (item.id === id) {
                return item
            }
        })
        let result = results.length > 0 ? results[0] : null

        return result
    }

    toString():string {
        return "Items"
    }
}