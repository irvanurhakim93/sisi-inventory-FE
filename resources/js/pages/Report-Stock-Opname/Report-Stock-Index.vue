<script setup>
</script>

<template>
    <a href="#" id="card-link">
        <div class="card card-flush shadow-sm">
            <div class="card-header">
                <div class="card-title">
                    <img src="/assets/media/logos/pengajuan-berita-acara.png" alt="">&nbsp;&nbsp;&nbsp;<b>Pengajuan Berita Acara</b>
                </div>
                <div class="card-toolbar">
                    <svg fill="#000000" style="height: 28px; width: 28px; margin-left: 28px;" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
                        <g id="next">
                            <g>
                                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="card-body py-5" style="color: black;">
                Proses pembuatan berita acara yang ingin anda ajukan
            </div>
        </div>
    </a>
    
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="kt_modal_1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Pilih Periode:</h3>
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                </div>
                <div class="modal-body">
                    <label for="">Pilih Plant</label>
                    <select id="plant-select" class="form-control">
                        <option value="">-- Pilih --</option>
                        <option value="Padang">Padang</option>
                        <option value="Tonasa">Tonasa</option>
                    </select>
                    
                    <!-- Date Inputs - Hidden Initially -->
                    <div id="date-inputs" style="display: none;">
                        <label for="" class="text-muted">Date Start</label>
                        <input type="date" id="start-date" class="form-control">
                        <label for="" class="text-muted">Date End</label>
                        <input type="date" id="end-date" class="form-control">
                    </div>
                    
                    <br>
                    <button type="button" class="btn btn-dark" id="open-stacked-modal" data-bs-stacked-modal="#kt_modal_stacked_2" style="margin-left: 75px;" disabled>Permohonan Berita Acara</button>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>

    <!-- Modal 2 -->
    <div class="modal fade" tabindex="-1" id="kt_modal_stacked_2">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" style="align-self: center;">Berhasil</h3>
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                </div>
                <img src="/assets/media/logos/pengajuan-berita-acara-berhasil.png" alt="" style="align-self: center;">
                <b style="align-self: center;">Permohonan berita acara berhasil</b>
                <p class="text-muted" style="align-items: center; text-align: center;">Pengajuan anda sudah berhasil, sekarang anda dapat mengajukan dan melihat prosess pengajuan anda</p>
                <div class="modal-body">
                    <button type="button" class="btn btn-dark" style="align-self: center; width: 250px; margin-left: 75px;" data-bs-dismiss="modal">Lanjutkan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const cardLink = document.getElementById('card-link');
    const openStackedModalButton = document.getElementById('open-stacked-modal');
    const plantSelect = document.getElementById('plant-select');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const dateInputsDiv = document.getElementById('date-inputs');

    cardLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const modal = new bootstrap.Modal(document.getElementById('kt_modal_1'));
        modal.show(); // Show the first modal
    });

    // Show date inputs when a plant is selected
    plantSelect.addEventListener('change', () => {
        const isPlantSelected = plantSelect.value !== '';
        dateInputsDiv.style.display = isPlantSelected ? 'block' : 'none'; // Show/hide date inputs
        startDateInput.value = ''; // Clear previous values
        endDateInput.value = '';
        startDateInput.disabled = !isPlantSelected;
        endDateInput.disabled = !isPlantSelected;
        openStackedModalButton.disabled = !isPlantSelected; // Enable/disable the button
    });

    openStackedModalButton.addEventListener('click', () => {
        const modal1 = bootstrap.Modal.getInstance(document.getElementById('kt_modal_1'));
        if (modal1) {
            modal1.hide(); // Hide the first modal
        }
        const modal2 = new bootstrap.Modal(document.getElementById('kt_modal_stacked_2'));
        modal2.show(); // Show the second modal
    });
});
</script>
