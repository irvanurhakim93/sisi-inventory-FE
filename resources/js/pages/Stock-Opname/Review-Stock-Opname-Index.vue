<template>
    <input type="text" name="" class="form-control" placeholder="Cari" id="">
    <br>
    <div class="table-responsive">
        <div v-for="(item, index) in items" :key="index" class="card shadow-sm mb-3" style="border: 2px; height: 200px;">
        <div class="card-header">
            <h3 class="card-title">{{ item.item }}</h3>
            <div class="card-toolbar">
                <a href="/stock-opname/review-stock-opname/edit" class="btn btn-primary"><svg fill="#FFF" width="19" height="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"/></svg></a>
            </div>
        </div>
        <div class="card-body">
            <p>Kode: {{ item.kode }}</p>
            <p>Deskripsi: {{ item.desc }}</p>
        </div>
    </div>
    <!-- Akhir dari di classtable responsive-->
    </div>
<a href="/stock-opname/scan-barcode" class="btn btn-dark"><img src="/assets/media/logos/mdi-barcode-scan.png" alt="">&nbsp;&nbsp;&nbsp;Scan Barcode</a>

</template>

<script setup>
import { onMounted,ref } from 'vue';
import $ from 'jquery';

const items = ref([
    { item: 'Item OP', kode: 'Kode Material', desc: 'Desc Material'},
    { item: 'Item OP', kode: 'Kode Material', desc: 'Desc Material'},
    { item: 'Item OP', kode: 'Kode Material', desc: 'Desc Material'},
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