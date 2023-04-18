<script lang="ts">
  import type { IProject } from "$lib/typedef/IProject";
  export let project: IProject;
</script>

<style lang="scss">
  $bg: #000102;
  $top: #9aa3a5;
  $left: #5b6c76;
  $highlight: #1e9c74;
  .PostCard {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: $bg;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  .image {
    // Add a gradient overlay on the image
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .categories {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin: 0.8rem 0;
    span {
      padding: 0.2rem 0.5rem;
      background-color: $left;
      border-radius: 3px;
      color: white;
      font-size: 0.8rem;
    }
  }
  .content {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 0.9rem;
      color: $top;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>

<a href={"/projects/" + project.path}>
  <div class="PostCard">
    <div class="image">
      <img src={project.thumbnail} alt={project.title} />
    </div>
    <div class="categories">
      {#each project.category as category}
      <span>{category}</span>
      {/each}
    </div>
    <div class="content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </div>
</a>
  