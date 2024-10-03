<template>
  <div class="image-tile-container">
    <div class="image-tile" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" class="image" />
      <button class="image-button" @click="handleClick(image.url)">
        <svg
          fill="#fff"
          style="background: #1F93EC; border-radius: 28px;"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z" />
        </svg>
      </button>
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
