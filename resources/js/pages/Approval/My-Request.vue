<template>
    <span class="alert alert-secondary">My Request</span>

    <!-- Card Layout -->
    <div class="row">
        <div class="col-md-4 mb-4" v-for="(item, index) in items" :key="index">
            <div class="card card-flush shadow-sm">
    <div class="card-header">
        <h3 class="card-title">{{ item.item }}</h3>
        <div class="card-toolbar">
            <span :class="getBadgeClass(item.item)">
                            {{ getBadgeText(item.item) }}
                </span>
        </div>
    </div>
    <div class="card-body py-5">
        {{ item.kode }}
    </div>
    <div class="card-footer" style="align-self: center;">
        <a href="/approval/my-request/details" class="btn btn-dark">
                        <svg fill="#fff" style="width: 18px; height: 18px;" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-info">
                            <path d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/>
                        </svg>&nbsp;&nbsp;Lihat Request
                    </a>
    </div>
</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const items = ref([
    { item: 'Judul Request 1', kode: 'Tanggal Request', desc: 'Desc Material'},
    { item: 'Judul Request 2', kode: 'Tanggal Request', desc: 'Desc Material'},
    { item: 'Judul Request 3', kode: 'Tanggal Request', desc: 'Desc Material'},
]);

const getBadgeClass = (name) => {
    switch (name) {
        case 'Judul Request 1':
            return 'badge bg-success'; // Bootstrap success badge
        case 'Judul Request 2':
            return 'badge bg-warning'; // Bootstrap warning badge
        case 'Judul Request 3':
            return 'badge bg-danger'; // Bootstrap danger badge
        default:
            return 'badge bg-secondary'; // Default badge
    }
};

const getBadgeText = (name) => {
    switch (name) {
        case 'Judul Request 1':
            return 'Disetujui';
        case 'Judul Request 2':
            return 'Pending';
        case 'Judul Request 3':
            return 'Ditolak';
        default:
            return 'Unknown';
    }
};

onMounted(() => {
    // You can remove this if you are not using DataTables with cards
    // This part was specifically for your original table implementation
});
</script>

<style>
.badge {
    padding: 0.5em 0.75em;
    border-radius: 0.5rem;
    color: white;
}
.card {
    border: 1px solid #ccc;
}
.card-header {
    font-weight: bold;
}
</style>
