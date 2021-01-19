import makeRequest from './index'

//generate url of api in term of date and page
const apiGetRepositories = ({ date, page }) => makeRequest(
    `/search/repositories`,
    'get',
    {
        q: `created:>${date}`,
        sort: 'stars',
        order: 'desc',
        page: page
    }
)

export {
    apiGetRepositories
}
