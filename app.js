<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#871f26" />
  <title>칭다오 작전 지침서</title>
  <link rel="preconnect" href="https://images.unsplash.com" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="route.css" />
  <link rel="stylesheet" href="triple.css" />
  <link rel="stylesheet" href="refine.css" />
  <link rel="stylesheet" href="gallery.css" />
</head>
<body>
  <main id="app">
    <section class="cover hidden" id="cover">
      <div class="cover-shade"></div>
      <div class="cover-top"><span class="compass">✦</span><span>TRAVEL BRIEFING · 2026</span></div>
      <div class="cover-copy">
        <p class="eyebrow">QINGDAO, CHINA</p>
        <h1>칭다오<br><em>비밀 작전</em><br>지침서</h1>
        <p class="date">2026.09.11 — 09.13</p>
      </div>
      <button class="start" id="startBtn">작전 개시 <span>→</span></button>
      <p class="cover-foot">2박 3일 · 바다와 맥주의 도시</p>
    </section>

    <section class="planner" id="planner" aria-live="polite">
      <header class="hero">
        <div><p class="eyebrow">QINGDAO · SEP 11—13</p><h2>칭다오 <span>여행</span></h2></div>
        <div class="hero-weather hidden" aria-label="칭다오 날씨"></div>
      </header>
      <nav class="tabs" aria-label="여행 일정 탭">
        <button class="tab active" data-tab="checklist">소개</button>
        <button class="tab" data-tab="day1">1일차</button>
        <button class="tab" data-tab="day2">2일차</button>
        <button class="tab" data-tab="day3">3일차</button>
      </nav>
      <div id="content"></div>
    </section>
  </main>
  <dialog id="detailModal"><div class="sheet-handle" aria-hidden="true"></div><button class="modal-close" id="closeModal" aria-label="닫기">×</button><div id="modalContent"></div></dialog>
  <script src="amap.config.js"></script>
  <script src="app.js"></script>
</body>
</html>
