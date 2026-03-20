<template>
  <div class="loader-overlay">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  z-index: 9999;
}

.spinner {
  width: 52px;
  height: 52px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
