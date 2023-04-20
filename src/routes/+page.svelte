<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import InfoCard from "../components/InfoCard.svelte";
  import Parallax from "../components/Parallax.svelte";
  import { SchoolOutline, CodeSlashOutline, DesktopOutline, LogoReact } from "svelte-ionicons";
</script>


<style lang="scss">
  $top: #9aa3a5;
  $highlight: #1e9c74;

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0% 10% 0% 10%;
    margin-bottom: 3rem;
    color: white;
    text-align: center;
  }
  .intro h4 {
    font-size: 1rem;
    color: #9aa3a5;
    margin-top: 2rem;
  }
  .intro-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    white-space: nowrap;
    gap: 0.5rem;
  }
  img {
    border-radius: 50%;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .intro {
      margin: 0% 5% 0% 5%;
      margin-bottom: 3rem;
    }
    .intro-flex {
      flex-direction: column;
    }
  }
  .slash {
    color: #9aa3a5a2;
    margin: 0 0.5rem 0 0.5rem;
  }
  .information {
    margin: 5% 0% 5% 0%;
  }
  .parent-grid {
    margin: 0% 10% 0% 10%;
  }
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    color: #9aa3a5;
    gap: 2rem;
    margin-bottom: 3rem;
  }
</style>

<svelte:head>
    <title>Alec Parkes</title> 
</svelte:head>
<Parallax>
  <section class="intro" role="contentinfo" aria-label="Intro about me">
    <img src="/alec.png" alt="Alec Parkes" width="160" height="160" />
    <div class="intro-flex">
      <h3>Web Developer <span class="slash">\</span></h3>
      <h3>Client Communications <span class="slash">\</span></h3>
      <h3>Tech Enthusiast </h3>
    </div>
    <h4>Currently Based in Brisbane, Australia</h4>
  </section>
  <section class="information" role="contentinfo" aria-label="Information about me">
    <div class="info-grid parent-grid">
      <div class="info-grid">
        <InfoCard title="Web Development" text="React, Svelte and Vue, Java, Python and PHP. Web development has been my focus for the last few years" link="/">
          <LogoReact size="40" />
        </InfoCard>
        <InfoCard title="Work"  text="2 Years of professional experience developing, deploying and working with clients" link="/">
          <CodeSlashOutline size="40" />
        </InfoCard>
      </div>
      <div class="info-grid">
        <InfoCard title="Education"  text="Bachelor of IT in Computer Science - 6.6 GPA - QUT Dec 2022" link="/">
          <SchoolOutline size="40" />
        </InfoCard>
        <InfoCard title="Mobile, Desktop & More"  text="From JS to C, AWS to single gate chips. If it runs code, I'm interested." link="/">
          <DesktopOutline size="40" />
        </InfoCard>
      </div>
    </div>
  </section>
  <Footer />
</Parallax>

