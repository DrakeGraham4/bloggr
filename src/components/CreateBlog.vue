<template>
<form 
@submit.prevent="createBlog"
class="row bg-grey justify-content-center">
<div class="col-md-4">
    <label for="" class="form-label">Blog Title</label>
    <input type="text" class="form-control" required>
</div>
<div class="col-md-4">
    <label for="" class="form-label">Blog Author</label>
    <input type="text" class="form-control" required>
</div>
<div class="col-md-4">
    <label for="" class="form-label">Blog Body</label>
    <input type="text" class="form-control" required>
</div>
<div class="col-12 d-flex justify-content-end">
    <button class="btn btn-primary">Create</button>
</div>

</form>
</template>


<script>
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop'
export default {
    setup(){
        return {
            async createBlog(){
                try {
                    await blogsService.create();
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>