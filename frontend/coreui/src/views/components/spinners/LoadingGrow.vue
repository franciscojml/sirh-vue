<template>
  <div class="loading">
    <CSpinner
      style="width:4rem;height:4rem;"
      color="900"
      grow
    />
  </div>
</template>

<script>
export default {
  name: "LoadingGrow"
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