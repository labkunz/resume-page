<template>
  <div class="flex item-center justify-center gap-8">
    <PrimaryButton />
    <SecondaryButton />
  </div>
  <main class="flex">
    <aside class="basis-1/3 px-16 py-24 bg-[#666666]">
      <figure class="w-full min-h-20">
        <img class="object-cover object-center" src="./assets/img/resume_picture.jpg" alt="resume_picture">
      </figure>
      <section>
        <!-- can apply -->
        <h2 class="font-poppins text-lg text-[#ffffff] font-bold">MY CONTACT</h2>
        <hgroup>
          <h3 class="font-poppins text-[15px] text-[#ffffff] font-bold">Phone</h3>
          <p class="font-poppins text-[11px] text-[#ffffff]">0912345678</p>
        </hgroup>
        <hgroup>
          <h3 class="font-poppins text-[15px] text-[#ffffff] font-bold">Email</h3>
          <p class="font-poppins text-[11px] text-[#ffffff]">example@gmail.com</p>
        </hgroup>
        <hgroup>
          <h3 class="font-poppins text-[15px] text-[#ffffff] font-bold">Address</h3>
          <p class="font-poppins text-[11px] text-[#ffffff]">4654564564646</p>
        </hgroup>
      </section>
      <section>
        <h2 class="font-poppins text-lg text-[#ffffff] font-bold">SKILLS</h2>
        <ul>
          <li class="font-poppins text-[11px] text-[#ffffff]">Html</li>
          <li class="font-poppins text-[11px] text-[#ffffff]">CSS</li>
          <li>JavaScript</li>
          <li>Vue</li>
          <li>Nuxt</li>
          <li>React</li>
          <li>Scss</li>
          <li>tailwind css</li>
          <li>RWD</li>
          <li>Bootstrap</li>
        </ul>
      </section>
    </aside>
    <section class="bg-[#ffffff]">
      <header>
        <hgroup>
          <h1>Kent Chen</h1>
          <p>Front-end engineer</p>
        </hgroup>
      </header>
      <article>
        <h2 class="font-poppins text-lg text-[#595656] font-bold">ABOUT MYSELF</h2>
        <p></p>
      </article>
      <article>
        <h2 class="font-poppins text-lg text-[#595656] font-bold">EXPERIENCE</h2>
        <div class="work-e-item">
          <hgroup>
            <h3></h3>
            <p></p>
          </hgroup>
          <p></p>
        </div>
        <div class="work-e-item">
          <hgroup>
            <h3></h3>
            <p></p>
          </hgroup>
          <p></p>
        </div>
      </article>
      <article>
        <h2 class="font-poppins text-lg text-[#595656] font-bold">EDUCATION</h2>
        <div class="school-e-item">
          <hgroup>
            <h3></h3>
            <p></p>
          </hgroup>
          <p></p>
        </div>
        <div class="school-e-item">
          <hgroup>
            <h3></h3>
            <p></p>
          </hgroup>
          <p></p>
        </div>
      </article>
    </section>
  </main>
</template>
