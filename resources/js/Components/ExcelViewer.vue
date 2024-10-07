<script setup>
import readXlsxFile from 'read-excel-file'
</script>

<template>
    <input type="file" id="input" />
  </template>
  <script>
const input = document.getElementById('input')
input.addEventListener('change', () => {
  readXlsxFile(input.files[0]).then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
  })
})

// Blob.
fetch('https://example.com/spreadsheet.xlsx')
  .then(response => response.blob())
  .then(blob => readXlsxFile(blob))
  .then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
  })

// ArrayBuffer.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
//
// Could be obtained from:
// * File
// * Blob
// * Base64 string
//
readXlsxFile(arrayBuffer).then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
})
</script>
