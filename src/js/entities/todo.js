import { stat } from "fs";

var id= 1;
export default class todo{
    constructor(text,status){
        this.status=status;    
        this.text=text;
        this.id= id;
        id++;
    }
    setData(status,text){
        this.status=status;
        this.text = text;
    }
    
}