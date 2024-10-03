
<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content" >
						<!--begin::Post-->
						<div class="post d-flex " id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">
								<div class="row gy-5 g-xl-8">
									<!--begin::Col-->
									<div class="col-xl-4">
										<!--begin::List Widget 2-->
										<!--end::List Widget 2-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-4">
										<!--begin::List Widget 6-->
										<div class="card-shadow-sm" style="background-color: #FFD5CF;">
											<div class="card-body">
												<div class="d-flex text-align-center justify-content-between">
													<div class="text-card">
														<b class="time-now">Hari ini, {{ timeNow }}</b>
														<h3 class="time-now">Hallo, Nama user</h3>
														<span class="time-now text-black">Programmer</span>
													</div>
													<img src="/assets/media/logos/mulyono.png" alt="">
												</div>
											</div>
										</div>
										<!--end::List Widget 6-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-4">
										<!--begin::List Widget 4-->
										<!--end::List Widget 4-->
									</div>
									<!--end::Col-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="row g-5 g-xl-8">
									<!--begin::Col-->
									<div class="col-xl-4">
										<!--begin::Mixed Widget 5-->
										<!--end::Mixed Widget 5-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-8">
										<!--begin::Tables Widget 5-->
										<!--end::Tables Widget 5-->
									</div>
									<!--end::Col-->
								</div>
								<!--end::Row-->
								<!--begin::Calendar Widget 1-->
								<!--end::Calendar Widget 1-->
								<!--begin::Modals-->
								<!--begin::Modal - New Product-->
								<!--end::Modal - New Product-->
								<!--begin::Modal - New Product-->
								<!--end::Modal - New Product-->
								<!--end::Modals-->
							</div>
							<!--end::Container-->
						</div>
						<!--end::Post-->
					</div>

					<h1 style="align-self: center;" class="bisa-bantu">Apa yang bisa kami bantu kelola hari ini ? </h1>
					<p>Manfaatkan fitur kami untuk memudahkan pencatatan stok, pembaruan data, dan pengaturan barang masuk dan keluar.</p>

					<!-- card dokumentasi-->
					<a href="/dokumentasi-penerimaan-barang"><div class="card shadow-sm" style="background-color: #D91674;">
			    		<div class="card-body">
							<div class="d-flex text-align-center justify-content-between">
								<div class="text-card">
									<b class="time-now text-white">Dokumentasi Penerimaan Barang</b>
									<br>
									<span class="time-now text-white">Catat penerimaan barang secara rinci dan lebih mudah</span>
								</div>
								<img src="assets/media/logos/penerimaan_barang.png" style="align-self: center; margin-left: 10px;" alt="">
							</div>
						</div>
					</div></a>


				
				<!-- Card Stock Bahan Baku -->
				 <a href="/stock-bahan-baku" class="">
				<div class="card card-flush shadow-sm" style="background-color: #F5333F; height: 150px; margin-top: 50px;">
					<div class="card-header d-flex justify-content-between align-items-center">
						<div class="d-flex align-items-center">
							<img src="assets/media/logos/stock-bahan-baku.png" alt="">
							<h3 style="color: white;">Stock Bahan Baku</h3>
						</div>
						<div class="card-title">
						</div>
						<div class="card-toolbar" >
						</div>
					</div>
					<div class="card-body" style="margin-left: 110px;">
						<p style="color: white;">Pantau stok bahan baku secara real-time.</p>
					</div>
				</div></a>

				<!-- Stock Opname-->

				<a href="/stock-opname">
					<div class="card card-flush shadow-sm" style="background-color: #FFB042; height: 150px; margin-top: 50px;">
					<div class="card-body">
						<div class="d-flex text-align-center justify-content-between">
							<div class="text-card">
								<b class="time-now text-black">Stock Opname</b>
								<br>
								<span class="text-now text-black">
									Catat penerimaan barang secara rinci dan lebih mudah
								</span>
							</div>
							<img src="/assets/media/logos/stock-opname.png" alt="">
						</div>
						<small style="color: black;"></small>
					</div>
				</div></a>

</template>

<style lang="css" scoped>
.bisa-bantu{

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