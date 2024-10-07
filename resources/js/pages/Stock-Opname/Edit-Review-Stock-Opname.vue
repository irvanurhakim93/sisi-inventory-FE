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
                    <img src="/assets/media/logos/information-3.png" alt="" srcset=""><b>Informasi</b>
                    <br>
                    <p style="margin-left: 28px;">Apakah anda yakin?
                        Data yang sudah submit tidak bisa diubah kembali</p>
                </div>
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tidak</button>
                    <button type="button" class="btn btn-dark">Ya</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" tabindex="-1" id="draft_modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-primary">
                    <img src="/assets/media/logos/information-3.png" alt="" srcset=""><b>Informasi</b>
                    <br>
                    <p style="margin-left: 28px;">Apakah anda yakin?
                        Data akan menjadi draft dan disimpan,menunggu tindak selanjutnya</p>
                </div>
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tidak</button>
                    <button type="button" class="btn btn-dark">Ya</button>
                </div>
            </div>
        </div>
    </div>
    
    </template>
    
    