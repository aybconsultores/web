<template>
  <div class="single-blog-post featured-post-2">
    <div class="post-thumb">
      <a href="#"><img :src="post.photo" alt=""></a>
    </div>
    <div class="post-data">
      <a href="#" class="post-catagory">{{ post.category }}</a>
      <div class="post-meta">
        <a href="#" class="post-title">
          <h6>{{ post.title }}</h6>
        </a>
        <!-- Post Like & Post Comment -->
        <div class="d-flex align-items-center">
          <a href="#" class="post-like"><img src="../assets/like.png" alt=""> <span>{{ post.likes }}</span></a>
          <a href="#" class="post-comment"><img src="../assets/chat.png" alt=""> <span>{{ post.numberOfComments }}</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  }
}
</script>
