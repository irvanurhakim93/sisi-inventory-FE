<script setup>
// import { ImageBarcodeReader } from 'vue-barcode-reader';
import { ref } from 'vue';
import PlantSelectionModal from './Components/PlantSelectionModal.vue';
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
    <ScanBarcodeOpenCamera />
  </div>

  <div class="card">
    <div class="card-body">
      <h3>Pindai Barcode</h3>
      <p>Arahkan kamera anda pada Barcode untuk indentifikasi barang</p>
    </div>
  </div>
  

</template>

<style lang="css" scoped>
.card-body {
    display: flex;
    flex-direction: column; 
    align-items: center;    
    justify-content: center;
    margin: 0; /* Remove default margin */
}
</style>