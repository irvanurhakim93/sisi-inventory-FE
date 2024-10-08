<template>
    <vue-office-excel
        v-if="excel"
        :src="excel"
        style="height: 100vh;"
        @rendered="renderedHandler"
        @error="errorHandler"
    />
</template>

<script>
import VueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'

export default {
    components: {
        VueOfficeExcel
    },
    data() {
        return {
            excel: '/assets/media/logos/task_inventory.xlsx'
        }
    },
    methods: {
        renderedHandler() {
            console.log("Rendering Done")
        },
        errorHandler() {
            console.log("Fail Rendering")
        }
    }
}



</script>