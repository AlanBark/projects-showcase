<script lang="ts">
import Footer from '../../components/Footer.svelte';
import HeaderDesktop from '../../components/HeaderDesktop.svelte';
</script>

<style lang="scss">
  $bg: #000102;
  $top: #9aa3a5;
  $highlight: #1e9c74;
  .page {
    background-color: $bg;
    color: white;
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 6rem;
  }
  .contact-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .contact {
    display: grid;
    gap: 3rem;
    margin-right: 2rem;
    margin-left: 2rem;
    @media only screen and (min-width: 768px) {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      margin-right: 6rem;
      margin-left: 6rem;
    }
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $top;
    justify-content: center;
  }
  .highlight {
    color: white;
  }
  .contact-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-start;
  }
  .contact-links a {
    color: $highlight;
  }
  .photo {
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 768px) {
      justify-content: right;
    }
  }
  .photo img {
    border-radius: 50%;
    object-fit: cover;
    width: 250px;
    height: 250px;
    @media only screen and (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }
</style>

<svelte:head>
    <title>Alec Parkes | Contact</title> 
</svelte:head>
<div class="page">
  <HeaderDesktop />
  <div class="contact-wrap">
    <div class="contact">
      <div class="photo">
        <img src="/envelope.jpg" alt="me" />
      </div>
      <div class="contact-info">
        <h1 class="highlight">Get in touch</h1>
        <p>I'm not currently looking for an opportunity at the moment, </p>
        <p>However, if you'd like to reach out my details are below</p>
        <div class="contact-links">
          <a href="mailto:alec@parkes.dev">Email</a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alec-parkes-1754a817a/">LinkedIn</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/AlanBark">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />