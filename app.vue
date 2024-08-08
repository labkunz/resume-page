<template>
  <main class="flex">
    <aside class="basis-1/3 px-16 py-24 bg-[#666666]">
      <figure class="w-[100px] min-h-20">
        <img class="object-cover object-center" src="./assets/img/resume_picture.jpg" alt="resume_picture">
      </figure>
      <section>
        <!-- can apply -->
        <h2 class="font-poppins text-lg text-[#ffffff] font-bold">MY CONTACT</h2>
        <template v-for="item in contactData">
          <ContactItem v-bind="item" />
        </template>
      </section>
      <section>
        <h2 class="font-poppins text-lg text-[#ffffff] font-bold">SKILLS</h2>
        <ul>
          <template v-for="item in skillData">
            <SkillItem v-bind="item" />
          </template>
        </ul>
      </section>
    </aside>
    <section class="bg-[#ffffff]">
      <header>
        <hgroup>
          <h1 class="font-poppins text-[48px] text-[#595656] font-bold">Kent Chen</h1>
          <p class="font-poppins text-[24px] text-[#595656]">Front-end engineer</p>
        </hgroup>
      </header>
      <article>
        <h2 class="font-poppins text-lg text-[#595656] font-bold">ABOUT MYSELF</h2>
        <p></p>
      </article>
      <article>
        <h2 class="font-poppins text-lg text-[#595656] font-bold">EXPERIENCE</h2>
        <div class="flex flex-col gap-16">
          <template v-for="item in workExperienceData">
            <workExperienceItem v-bind="item" />
          </template>
        </div>
      </article>
      <article>
        <h2 class="font-poppins text-lg text-[#595656] font-bold">EDUCATION</h2>
        <div class="flex flex-col gap-16">
          <template v-for="item in schoolExperienceData">
            <schoolExperienceItem v-bind="item" />
          </template>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const contactData = ref([
      {
        title: "Phone",
        content: "0912345678"
      },
      {
        title: "Email",
        content: "example@gamil.com"
      },
      {
        title: "Address",
        content: "456456456456"
      }
    ])
    const skillData = ref([
      { name: "Html" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Vue" },
      { name: "Nuxt" },
      { name: "React" },
      { name: "Scss" },
      { name: "tailwind" },
      { name: "RWD" },
      { name: "Bootstrap" },
    ])
    const workExperienceData = ref([
      { 
        compeny: "AviviD.ai | 2023 - 2024",
        jobTitle: "JavaScript engineer",
        experience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
      },
      { 
        compeny: "Syncteck | 2020 - 2022",
        jobTitle: "RD",
        experience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
      }
    ])
    const schoolExperienceData = ref([
      {
        year: 2018,
        name: "Ming Chuan University",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
      },
      {
        year: 2016,
        name: "Ming Chuan University",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
      }
    ])

    return { 
      contactData, 
      skillData, 
      workExperienceData,
      schoolExperienceData
    }
  }
}
</script>