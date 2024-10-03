<template>
  <div class="camera-container">
    <Camera ref="cameraRef" :resolution="{ width: 640, height: 480 }" autoplay @snapshot="onSnapshot"></Camera>
    <button type="button" class="btn btn-danger" @click="takeSnapshot" v-if="!downloadUrl">
      <img src="/assets/media/logos/camera.png" alt="">
    </button>
    <div class="button-container">
      <a v-if="downloadUrl" :href="downloadUrl" download="unggahan-material.png" class="btn btn-success">Unduh Gambar</a>
      &nbsp;&nbsp;&nbsp;
      <a v-if="downloadUrl" class="btn btn-success">Untuk tembak ke API</a>
    </div>
    

    <div class="gallery">
      <h2>Hasil Foto</h2>
      <div class="gallery-container">
        <div v-for="(image, index) in images" :key="index" class="gallery-item">
          <img :src="image" alt="Snapshot" class="gallery-image">
          <input type="checkbox" :id="'photo-' + index" :value="image" v-model="selectedImages" @change="handleCheckboxChange">
          <label :for="'photo-' + index">Pilih</label>
        </div>
      </div>
      <button class="btn btn-primary" @click="saveImages" :disabled="selectedImages.length === 0">Simpan</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Camera from 'simple-vue-camera';

const cameraRef = ref(null);
const images = ref([]);
const selectedImages = ref([]);

const takeSnapshot = async () => {
  if (cameraRef.value) {
    try {
      const imageBlob = await cameraRef.value.snapshot(
        { width: 640, height: 480 },
        "image/png",
        0.5
      );

      const url = URL.createObjectURL(imageBlob);
      images.value.push(url);
    } catch (error) {
      console.error("Error taking snapshot:", error);
    }
  } else {
    console.error("Camera reference is not available.");
  }
};

const handleCheckboxChange = () => {
  if (selectedImages.value.length > 3) {
    alert("Anda hanya bisa memilih 3 foto");
    selectedImages.value.pop(); 
  }
};

// const saveImages = async () => {
  
//   console.log("Gambar yang disimpan:", selectedImages.value);
// };

const saveImages = async () => {
  if (selectedImages.value.length === 0) return;

  const formData = new FormData();

  selectedImages.value.forEach((image, index) => {
    const blob = dataURLtoBlob(image);
    formData.append(`images[${index}]`, blob, `image-${index}.png`);
  });

  try {
    const response = await fetch('/api/dokumentasi-penerimaan-barang', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Images saved successfully:', result);
    } else {
      console.error('Failed to save images:', response.statusText);
    }
  } catch (error) {
    console.error('Error saving images:', error);
  }
};

// Helper function to convert Data URL to Blob
const dataURLtoBlob = (dataUrl) => {
  const byteString = atob(dataUrl.split(',')[1]);
  const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

const onSnapshot = (data) => {
  console.log(data);
};

</script>

<style scoped>
.camera-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.gallery {
  margin-top: 20px;
  width: 100%;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-item {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-image {
  width: 100px;
  height: auto;
  margin-bottom: 5px;
}
</style>
