<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <h2>Select a Plant</h2>
        <select v-model="selectedPlant" @change="onPlantSelected" class="form-control">
          <option value="" disabled>Select a plant</option>
          <option v-for="plant in plants" :key="plant.id" :value="plant.id">
            {{ plant.name }}
          </option>
        </select>
        <button class="btn btn-danger" @click="onClose">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true
    },
    plants: {
      type: Array,
      required: true
    }
  });
  
  const emit = defineEmits(['plantSelected', 'close']);
  
  const selectedPlant = ref('');
  
  const onPlantSelected = () => {
    if (selectedPlant.value) {
      emit('plantSelected', selectedPlant.value);
    }
  };
  
  const onClose = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  