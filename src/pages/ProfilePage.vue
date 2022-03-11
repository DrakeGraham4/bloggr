<template>
    <div class="profile container-fluid text-center">
        <div class="row bg-primary">
            <div class="col-4 bg-primary">
                <img class="profile-img rounded-circle elevation-4"
                 :src="profile.picture" alt=""/>
                 <h1>{{profile.name}}</h1>
                 <p>
                     {{profile.email}}
                     <i v-if="account.id == profile.id"
                     data-bs-toggle="modal"
                     data-bs-target="#edit-profile"
                     class="mdi mdi-pencil selectable" ></i>
                 </p>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>