<script>

    import inview from "$lib/utils/inview";
    import { } from 'svelte/transition';

</script>
<div class="flex flex-col items-stretch">
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />

  <div use:inview={{direction: 'down'}} class="h-20" on:enterViewport={() => console.log("enter")}>
    <h1>Ad ea proident ea mollit dolore pariatur esse reprehenderit eiusmod commodo ut proident labore irure.</h1>
  </div>
  
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />
</div>
