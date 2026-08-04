// ---------- 히어로 카피: 스크롤에 연동해서 전환 (디오아시스 스타일 참고) ----------
(function heroScrollRotator() {
  const wrapper = document.querySelector(".hero-scroll");
  const rotator = document.querySelector(".hero-copy-rotator");
  const subRotator = document.querySelector(".hero-sub-rotator");
  if (!wrapper || !rotator) return;
  const items = rotator.querySelectorAll("span");
  const subItems = subRotator ? subRotator.querySelectorAll("span") : [];
  items[0].classList.add("is-active");
  if (subItems[0]) subItems[0].classList.add("is-active");

  function update() {
    const rect = wrapper.getBoundingClientRect();
    const total = wrapper.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / total, 0), 0.999);
    const idx = Math.floor(progress * items.length);
    items.forEach((el, i) => el.classList.toggle("is-active", i === idx));
    subItems.forEach((el, i) => el.classList.toggle("is-active", i === idx));
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// ---------- 문장 단위 순차 리빌 (스크롤 진입 시 2초 간격으로 한 문장씩) ----------
(function revealLines() {
  const blocks = document.querySelectorAll(".reveal-block");
  if (!blocks.length) return;
  const played = new WeakSet();

  function playBlock(block) {
    if (played.has(block)) return;
    played.add(block);
    const lines = block.querySelectorAll(".reveal-line");
    lines.forEach((line, i) => {
      setTimeout(() => line.classList.add("is-active"), i * 2000);
    });
  }

  if (!("IntersectionObserver" in window)) {
    blocks.forEach(playBlock);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) playBlock(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  blocks.forEach((block) => io.observe(block));
})();

// ---------- FAQ 아코디언 ----------
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  q.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ---------- 현재 페이지 네비게이션 활성화 ----------
(function markActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
})();
