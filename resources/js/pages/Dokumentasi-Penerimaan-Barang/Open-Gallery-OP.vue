<template>
    <div class="alert alert-secondary"><h3>Dokumentasi OP</h3></div>
    <div class="preview-container">
   <OpCamera/>

    </div>
</template>

<script setup>
// import ImageUploader from '../../Components/ImageUploader.vue';
import PopUpGallery from '../../Components/PopUpGallery.vue';
import OpCamera from './Components/OpCamera.vue';
// import MaterialCamera from './Components/MaterialCamera.vue';
</script>

<style lang="css" scoped>
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
        input[type="checkbox"] {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
</style>