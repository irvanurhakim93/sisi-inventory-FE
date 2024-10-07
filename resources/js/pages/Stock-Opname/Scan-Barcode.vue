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
const showErrorModal = ref(false);
const scannedBarcode = ref('');
const validBarcodes = ref(['1234567890', '0987654321']); //Contoh barcode yg valid

const handlePlantSelected = (plantId) => {
  selectedPlant.value = plantId;
  showModal.value = false; // 
};

const handleCloseModal = () => {
  showModal.value = false; };

const handleBarcodeScanned = (barcode) => {
  scannedBarcode.value = barcode;
  
  // Check if the scanned barcode is valid
  if (!validBarcodes.value.includes(barcode)) {
    showErrorModal.value = true; // Show error modal if barcode is invalid
  } else {
    // Proceed with valid barcode logic here
    console.log('Valid barcode scanned:', barcode);
  }
};

const handleCloseErrorModal = () => {
  showErrorModal.value = false; // Close the error modal
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

  <ErrorModal
    :isVisible="showErrorModal"
    @close="handleCloseErrorModal"
    message="Materi X pada Plant (xxx) Tidak Ditemukan!."
  />
  

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