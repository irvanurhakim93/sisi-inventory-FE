<template>
    <!--Card 1-->
     <div class="card-container">
        <a href="/stock-opname/scan-barcode" style="color: black;">
        <div class="card card-flush shadow-sm" style="background-color: #FFEBF5;">
            <div class="card-header">
                <div class="card-title">
                    <img src="assets/media/logos/scan-barcode.png" alt="">
                </div>
                <b>Scan Barcode</b>
                <div class="card-toolbar">
        
                </div>
            </div>
            <div class="card-body py-5">
                Pindai barcode untuk input dan pelacakan barang otomatis.
            </div>
        
        </div></a>
        
        <a href="/stock-opname/review-stock-opname" style="color: black;">
        <div class="card card-flush shadow-sm" style="background-color: #FFEBF5;">
            <div class="card-header">
                <div class="card-title">
                    <img src="assets/media/logos/scan-barcode.png" alt="">
                </div>
                <b>Review Stock Opname</b>
                <div class="card-toolbar">
        
                </div>
            </div>
            <div class="card-body py-5">
                Menampilkan draft stock opname.
            </div>
        
        </div></a>
        
        <!--Card 2-->
        <a href="/cek-stock" style="color: black;">
        <div class="card card-flush shadow-sm" style="background-color: #FFEBF5;">
            <div class="card-header">
                <div class="card-title">
                    <img src="assets/media/logos/cek-stock.png" alt="">
                </div>
                <b>Cek Stock</b>
                <div class="card-toolbar">
                </div>
            </div>
            <div class="card-body py-5">
                Lihat ketersediaan stok secara cepat dan akurat.
            </div>
        </div>
        </a>
        
        
        <!--Card 3-->
        <a href="/report-stock" style="color: black;">
        <div class="card card-flush shadow-sm" style="background-color: #FFEBF5;">
            <div class="card-header">
                <div class="card-title">
                    <img src="assets/media/logos/report-stock-opname.png" alt="">
                </div>
                <b>Report Stock Opname</b>
                
            </div>
            <div class="card-body py-5">
                Laporan hasil pengecekan dan penyesuaian stok barang.
            </div>
        </div>
        </a>

        <a href="/approval" class="">
        <div class="card card-flush shadow-sm" style="background-color: #E2FDF5; color: black;">
            <div class="card-header">
                <div class="card-title">
                    <img src="assets/media/logos/approval.png" alt="">
                </div>
            </div>
            <b style="margin-left: 20px;">Approval</b>
            <div class="card-body py-5">
                Proses persetujuan untuk validasi perubahan stok.
            </div>
        </div>
        </a>

    </div>


</template>

<style lang="css" scoped>

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Space between cards */
    max-width: 700px; /* Adjust as necessary */
    gap: 12px;
    
}

.card{
    height: 186px;
    width: 168px;
}
</style>