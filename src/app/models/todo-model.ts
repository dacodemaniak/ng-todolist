import { TodoInterface } from './todo-interface';

export class TodoModel implements TodoInterface {
    public id?: number = 0;
    public title: string = '';
    public dateDebut: Date = null;
    public priorite: number = 1;

    public deserialize(data: any): TodoInterface {
        for(const property in data) {
            if (this.hasOwnProperty(property)) {
                if (property === 'dateDebut') {
                    this[property] = new Date(data[property]);
                } else {
                  this[property] = data[property];  
                }
            }
        }
        return this;
    }
}
