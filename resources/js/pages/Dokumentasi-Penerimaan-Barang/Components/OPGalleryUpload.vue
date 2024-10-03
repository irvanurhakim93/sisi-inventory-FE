<template>
    <div class="card">
  
      <div class="gallery">
        <div
          class="gallery-item"
          v-for="(image, index) in images"
          :key="index"
          :class="{ selected: selectedImages.includes(image) }"
        >
          <input
            type="checkbox"
            :value="image"
            :id="'img' + index"
            @change="toggleImage(image)"
            :disabled="selectedImages.length >= 3 && !selectedImages.includes(image)"
          />
          <label :for="'img' + index">
            <img :src="image" alt="Image" />
            <button @click="removeImage(index)" class="btn btn-danger">Hapus Foto</button>
          </label>
        </div>
      </div>
      <div>
        <h3>Foto Terpilih</h3>
        <div class="selected-image" v-for="(image, index) in selectedImages" :key="index">
          <img :src="image" alt="Selected Image" style="height: 92px; width: 92px; margin-top: 10px;" />
        </div>
      </div>
    </div>
    <div class="image-picker">
      <input
        type="file"
        accept="image/*"
        multiple
        @change="handleFiles"
        ref="fileInput"
        style="display: none"
      />
      <div class="preview-container"></div>
      <a href="/dokumentasi-penerimaan-barang/input/open-camera-dokumentasi" class="btn btn-light">Buka Kamera</a>
      &nbsp;&nbsp;
      <a href="" class="btn btn-dark">Simpan</a>
      <p v-if="selectedImages.length >= 1">Anda hanya bisa mengambil 1 gambar</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedImages: [],
        images: [],
      };
    },
    methods: {
      openFilePicker() {
        this.$refs.fileInput.click();
      },
      handleFiles(event) {
        const files = Array.from(event.target.files);
        if (files.length + this.selectedImages.length > 3) {
          alert("You can only select up to 3 images.");
          return;
        }
        files.forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageUrl = e.target.result;
            this.images.push(imageUrl);
            this.selectedImages.push(imageUrl);
          };
          reader.readAsDataURL(file);
        });
        event.target.value = '';
      },
      toggleImage(image) {
        if (this.selectedImages.includes(image)) {
          this.removeSelectedImage(image);
        } else if (this.selectedImages.length < 3) {
          this.selectedImages.push(image);
        }
      },
      removeImage(index) {
        const image = this.images[index];
        this.images.splice(index, 1);
        this.removeSelectedImage(image);
      },
      removeSelectedImage(image) {
        const index = this.selectedImages.indexOf(image);
        if (index !== -1) {
          this.selectedImages.splice(index, 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .image-picker {
    text-align: center;
    margin: 20px;
  }
  
  .preview-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
  
  .card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    max-width: 400px;
    margin: auto;
  }
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .gallery-item {
    position: relative;
    width: 80px;
    height: 80px;
    border: 2px solid transparent;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .gallery-item.selected {
    border-color: blue;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  button {
    margin-top: 5px;
  }
  
  .selected-image {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;
    justify-items: center;
  }
  .selected-image img {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
  </style>
  