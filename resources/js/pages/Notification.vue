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
            <!-- Card 1 -->
            <div class="card-body py-5">
                <div class="card card-flush shadow-sm" style="height: 100px; background-color: #FEE9E7;" id="card1">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="card-title">Persetujuan Berita Acara Disetujui</h3>
                        <div class="card-toolbar">
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-active-color-primary" 
                               @click="removeCard('card1')" 
                               data-bs-toggle="tooltip" 
                               title="Hapus Notifikasi">
                                <i class="ki-duotone ki-cross fs-1" style="color: black;">&times;</i>
                            </a>
                        </div>
                    </div>
                    <p style="margin-left: 25px;">19 Sept 2024</p>
                </div>
            </div>
            <!-- End -->

            <!-- Card 2 -->
            <div class="card-body py-5">
                <div class="card card-flush shadow-sm" style="height: 100px;" id="card2">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="card-title">Persetujuan Berita Acara Disetujui</h3>
                        <div class="card-toolbar">
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-active-color-primary" 
                               @click="removeCard('card2')" 
                               data-bs-toggle="tooltip" 
                               title="Hapus Notifikasi">
                               <i class="ki-duotone ki-cross fs-1" style="color: black;">&times;</i>
                            </a>
                        </div>
                    </div>
                    <p style="margin-left: 25px;">19 Sept 2024</p>
                </div>
            </div>
            <!-- End of Card 2 -->

            <!-- Card 3 -->
            <div class="card-body py-5">
                <div class="card card-flush shadow-sm" style="height: 100px; background-color: #FEE9E7;" id="card3">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="card-title">Persetujuan Berita Acara Disetujui</h3>
                        <div class="card-toolbar">
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-active-color-primary" 
                               @click="removeCard('card3')" 
                               data-bs-toggle="tooltip" 
                               title="Hapus Notifikasi">
                               <i class="ki-duotone ki-cross fs-1" style="color: black;">&times;</i>
                            </a>
                        </div>
                    </div>
                    <p style="margin-left: 25px;">19 Sept 2024</p>
                </div>
            </div>
            <!-- End -->
        </div>
    </div>
</template>

<script setup>
import $ from 'jquery';

function removeCard(cardId) {
    // Use jQuery to remove the card
    $('#' + cardId).closest('.card-body').remove();
}
</script>
