import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService{

    async getAll(query = {}) {
        const res = await api.get('api/blogs', { params: query })
        logger.log('[blogs get all]', res.data)
        AppState.blogs = res.data
    }

}
export const blogsService = new BlogsService()