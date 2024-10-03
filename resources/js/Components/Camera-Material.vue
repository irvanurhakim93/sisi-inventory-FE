<template>
    <div class="camera-container">
      <Camera ref="cameraRef" :resolution="{ width: 640, height: 480 }" autoplay @snapshot="onSnapshot"></Camera>
      <button type="button" class="btn btn-danger" @click="takeSnapshot" v-if="!downloadUrl"><img src="/assets/media/logos/camera.png" alt=""></button>
      <div class="button-container">
        <a v-if="downloadUrl" :href="downloadUrl" download="unggahan-material.png" class="btn btn-success">Unduh Gambar</a>
        &nbsp;&nbsp;&nbsp;
        <a v-if="downloadUrl"  class="btn btn-success">Untuk tembak ke API</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Camera from 'simple-vue-camera';
  
  const cameraRef = ref(null);
  const downloadUrl = ref(null); // For storing the download URL
  
  const takeSnapshot = async () => {
    if (cameraRef.value) {
      try {
        const imageBlob = await cameraRef.value.snapshot(
          { width: 640, height: 480 },
          "image/png",
          0.5
        );
  
        // Create a Blob URL for downloading
        downloadUrl.value = URL.createObjectURL(imageBlob);
      } catch (error) {
        console.error("Error taking snapshot:", error);
      }
    } else {
      console.error("Camera reference is not available.");
    }
  };
  
  const onSnapshot = (data) => {
    // Handle the snapshot data if needed
    console.log(data);
  };
  </script>
  
  <style scoped>
  .camera-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center elements horizontally */
  }
  
  .button-container {
    margin-top: 10px; /* Add some spacing above the buttons */
    display: flex;
    justify-content: center; /* Center the button inside this container */
  }
  </style>
  