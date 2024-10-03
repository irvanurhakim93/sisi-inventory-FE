<template>
    <div class="image-tile-container">
      <div class="image-tile" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: '/assets/media/logos/mulyono.png', alt: 'Image 1' },
          { src: '/assets/media/logos/haha-react.png', alt: 'Image 2' },
          { src: '/assets/media/logos/scan-barcode.png', alt: 'Image 3' },
          // Add more images as needed
        ],
      };
    },
    methods: {
      handleClick(url) {
        this.$router.push('/dokumentasi-penerimaan-barang/material/pilih-foto');
      },
    },
  };
  </script>
  
  <style scoped>
  .image-tile-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Adjust spacing between tiles */
  }
  
  .image-tile {
    position: relative;
    width: 150px; /* Set desired width */
    height: 200px; /* Set desired height */
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .image-button {
    position: absolute;
    bottom: 8px; /* Space from the bottom */
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.3s;
  }
  
  .image-button:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
  }
  </style>
  