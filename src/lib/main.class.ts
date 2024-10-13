import {EventType} from '../types'

export class ApiEvent{
    private _name: string
    private _description: string
    private _venue: string
    private _fees: number
    
    constructor(name:string="",desc:string="",venue:string="",fees:number=0){
        this._name=name
        this._description=desc
        this._venue=venue
        this._fees=fees
    }

    public get fees(): number {
        return this._fees
    }
    public set fees(value: number) {
        this._fees = value
    }

    public get venue(): string {
        return this._venue
    }
    public set venue(value: string) {
        this._venue = value
    }

    public get description(): string {
        return this._description
    }

    public set description(value: string) {
        this._description = value
    }


    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }

    public async getEventsFromDb(){

    }

    public async setEventToDb(){
        console.log(this._name)
    }
}