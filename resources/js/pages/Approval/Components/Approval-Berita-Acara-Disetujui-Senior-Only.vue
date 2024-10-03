<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <ul class="timeline">
                    <li class="failed">
                        <b>Ditolak Oleh (Manajer ybs) pada {{ timeNow }}</b>
                        <br><small>Catatan : Ada yang belum sesuai</small>
                    </li>
                    <li>
                        <b>Menunggu persetujuan (Senior ybs)</b>
                    </li>
                </ul>
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
