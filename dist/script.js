const navbarFixed = document.querySelector("#navbar-fixed");
const fixed = navbarFixed.offsetTop;

// Navbar
window.onscroll = () => {
  if (scrollY > fixed) {
    navbarFixed.classList.add("active");
  } else {
    navbarFixed.classList.remove("active");
  }
};

const ham = document.querySelector("#hamburger");
const navigasi = document.querySelector("#navigasi");

ham.addEventListener("click", function () {
  navigasi.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target)) {
    navigasi.classList.remove("active");
  }
});

// Modal
const modal = document.querySelector("#modal");
const ports = document.querySelectorAll(".portofolio");
const modalWrapper = document.querySelector("#modal-wrapper");

ports.forEach((port) => {
  port.addEventListener("click", function (e) {
    // Menghapus Class hidden
    modal.classList.remove("hidden");

    // menambahkan tag html ke modal-wrapper
    const imageAdd = `<img id="image"  src="${e.target.src}" alt="${e.target.alt}">`;
    modalWrapper.innerHTML = imageAdd;

    // Mengambil modal image
    const image = document.querySelector("#image");

    // Menghilangakn modal
    window.onclick = (e) => {
      if (e.target === modalWrapper || e.target === image) {
        modal.classList.add("hidden");
      }
    };
  });
});

// Galley Page
const navigasiBtn = document.querySelectorAll("#navigasi_btn button");

const modalProject = () => {
  // Modal Galeri page

  const projects = document.querySelectorAll(".project");
  const modalProject = document.querySelector("#modal_project");
  const modalProjectWrapper = document.querySelector("#modal_project_wrapper");

  projects.forEach((project) => {
    project.addEventListener("click", function (e) {
      // Menghapus Class hidden
      modalProject.classList.remove("hidden");

      // menambahkan tag html ke modal-wrapper
      const imageAdd = `<img id="image_project"  src="${e.target.src}" alt="${e.target.alt}">`;
      modalProjectWrapper.innerHTML = imageAdd;

      // Mengambil modal image
      const image = document.querySelector("#image_project");

      // Menghilangakn modal
      window.onclick = (e) => {
        if (e.target === modalProjectWrapper || e.target === image) {
          modalProject.classList.add("hidden");
        }
      };
    });
  });
};

modalProject();

navigasiBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    navigasiBtn.forEach((buttons) => buttons.classList.remove("text-yellow-500"));
    e.target.classList.add("text-yellow-500");

    const navigasi = document.querySelector("#image_container");

    if (e.target === navigasiBtn[1]) {
      navigasi.innerHTML = `
            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/erin-doering-kFoh7gacj_0-unsplash.jpg" alt="erin-doering-kFoh7gacj_0-unsplash" />
            </div>

            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/jane-last-BSwQWHfdU8g-unsplash.jpg" alt="jane-last-BSwQWHfdU8g-unsplash" />
            </div>

            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
                <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-YqFz7UMm8qE-unsplash.jpg" alt="spacejoy-c0JoR_-2x3E-unsplash" />
            </div>

            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/erin-doering-kFoh7gacj_0-unsplash.jpg" alt="erin-doering-kFoh7gacj_0-unsplash" />
            </div>

            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/jane-last-BSwQWHfdU8g-unsplash.jpg" alt="jane-last-BSwQWHfdU8g-unsplash" />
            </div>

            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
                <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-YqFz7UMm8qE-unsplash.jpg" alt="spacejoy-c0JoR_-2x3E-unsplash" />
            </div>
      `;
    } else if (e.target === navigasiBtn[2]) {
      navigasi.innerHTML = `
        <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg" alt="frames-for-your-heart-mR1CIDduGLc-unsplash" />
          </div>
              
        <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
          <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/john-fornander-tVzyDSV84w8-unsplash.jpg" alt="john-fornander-tVzyDSV84w8-unsplash" />
        </div>

        <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
          <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/todd-kent-178j8tJrNlc-unsplash.jpg" alt="todd-kent-178j8tJrNlc-unsplash" />
        </div>

        <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg" alt="frames-for-your-heart-mR1CIDduGLc-unsplash" />
          </div>
              
        <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
          <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/john-fornander-tVzyDSV84w8-unsplash.jpg" alt="john-fornander-tVzyDSV84w8-unsplash" />
        </div>

        <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
          <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/todd-kent-178j8tJrNlc-unsplash.jpg" alt="todd-kent-178j8tJrNlc-unsplash" />
        </div>
      `;
    } else if (e.target === navigasiBtn[3]) {
      navigasi.innerHTML = `
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-c0JoR_-2x3E-unsplash.jpg" alt="spacejoy-c0JoR_-2x3E-unsplash" />
            </div>
            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/kara-eads-L7EwHkq1B2s-unsplash.jpg" alt="kara-eads-L7EwHkq1B2s-unsplash" />
            </div>
            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
                <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/wu-yi-PdH0H4S6FTM-unsplash.jpg" alt="wu-yi-PdH0H4S6FTM-unsplash" />
            </div>
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-c0JoR_-2x3E-unsplash.jpg" alt="spacejoy-c0JoR_-2x3E-unsplash" />
            </div>
            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
              <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/kara-eads-L7EwHkq1B2s-unsplash.jpg" alt="kara-eads-L7EwHkq1B2s-unsplash" />
            </div>
            <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
                <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/wu-yi-PdH0H4S6FTM-unsplash.jpg" alt="wu-yi-PdH0H4S6FTM-unsplash" />
            </div>
        `;
    } else if (e.target === navigasiBtn[4]) {
      navigasi.innerHTML = `
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/6d8b018d2c01c3b2f9618aec658be6ab_14.jpg" alt="6d8b018d2c01c3b2f9618aec658be6ab_14" />
          </div>
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/95e522978934cca58c738cc860485a5d_24.jpg" alt="95e522978934cca58c738cc860485a5d_24" />
          </div>
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550.jpg" alt="3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550" />
          </div>
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/6d8b018d2c01c3b2f9618aec658be6ab_14.jpg" alt="6d8b018d2c01c3b2f9618aec658be6ab_14" />
          </div>
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/95e522978934cca58c738cc860485a5d_24.jpg" alt="95e522978934cca58c738cc860485a5d_24" />
          </div>
          <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
            <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550.jpg" alt="3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550" />
          </div>
        `;
    } else {
      navigasi.innerHTML = `
      <div project class="cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/erin-doering-kFoh7gacj_0-unsplash.jpg" alt="erin-doering-kFoh7gacj_0-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg" alt="frames-for-your-heart-mR1CIDduGLc-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-c0JoR_-2x3E-unsplash.jpg" alt="spacejoy-c0JoR_-2x3E-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/john-fornander-tVzyDSV84w8-unsplash.jpg" alt="john-fornander-tVzyDSV84w8-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/kara-eads-L7EwHkq1B2s-unsplash.jpg" alt="kara-eads-L7EwHkq1B2s-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/6d8b018d2c01c3b2f9618aec658be6ab_14.jpg" alt="6d8b018d2c01c3b2f9618aec658be6ab_14" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/jane-last-BSwQWHfdU8g-unsplash.jpg" alt="jane-last-BSwQWHfdU8g-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/todd-kent-178j8tJrNlc-unsplash.jpg" alt="todd-kent-178j8tJrNlc-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/95e522978934cca58c738cc860485a5d_24.jpg" alt="95e522978934cca58c738cc860485a5d_24" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-YqFz7UMm8qE-unsplash.jpg" alt="spacejoy-YqFz7UMm8qE-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/wu-yi-PdH0H4S6FTM-unsplash.jpg" alt="wu-yi-PdH0H4S6FTM-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550.jpg" alt="3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550" />
      </div>
      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/erin-doering-kFoh7gacj_0-unsplash.jpg" alt="erin-doering-kFoh7gacj_0-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg" alt="frames-for-your-heart-mR1CIDduGLc-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-c0JoR_-2x3E-unsplash.jpg" alt="spacejoy-c0JoR_-2x3E-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/john-fornander-tVzyDSV84w8-unsplash.jpg" alt="john-fornander-tVzyDSV84w8-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/kara-eads-L7EwHkq1B2s-unsplash.jpg" alt="kara-eads-L7EwHkq1B2s-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/6d8b018d2c01c3b2f9618aec658be6ab_14.jpg" alt="6d8b018d2c01c3b2f9618aec658be6ab_14" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/jane-last-BSwQWHfdU8g-unsplash.jpg" alt="jane-last-BSwQWHfdU8g-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/todd-kent-178j8tJrNlc-unsplash.jpg" alt="todd-kent-178j8tJrNlc-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/95e522978934cca58c738cc860485a5d_24.jpg" alt="95e522978934cca58c738cc860485a5d_24" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/spacejoy-YqFz7UMm8qE-unsplash.jpg" alt="spacejoy-YqFz7UMm8qE-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/wu-yi-PdH0H4S6FTM-unsplash.jpg" alt="wu-yi-PdH0H4S6FTM-unsplash" />
      </div>

      <div class="project cursor-pointer overflow-hidden md:w-2/5 xl:w-[28%] 2xl:w-[30%] animate-faded">
        <img class="hover:scale-105 transition duration-300 w-full h-full object-cover" src="../dist/img/3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550.jpg" alt="3f7a5b53ba41af7eba04cc3c1f2e5fb8_2011550" />
      </div>
    `;
    }

    modalProject();
  });
});
