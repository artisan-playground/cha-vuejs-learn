<template>
    <div class="tab">
    <h1>
      <strong>PROFILE</strong>
      <p>
      </p>
    </h1>
  <button class="tablinks" onclick="openCity(event, 'London')">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
<!-- Tab content -->
<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'profile',
}
</script>

<style></style>
