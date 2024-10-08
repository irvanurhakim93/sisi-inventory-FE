<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Alert-->
        <div class="alert alert-secondary d-flex align-items-center p-5">
            <i class="ki-duotone ki-shield-tick fs-2hx text-success me-4">
                <span class="path1"></span><span class="path2"></span>
            </i>
            <div class="d-flex flex-column">
                <h4 class="mb-1 text-dark">Notifikasi</h4>
                <span></span>
            </div>
        </div>
        <!--end::Alert-->

        <div class="card-container">
            <div v-for="(card, index) in cards" :key="card.id" class="card shadow-sm" style="background-color: #ffffff;">
                <div class="card-body">
                    <div class="d-flex text-align-center justify-content-between">
                        <div class="text-card">
                            <b class="time-now text-dark">{{ card.title }}</b>
                            <br>
                            <p style="color: black;">{{ card.time }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-active-color-primary" 
                           @click="removeCard(index)" 
                           data-bs-toggle="tooltip" 
                           title="Hapus Notifikasi">
                            <i class="ki-duotone ki-cross fs-1" style="color: black;">&times;</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "Notification",
    data() {
        return {
            cards: [
                { id: 'card1', title: 'Dokumentasi Penerimaan Barang', time: this.getFormattedTimeNow() },
                // tambahkan kartu selama dibutuhkan
            ]
        };
    },
    created() {
        if (window.Laravel.user) {
            this.name = window.Laravel.user.name;
        }
    },
    mounted() {
        this.$root.menuActive = 'Notification';
    },
    methods: {
        getFormattedTimeNow() {
            moment.locale('id');
            return moment().format("dddd, DD MMMM YYYY, HH:mm ");
        },
        removeCard(index) {
            this.cards.splice(index, 1); // Remove the card from the array
        }
    }
}
</script>
