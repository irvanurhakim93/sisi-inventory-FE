<script setup>
import MyRequestDitolakSenior from "./Components/My-Request-Ditolak-Senior.vue";
import MyRequestDisetjuiSemua from "./Components/My-Request-Disetujui-Semua.vue"
import MyRequestDisetujuiManager from "./Components/My-Request-Disetujui-Manager.vue";
import MyRequestDitolakManager from "./Components/My-Request-Ditolak-Manager.vue";
import MyRequestDitolakSemua from "./Components/My-Request-Ditolak-Semua.vue";
import MyRequestDisetujuiSeniorOnly from "./Components/My-Request-Disetujui-Senior-Only.vue";

</script>

<template>

<span class="alert alert-secondary">My Request</span>
    <h3>Judul - Tanggal</h3>
    <p class="text-muted">Periode Import Stock Opname</p>
    
    <div class="d-flex align-items-center">
        <div class="me-3">
            <label for="start-date">Start Date</label>
            <input type="date" id="start-date" class="form-control" style="width: 180px;">
        </div>
        <span>-</span>
        <div class="ms-3">
            <label for="end-date">End Date</label>
            <input type="date" id="end-date" class="form-control" style="width: 180px;">
        </div>
    </div>
    <br>

<div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-md-6 offset-md-3">
            <ul class="timeline">
				<li >
					<b>Menunggu Persetujuan (Manajer ybs)</b>
                    <br>
				</li>
				<li>
					<b>Menunggu Persetujuan (Senior ybs)</b>
                    <br>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<style lang="css" scoped>
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
    background-color: #14AE5C; /* Green background */
    background-image: url('/assets/media/logos/check.png'); /* Check image */
    background-size: 70%; /* Adjust size of the check image */
    background-position: center;
    background-repeat: no-repeat; /* Center the check image */

}

ul.timeline > li.failed:before {
    background-color: #EC221F; /* Green background */
    background-image: url('/assets/media/logos/cross.png'); /* Check image */
    background-size: 70%; /* Adjust size of the check image */
    background-position: center;
    background-repeat: no-repeat; /* Center the check image */

}

ul.timeline > li.failed {
    color: black; /* Keep text black */
}

ul.timeline > li.completed {
    color: black; /* Keep text black */
}



/* ul.timeline > li.completed {
    background-color: green;
    color: white;
    padding: 10px;
    border-radius: 5px;
    position: relative;
} */

/* ul.timeline > li.completed svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
} */



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
            this.name = window.Laravel.user.name
        }
    },
	mounted(){
		this.$root.menuActive = 'Dashboard'
	},
	methods: {
		getFormattedTimeNow(){
			moment.locale('id');
			return moment().format("dddd, DD MMMM YYYY, HH:mm ");
		}
	}
    // beforeRouteEnter(to, from, next) {
    //     if (!window.Laravel.isLoggedin) {
    //         window.location.href = "/";
    //     }
    //     next();
    // }
}
</script>