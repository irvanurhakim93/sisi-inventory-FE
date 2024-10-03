<script setup>
import ApprovalBeritaAcaraDisetujuiSemua from "./Components/Approval-Berita-Acara-Disetujui-Semua.vue";
import ApprovalBeritaAcaraDitolakSemua from "./Components/Approval-Berita-Acara-Ditolak-Semua.vue";
import ApprovalBeritaAcaraDisetujuiManagerOnly from "./Components/Approval-Berita-Acara-Disetujui-Manager-Only.vue";
import ApprovalBeritaAcaraDisetujuiSeniorOnly from "./Components/Approval-Berita-Acara-Disetujui-Senior-Only.vue"
</script>

<template>
    <div class="card">
        <div class="card-header">
            <p class="alert alert-secondary mb-0">Approval Berita Acara</p>
        </div>
        <div class="card-body">
            <h3 class="card-title">Judul - Tanggal</h3>
            <p class="text-muted">Periode Report Stock Opname</p>

            <div class="d-flex align-items-center mb-3">
                <div class="me-3">
                    <label for="start-date">Start Date</label>
                    <input type="date" id="start-date" class="form-control" style="width: 130px;">
                </div>
                <span>-</span>
                <div class="ms-3">
                    <label for="end-date">End Date</label>
                    <input type="date" id="end-date" class="form-control" style="width: 130px;">
                </div>
            </div>

            <b>Silahkan download report stock opname di bawah ini!</b>
            <br>
            <button class="btn btn mb-3" style="background-color: #EC221F; color: white;">
                <img src="/assets/media/logos/dl-pdf.png" alt="Download"> Dokumen Permohonan Berita Acara
            </button>
            <div class="separator my-10"></div>
            <div class="d-flex align-items-center mb-3">
                <button class="btn btn-primary" style="width: 50px;">
                    <img src="/assets/media/logos/edit-user.png" alt="Edit">
                </button>
                <small class="ms-2"><b>Dibuat oleh Budi Santoso pada {{ timeNow }}</b></small>
            </div>
            <label for="">Catatan</label>
            <textarea name="" id="" class="form-control"></textarea>
            <div class="container">
                <br>
                <button class="btn btn" style="background-color: #EC221F; color: white;">Tolak</button>
                <button class="btn btn" style="background-color: #14AE5C; color: white; margin-left: 89px;">Setuju</button>
            </div>
        </div>
        
    </div>
</template>

<style lang="css" scoped>
.card {
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
}

.card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    padding: 1rem;
}

.card-title {
    font-weight: bold;
}

ul.timeline {
    list-style-type: none;
    position: relative;
}

ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 80%;
    z-index: 400;
}

ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}

ul.timeline > li:before {
    content: ' ';
    background: white;
    position: absolute;
    border-radius: 50%;
    background-image: url('/assets/media/logos/clock-timeline.png');
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}

ul.timeline > li.completed:before {
    background-color: #14AE5C;
    background-image: url('/assets/media/logos/check.png');
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
}

ul.timeline > li.failed:before {
    background-color: #EC221F;
    background-image: url('/assets/media/logos/cross.png');
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
}

ul.timeline > li.completed, 
ul.timeline > li.failed {
    color: black;
}
</style>

<script>
import moment from "moment";

export default {
    name: "Dashboard",
    data() {
        return {
            name: null,
            timeNow: this.getFormattedTimeNow()
        }
    },
    created() {
        if (window.Laravel.user) {
            this.name = window.Laravel.user.name;
        }
    },
    mounted() {
        this.$root.menuActive = 'Dashboard';
    },
    methods: {
        getFormattedTimeNow() {
            moment.locale('id');
            return moment().format("dddd, DD MMMM YYYY, HH:mm ");
        }
    }
}
</script>
