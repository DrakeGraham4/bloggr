<template>
    <!-- Button trigger modal -->
    
    
    <!-- Modal -->
    <div class="modal fade"
    tabindex="-1" 
    role="dialog" 
    aria-labelledby="modelTitleId" 
    aria-hidden="true">

        <div class="modal-dialog modal-lg" 
        role="document">

            <div 
            class="modal-content bg-transparent border-0">

                <div class="modal-header">
                    <h5 class="modal-title">
                        <slot name="title"></slot>
                    </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Body
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
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