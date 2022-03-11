<template>
    <div
    class="blog row ms-1 " 
    data-bs-toggle="modal" 
    data-bs-target="#blog-modal"
    @click="setActive">
        <div class=" rounded shadow p-2 mt-2">
            {{blog.title}} | {{blog.creator.name}}
        </div>
    </div>
</template>


<script>
import { blogsService } from '../services/BlogsService'

export default {
    props: {
        blog: {
            type: Object,
            required: true
        },
    },
    setup(props){
        return {
            setActive(){
                blogsService.setActive(props.blog)
            }
        }
    }
}
</script>


<style lang="scss" scoped>

.blog {
  min-height: 10vh;
  transition: all 0.12s ease;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.blog:hover {
  transform: scale(1.05);
  outline: 1px solid var(--bs-light);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
}

</style>