const navhtml = `<nav class="bg-transparent shadow-lg">
<div class="md:flex items-center justify-between py-2 px-8 md:px-12">
  <div class="flex justify-between items-center">
    <div class="text-2xl font-bold text-beige-light md:text-3xl">
      <a href="./index.html">Leo</a>
    </div>
    <div class="md:hidden" id="nav-open">
      <button type="button"
        class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path class="hidden"
            d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
          <path
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>
    </div>
    <!---menu pt2---->
    <div id="nav-opened" class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
    <div class="p-2 divide-y divide-gray-600 flex flex-col">
        <a href="./index.html" class="p-2 font-semibold hover:text-yellow-300">Home</a>
        <a href="./about.html" class="p-2 font-semibold hover:text-yellow-300">About</a>
        <a href="./gallery.html" class="p-2 font-semibold hover:text-yellow-300">Gallery</a>
    </div>
</div>
  </div>
  <div class="flex flex-col md:flex-row hidden md:block -mx-2">
    <a href="./index.html"
      class="text-beige-light bg-beige-dark rounded hover:bg-teal-dark hover:text-teal-light hover:font-medium py-2 px-2 md:mx-2">Home</a>
    <a href="./about.html"
      class="text-beige-light bg-beige-dark rounded hover:bg-teal-dark hover:text-teal-light hover:font-medium py-2 px-2 md:mx-2">About</a>
    <a href="./gallery.html"
      class="text-beiged-light bg-beige-dark rounded hover:bg-teal-dark hover:text-teal-light hover:font-medium py-2 px-2 md:mx-2">Gallery</a>
  </div>
</div>
</nav>`
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('running')
    const nav = document.querySelector('#navigation');
  nav.innerHTML = navhtml
  const hamburger = document.querySelector('#nav-open');
  const menu = document.querySelector('#nav-opened');
  hamburger.addEventListener('click', function (event) {
      event.stopPropagation();
      menu.classList.remove("hidden");
      console.log('Iclicked on the hamburger menu');
  })
  const body = document.querySelector('body');
  body.addEventListener('click', function (event) {
      menu.classList.add("hidden");  
      console.log('I clicked on the body')
  })
});
