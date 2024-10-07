<script setup>
import { StreamBarcodeReader } from 'vue-barcode-reader';
</script>

<template>
    <StreamBarcodeReader
    @decode="onDecode"
    @loaded="onLoaded"/>
</template>