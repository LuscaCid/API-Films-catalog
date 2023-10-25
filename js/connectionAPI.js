export class Connection {

    async create(endpoint){
        const element = await fetch(endpoint)
        .then(data => data.json())
        return element
    }

}