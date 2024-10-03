<template>
    <div class="card">
        <div class="card-title" style="background-color: #F5F5F5; height: 35px;">
            Kode Material - Desc Material
        </div>
        <div class="card-body">
            <label for="" class="text-muted">Desc Material</label>
            <input type="text" name="" id="" class="form-control">
            <br>
            <label for="" class="text-muted">Stock Sistem</label>
            <input type="text" name="" id="" class="form-control">
            <br>
            <label for="">Stock Fisik</label>
            <input type="text" name="" id="" class="form-control">
            <small class="text-danger">Note: Stock fisik diisikan apabila jumlah ada selisih dengan stok sistem</small>
            <br>
            <label for="">Catatan</label>
            <input type="text" name="" id="" class="form-control">
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#draft_modal">Draft</button>
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                Submit
            </button>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="kt_modal_1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-primary">
                        <img src="/assets/media/logos/information-3.png" alt="" srcset="">
                        <b>Informasi</b>
                        <br>
                        <p style="margin-left: 28px;">Apakah anda yakin? Data yang sudah submit tidak bisa diubah kembali</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tidak</button>
                    <button type="button" class="btn btn-dark" id="confirmSubmit">Ya</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="draft_modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-primary">
                        <img src="/assets/media/logos/information-3.png" alt="" srcset="">
                        <b>Informasi</b>
                        <br>
                        <p style="margin-left: 28px;">Apakah anda yakin? Data akan menjadi draft dan disimpan, menunggu tindak selanjutnya</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tidak</button>
                    <button type="button" class="btn btn-dark" id="confirmDraft">Ya</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("confirmSubmit").addEventListener("click", function() {
            // Redirect to the desired page
            window.location.href = "/stock-opname/scan-barcode"; // Change this to your desired URL
        });

         document.getElementById("confirmDraft").addEventListener("click", function() {
            // Redirect or handle draft saving here
            // If you want to redirect after saving a draft
            window.location.href = "/stock-opname/review-stock-opname"; // Change this to your desired draft URL
        });

    });
</script>
