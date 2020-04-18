<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <a class="navbar-brand" href="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li 
          class="nav-item" 
          v-for="(menu,index) in menus"
          :key="index"
        >
          <router-link
            :to="menu.path"
            tag="a"
            active-class="active"
            class="nav-link"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="/stock" class="nav-link">End Days</a>
        </li>
        <li class="nav-item">
          <a href="" class="btn btn-primary">Save</a>
          &nbsp;
          <a href="" class="btn btn-danger">Load</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['menus','title']
}
</script>

<style>

</style>