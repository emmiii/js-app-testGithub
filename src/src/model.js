const baseUrl = 'https://api.github.com'

export default class Model {

    constructor() {
        console.log('model created')
    }

    async getGithubUser(username) {
        const respons = await fetch(`${baseUrl}/users/${username}`)
        const user = await respons.json()
        console.log(respons.headers.get('x-ratelimit-remaining'))
        return user

    }

    async getUserGithubRepos(username) {
        const respons = await fetch(`${baseUrl}/users/${username}/repos`)
        const user = await respons.json()
        console.log(respons.headers.get('x-ratelimit-remaining'))
        return user

    }

}