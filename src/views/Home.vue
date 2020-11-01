<template>
  <article>
    <div class="title"><h1>Lorem ipsum</h1></div>
    <div class="card">
      <img alt="A landing-page image" src="../assets/hello.svg" />
    </div>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate
        eros sed nisl tempus maximus. Vivamus venenatis, massa venenatis
        dignissim tincidunt, ligula velit maximus arcu, sit amet lobortis metus
        justo eu ante. Vestibulum eget cursus orci. Ut tortor urna, elementum et
        ex quis, varius molestie quam. Ut vel vehicula magna. Morbi eu fermentum
        ex. Maecenas pulvinar ligula vitae dui blandit volutpat. Cras
        ullamcorper ultrices vestibulum. Morbi sit amet libero ac magna aliquam
        dignissim. Sed malesuada finibus nisi eu viverra. Nam tristique, justo
        quis facilisis eleifend, nisi nibh viverra felis, nec sollicitudin
        mauris velit nec ligula. Praesent malesuada vulputate mattis.
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "../assets/_variables.scss";
article {
  .title,
  .card,
  .text {
    width: calc(100vw - 40px);
  }
  .title {
    padding: 20px;
    font-size: 1.5rem;
    z-index: 1;
    text-align: center;
    h1 {
      font-weight: 800;
      color: $dark;
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
      text-transform: capitalize;
    }
  }
  .card {
    padding: 20px;
    img {
      max-height: 100%;
      display: block;
      margin: auto;
    }
  }
  .text {
    padding: 20px;
  }
}
@media only screen and (min-width: 900px) {
  article {
    .title,
    .card,
    .text {
      width: auto;
    }
    display: grid;
    grid-template-columns: 500px auto;
    grid-template-rows: auto;
    grid-template-areas: "card title" "card text";
    overflow: hidden;
    margin: 20px 0;
    .card {
      grid-area: card;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 600px;
        width: auto;
      }
    }
    .title {
      grid-area: title;
      text-align: left;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      grid-area: text;
      width: auto;
      font-size: 1.125rem;
    }
  }
}
</style>

