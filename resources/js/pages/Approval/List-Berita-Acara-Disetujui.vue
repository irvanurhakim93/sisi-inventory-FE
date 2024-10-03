<template>
    <div class="table-responsive">
    <table id="kt_datatable_zero_configuration" class="table table-row-bordered gy-5">
        <thead style="background-color: #EC221F;">
            <tr class="fw-semibold fs-6 text-muted">
                <th style="color: white;">No</th>
                <th style="color: white;">Berita Acara</th>
                <th style="color: white;" colspan="2">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.item }}</td>
                <td>
                    <a href="/approval/bucket-approval/approval-berita-acara" class="btn btn-danger"><img src="/assets/media/logos/dl-pdf.png" alt=""></a>
                    &nbsp;
                    <a href="" class="btn btn" style="background-color: #14AE5C;"><img src="/assets/media/logos/dl-excel.png" alt=""></a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import $ from 'jquery';

const items = ref([
{ item: 'Tiger Nixon', kode: 'System Architect', desc: 'Edinburgh', dokumentasi: '2011/04/25' },
{ item: 'Garrett Winters', kode: 'Accountant', desc: 'Tokyo', dokumentasi: '2011/07/25' },
{ item: 'Ashton Cox', kode: 'Junior Technical Author', desc: 'San Francisco', dokumentasi: '2009/01/12' },
]);

const getBadgeClass = (name) => {
switch (name) {
    case 'Tiger Nixon':
        return 'badge bg-success'; // Bootstrap success badge
    case 'Garrett Winters':
        return 'badge bg-warning'; // Bootstrap warning badge
    case 'Ashton Cox':
        return 'badge bg-danger'; // Bootstrap danger badge
    default:
        return 'badge bg-secondary'; // Default badge
}
};

const getBadgeText = (name) => {
switch (name) {
    case 'Tiger Nixon':
        return 'Disetujui';
    case 'Garrett Winters':
        return 'Pending';
    case 'Ashton Cox':
        return 'Ditolak';
    default:
        return 'Unknown';
}
};

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

<style>
.badge {
padding: 0.5em 0.75em;
border-radius: 0.5rem;
color: white;
}
</style>
