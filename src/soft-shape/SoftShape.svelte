<script>
  export let flat = true;
  export let concave = false;
  export let convex = false;
  export let pressed = false;
</script>

<div
  class="soft-shape"
  class:soft-shape--flat="{flat}"
  class:soft-shape--concave="{concave}"
  class:soft-shape--convex="{convex}"
  class:soft-shape--pressed="{pressed}"
>
  <slot></slot>
</div>

<style>
  .soft-shape {
    width: 300px;
    height: 300px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .soft-shape--flat {
    background: #e0e5ec;
    box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
  }

  .soft-shape--concave {
    background: linear-gradient(145deg, #caced4, #f0f5fd);
    box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
  }

  .soft-shape--convex {
    background: linear-gradient(145deg, #f0f5fd, #caced4);
    box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
  }

  .soft-shape--pressed {
    background: #e0e5ec;
    box-shadow: inset 20px 20px 60px #bec3c9, inset -20px -20px 60px #ffffff;
  }
</style>
