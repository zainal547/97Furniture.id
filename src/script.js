const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const brandText = document.getElementById('brand-text');
  const brandSub = document.getElementById('brand-sub');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      // Saat di-scroll berubah menjadi Putih Bersih sesuai image_a6fe5d.jpg
      navbar.classList.add('bg-white', 'border-slate-100', 'shadow-sm');
      navbar.classList.remove('bg-transparent', 'border-transparent');
      brandText.classList.replace('text-white', 'text-slate-900');
      brandSub.classList.replace('text-slate-400', 'text-slate-500');
      menuBtn.classList.replace('text-white', 'text-slate-900');
      navLinks.forEach(link => {
        link.classList.replace('text-slate-300', 'text-slate-600');
        link.classList.replace('text-white', 'text-slate-900');
      });
    } else {
      // Kembali Transparan saat di atas
      navbar.classList.remove('bg-white', 'border-slate-100', 'shadow-sm');
      navbar.classList.add('bg-transparent', 'border-transparent');
      brandText.classList.replace('text-slate-900', 'text-white');
      brandSub.classList.replace('text-slate-500', 'text-slate-400');
      menuBtn.classList.replace('text-slate-900', 'text-white');
      navLinks.forEach(link => {
        link.classList.replace('text-slate-600', 'text-slate-300');
        link.classList.replace('text-slate-900', 'text-white');
      });
    }
  });

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });