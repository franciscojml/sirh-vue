<template>
  <div class="loading">
    <CSpinner color="info"/>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>


<style>
.loading {
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>