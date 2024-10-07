<script setup>
import { ref } from 'vue';
import PlantSelectionModal from '../Stock-Opname/Components/PlantSelectionModal.vue';
import ScanBarcodeOpenCamera from '../../Components/ScanBarcodeOpenCamera.vue';

const plants = ref([
  { id: 1, name: 'Padang' },
  { id: 2, name: 'Tonasa' },
  // Add more plants as needed
]);

const selectedPlant = ref(null);
const showModal = ref(true);

const handlePlantSelected = (plantId) => {
  selectedPlant.value = plantId;
  showModal.value = false; // Close modal after selection
};

const handleCloseModal = () => {
  showModal.value = false; // Close modal without selection
};

</script>

<template>

<PlantSelectionModal
    :isVisible="showModal"
    :plants="plants"
    @plantSelected="handlePlantSelected"
    @close="handleCloseModal"
  />

<div v-if="selectedPlant">
  <ScanBarcodeOpenCamera/>
</div>

<div class="card shadow-sm" style="width: 338px;">
        <div class="card-body center">
            <h3>Pindai Barcode</h3>
            <p style="align-self: center; ">Arahkan kamera anda pada Barcode untuk identifikasi barang</p>
        </div>
    </div>

</template>