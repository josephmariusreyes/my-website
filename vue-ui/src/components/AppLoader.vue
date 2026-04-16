<template>
  <div class="loader-overlay">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  /* Fallback for browsers that don't support inset */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
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
  -webkit-animation: spin 0.8s linear infinite;
  animation: spin 0.8s linear infinite;
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
