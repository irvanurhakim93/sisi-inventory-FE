<template>
    <span class="alert alert-secondary">Bucket Approval</span>
    <input type="text" name="" class="form-control" placeholder="Cari..." id="">
    <br>
    <!-- Card Layout -->
    <div class="row">
        <br>
        <br>
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
        <a href="/approval/bucket-approval/approval-berita-acara" class="btn btn-dark">
                        <img src="/assets/media/logos/check-circled.png" alt=""> &nbsp;&nbsp;Approval
                    </a>
    </div>
</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const items = ref([
    { item: 'Judul Request 1', kode: 'User (Pengaju)', desc: 'Desc Material'},
    { item: 'Judul Request 2', kode: 'User (Pengaju)', desc: 'Desc Material'},
    { item: 'Judul Request 3', kode: 'User (Pengaju)', desc: 'Desc Material'},
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
