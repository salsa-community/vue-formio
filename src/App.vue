<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm text-center">
            <img
              alt="Vue logo"
              src="./assets/logo.svg"
              width="125"
              height="125"
            />
          </div>
        </div>
      </div>

      <div class="wrapper"></div>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <form-io
              ref="formioForm"
              src="http://localhost:3001/form/639ce61bc69806cc78b482bc"
              url="http://localhost:9000/forms"
              form=""
              submission=""
              language="en"
            ></form-io>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
