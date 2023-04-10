<script lang="ts">
  // import { onMount } from 'svelte';
  import Footer from "../components/Footer.svelte";
  import Parallax from "../components/Parallax.svelte";
</script>


<style lang="scss">
  $top: #9aa3a5;
  $highlight: #1e9c74;
  .personal {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .info-card {
    background-color: none;
    border: 1px solid rgb(95, 95, 95);
    padding: 1rem;
    height: 100%;
    width: 300px;
    color: #9aa3a5;
    border-radius: 5px;
  }
  .info-card h2 {
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
  }
  .highlight {
    color: white;
  }
  .intro {
    color: $top;
    font-size: 1.7rem;
    text-align: center;
    margin: 0% 25% 0% 25%;
    margin-bottom: 3rem;
    margin-bottom: 100vh;
  }
  .intro a {
    color: $highlight;
    font-size: 1rem;
  }
  .intro-sec {
    margin-top: 3rem;
  }
  .intro .highlight {
    color: $highlight;
  }
  .intro-col {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0% 10% 0% 10%;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .col-left {
    text-align: left;
  }
  .col-right {
    text-align: right;
  }
  @media only screen and (max-width: 768px) {
    .intro-sec {
      font-size: 1.2rem;
    }
    .intro {
      margin: 0% 5% 0% 5%;
      margin-bottom: 50vh;
    }
    .intro-col {
      font-size: 1rem;
    }
  }
</style>

<!-- You could definitely make a component per layer, but the boilerplate looks uglier than this -->
<Parallax>
  <section class="intro" role="contentinfo" aria-label="Intro about me">
    <p class="intro-sec">
      <span class="highlight">Alec Parkes</span> is a full stack Web Developer, Client
      Development Liason and tech enthusiast, currently based in Brisbane.
    </p>
    <div class="intro-sec">
      <div class="intro-col">
        <p class="highlight col-left">SDL Technology</p>
        <p class="col-right">Web Developer & Client Liason, 2020 - 2022</p>
      </div>
      <div class="intro-col">
        <p class="highlight col-left">QUT</p>
        <p class="col-right">Bachelor of IT, Major in CompSci (6.6), 2022</p>
      </div>
    </div>
    <p class="intro-sec">
      My passion for technology and problem solving has led me to take on a wide
      variety of roles during my employment
    </p>
    <a href="/projects/workSDL">Read More</a>
  </section>
  <!-- <section class="personal" role="contentinfo" aria-label="Education, work and Personal achievements">
      <div class="info-card">
        <h2>Education</h2>
        <h3>Queensland University of Technology</h3>
        <h4>Bachelor of IT in Computer Science / Dec 2022</h4>
        <ul>
          <li>GPA 6.6</li>
          <li>Min Networks and Security</li>
        </ul>
      </div>
      <div class="info-card">
        <h2>Work</h2>
        <h3>SDL Technology - Full Stack Web Developer / 2020 - 2022</h3>
        <h4>Skills used here</h4>
        <h3>QUT - Tutor / 2023 - Current</h3>
      </div>
      <div class="info-card">
        <h2>Personal Skillset</h2>
        <ul>
          <li>Strong interpersonal & communication skills</li>
          <li>Real world experience maintaining and developing websites for 
            small, medium, and enterprise level businesses. 
          </li>
          <li>Comfortable with SVN, GIT, various Linux and Windows 
            (server) environments</li>
          <li>Experience with Agile development methodologies</li>
          <li>Experience with various full stack web technologies including HTML, CSS, 
            Js, PHP, and SQL</li>
          </ul>
        </div>
      </section> -->
  <section />
  <Footer />
</Parallax>

