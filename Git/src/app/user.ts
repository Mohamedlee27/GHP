export class User {
    constructor (
        public login: string,
    public followers: number,
    public following: number,
    public location: string,
    public public_repos: string,
    public avatar_url: string,
    public blog: string
    ){}
}
