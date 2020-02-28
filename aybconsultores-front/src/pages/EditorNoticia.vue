<template>
  <div class="container-fluid">
    <h3 class="pt-4 pb-3">Editor de noticias</h3>
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-2">
            <label class="form-control">Foto</label>
          </div>
          <div class="col-lg-10">
            <input type="text" class="form-control"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2">
            <label class="form-control">Titulo</label>
          </div>
          <div class="col-lg-10">
            <input type="text" class="form-control"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2">
            <label class="form-control">Categor&iacute;a</label>
          </div>
          <div class="col-lg-10">
            <select name="" id="" class="form-control">
              <option value="">Finanzas</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row">
          <div class="col-12">
            <vue-editor v-model="postSelected.content" />
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-sm-none d-md-block">
        <div class="row">
          <div class="col-lg-12">
            <h3>Vista previa</h3>
          </div>
        </div>
        <div class="row app-visor-post">
          <div class="col-lg-12">
            <div class="row"><Post :post="postSelected" /></div>
            <div class="row"><div v-html="postSelected.content"></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  name: 'Noticias',
  components: { VueEditor },
  props: {
    params: Object
  },
  data: () => ({
    content: "<h1>Some initial content</h1>",
    postSelected: {
      "id": 1,
      "photo": "https://cloud/img.png",
      "content": "Content <h1>Title</h1>",
      "title": "Noticia  1",
      "category": "Finanzas",
      "authorId": 1,
      "created": "12/12/2020",
      "updated": "12/12/2020",
      "likes": 10,
      "numberOfComments": 34
    }
  }),
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    }
  }
}
</script>
