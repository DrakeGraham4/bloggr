<template>
    <!-- <div class="blog row ms-1 mt-2"> -->
        <div
        class="blog row ms-1 mt-2" 
        data-bs-toggle="modal" 
        data-bs-target="#modalId"
        @click="setActive">
      Launch
    </div>
        <div class="col-6 rounded shadow p-2 mt-2">
            {{blog.title}}
        </div>

    <!-- </div> -->
</template>


<script>
export default {
    props: {
        blog: {
            type: Object,
            required: true
        },
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

.blog {
  min-height: 20vh;
  transition: all 0.12s ease;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.blog:hover {
  transform: scale(1.05);
  outline: 1px solid var(--bs-light);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
}

</style>