import axios from 'axios';

//TODO: move to .json, load with axios
import {PersonModel} from "../models/person.model";

export class PeopleService {
    constructor() {
        throw Error('Do not instantiate');
    }

    static getPeople() {

        return axios.get('/data/people.json').then(({data})=>{
            return <PersonModel[]> data
        });
    }
}


