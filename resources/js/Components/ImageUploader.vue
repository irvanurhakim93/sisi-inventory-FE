<template>
    
 <div>
    <label class="btn custom-white-button" for="file-upload">Ambil Gambar</label>
    <input type="file" id="file-upload" class="hidden" @change="handleFileUpload" multiple accept="image/*" />
    <div class="image-preview">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Preview" />
    </div>
  </div>
  <button class="btn btn-dark">Simpan</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [],
      };
    },
    methods: {
      handleFileUpload(event) {
        const files = event.target.files;
        this.images = [];
  
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
  
          reader.onload = (e) => {
            this.images.push(e.target.result);
          };
  
          reader.readAsDataURL(file);
        }
      },
    },
  };
  </script>
  
  <style>
  .image-preview {
    display: flex;
    flex-wrap: wrap;
  }
  
  .image-preview img {
    max-width: 100px;
    margin: 5px;
  }

  .custom-white-button {
  background-color: white;
  color: black; /* Adjust text color as needed */
  border: 2px solid black; /* Bold outline */
  padding: 0.5rem 1rem; /* Adjust padding as needed */
  border-radius: 0.25rem; /* Optional: for rounded corners */
  }
  </style>