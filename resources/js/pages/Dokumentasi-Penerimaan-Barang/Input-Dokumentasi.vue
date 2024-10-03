<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Alert-->
<div class="alert alert-secondary d-flex align-items-center p-5">
    <!--begin::Icon-->
    <i class="ki-duotone ki-shield-tick fs-2hx text-success me-4"><span class="path1"></span><span class="path2"></span></i>
    <!--end::Icon-->

    <!--begin::Wrapper-->
    <div class="d-flex flex-column">
        <!--begin::Title-->
        <h4 class="mb-1 text-dark">Input Dokumentasi Penerimaan Barang</h4>
        <!--end::Title-->

        <!--begin::Content-->
        <span></span>
        <!--end::Content-->
    </div>
    <!--end::Wrapper-->
</div>

<!--end::Alert-->
        <!--Card-->
        <div class="card card-flush shadow-sm">
    <div class="card-header">
        <div class="d-flex align-items-center justify-content-between w-100">
            <a href="/dokumentasi-penerimaan-barang/input/op/pilih-foto" class="btn btn" style="z-index: 1; position: relative; background-color: #000; color: white;">
               <img src="/assets/media/logos/camera.png" alt=""> Dokumentasi OP
            </a>
            <input type="text" class="form-control" placeholder="cari.." style="max-width: 120px; z-index: 0; position: relative;">
        </div>
    </div>
    <div class="mb-3" style="margin-left: 35px;">
        <h2>NO OP : 111</h2>
        <h2>Nama Vendor : PT Sejahtera Rakyat</h2>
    </div>

    <!-- Data Cards -->
    <div v-for="(item, index) in items" :key="index" class="card shadow-sm mb-3" style="border: 2px; height: 200px;">
        <div class="card-header">
            <h3 class="card-title">{{ item.item }}</h3>
            <div class="card-toolbar">
                <a href="/dokumentasi-penerimaan-barang/input/open-camera-material" class="btn btn" style="background-color: #1E906E; color: white;"><img src="/assets/media/logos/camera.png" alt=""></a>
            </div>
        </div>
        <div class="card-body">
            <p>Kode: {{ item.kode }}</p>
            <p>Deskripsi: {{ item.desc }}</p>
        </div>
    </div>
    <!-- End Data Cards -->

</div>

                


    
       <!--Akhir dari div kt_content--> 
    </div>


</template>

<style lang="css" scoped>
#kt_datatable_fixed_columns thead {
 background-color: black !important; /* Use !important if needed */
}

#kt_datatable_fixed_columns th {
 background-color: white !important; /* Optional: only if you want to keep this */
}
</style>

<script setup>
import { onMounted,ref } from 'vue';
import $ from 'jquery';
import LihatFotoAfterUpload from './Input-Dokumentasi-After.vue';

const items = ref([
 { item: 'Tiger Nixon', kode: 'System Architect', desc: 'Edinburgh', dokumentasi: '2011/04/25' },
 { item: 'Garrett Winters', kode: 'Accountant', desc: 'Tokyo', dokumentasi: '2011/07/25' },
 { item: 'Ashton Cox', kode: 'Junior Technical Author', desc: 'San Francisco', dokumentasi: '2009/01/12' },
]);



onMounted(() => {
 $("#kt_datatable_zero_configuration").DataTable({
     paging: true,
     searching: true,
     lengthChange: true,  // Allow changing number of entries per page
     pageLength: 10,      // Default entries per page
     language: {
         search: "Cari:",
         paginate: {
             previous: "Sebelumnya",
             next: "Berikutnya"
         }
     }
 });
});
</script>