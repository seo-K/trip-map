const trip = {
  days: {
    day1: {
      title: "1일차",
      sub: "입국 · 호텔 체크인",
      events: [
        [
          "22:55",
          "SC4620 · 칭다오 공항",
          "images/airport.jpg",
          "22:55 출발 · 23:40 칭다오 공항 도착",
          "조용히 입국 수속하기",
          [120.0934, 36.3623],
          "비행 45분 · 항공권 확인",
        ],
        [
          "23:40",
          "호텔",
          "images/hotel.jpg",
          "공항에서 호텔로 이동 후 체크인",
          "호텔 주소: 江西路35号戊4号楼. 青岛五四广场万象城 芮迈酒店",
          [120.3798, 36.0698],
          "체크인 14:00~ · 체크아웃 12:00",
        ],
      ],
    },
    day2: {
      title: "2일차",
      sub: "시장 · 맥주 · 야경",
      events: [
        ["08:30", "호텔", "images/hotel.jpg", "호텔 출발", "", [120.3798, 36.0698], ""],
        [
          "09:00",
          "해박하 아침시장 (海泊河早市)",
          "images/haibohe-market.jpg",
          "현지 아침시장",
          "산동만두, 면 등 조식 및 과일 구매",
          [120.3597, 36.0948],
          "06:00–11:00",
        ],
        [
          "10:30",
          "칭다오 맥주박물관",
          "images/beer-museum.jpg",
          "신선한 원장맥주 시음과 기념품 쇼핑.",
          "9월은 08:00–18:30 운영, 17:30 입장 마감 기준입니다.",
          [120.3477, 36.0792],
          "운영 시간 :: 08:00–18:30 · 입장료 13,000원부터",
        ],
        [
          "12:30",
          "중산로",
          "https://newbbs-fd.zol-img.com.cn/t_s1200x5000/g7/M00/0C/02/ChMkK2Xy-NuIHAEhAAPKTgyeEfsAAbxhQPk2BwAA8pm423.jpg",
          "독일 조계지 시절부터 발전한 역사적인 거리",
          "유럽풍 건물과 중국식 상점이 함께 있어 옛 칭다오 분위기를 느끼기 좋음",
          [120.3187, 36.07],
          "상시 · 무료",
        ],
        [
          "13:00",
          "메이다얼 · 식사",
          "images/meidaer.jpg",
          "美达尔烧烤海鲜家常菜(中山路店) 중산로 근처에서 점심 식사.",
          "가지튀김 바지락볶음",
          [120.3183, 36.0692],
          "점심",
        ],
        [
          "14:00",
          "야인선생 아이스크림",
          "images/yeren-icecream.jpg",
          "野人先生现做冰淇",
          "피스타치오, 헤이즐넛 초콜렛, 쌀 맛 등",
          [120.319, 36.0685],
          "1개 약 6,000원",
        ],
        [
          "16:30",
          "MIX Mall",
          "images/mixc-mall.jpg",
          "쇼핑과 휴식 시간.",
          "미니소, 팝마트, 루이싱, 차지, 몰리티, 라임주, 홀리랜드, 라이프슈퍼",
          [120.3775, 36.0673],
          "영업시간 :: 10:00–22:00",
        ],
        [
          "19:00",
          "타이동 야시장",
          "https://aos-comment.amap.com/B0JGLUEK73/comment/4E58CD98_EB96_4717_8252_B7BD2298C781_L0_001_2000_150_1757152896508_57208115.jpg",
          "현지 먹거리와 야시장 구경.",
          "꿔바로우, 맥주 주식시장",
          [120.3576, 36.0815],
          "저녁 간식",
        ],
        [
          "21:30",
          "5·4광장 야경",
          "https://ak-d.tripcdn.com/images/1mi5j224x98azf0toF6F3.jpg?proc=source%2Ftrip",
          "칭다오 대표 야경 스폿 (오월의 바람)).",
          "1999년에 5·4운동(1919년)을 기념해 조성됨",
          [120.3805, 36.0648],
          "",
        ],
        ["22:30", "하이디라오", "images/haidilao.jpg", "늦은 저녁 또는 야식.", "마감 시간을 미리 확인해 두세요.", [120.3775, 36.0673], "1인 약 20,000원"],
      ],
    },
    day3: {
      title: "3일차",
      sub: "장보기 · 전망 · 귀국",
      events: [
        [
          "09:00",
          "따룬파 슈퍼마켓 · 닝샤점",
          "images/dalunfa.jpg",
          "기념품과 마지막 장보기.",
          "맥주, 과자, 식료품 등 구매가능",
          [120.392831, 36.081544],
          "08:00–22:00",
        ],
        ["10:30", "호텔 체크아웃", "images/hotel.jpg", "짐 챙기고 체크아웃", "공항 이동 전 짐 보관", [120.3798, 36.0698], "12:00 전 체크아웃"],
        ["11:30", "MIX Mall", "images/mixc-mall.jpg", "점심 전 마지막 쇼핑 또는 휴식.", "시간이 부족시 생략 가능.", [120.3775, 36.0673], "10:00–22:00"],
        [
          "13:00",
          "신호산 또는 소어산 공원",
          "https://n.sinaimg.cn/spider20210825/191/w1024h767/20210825/2998-910539947a1a24554881e1d498f89e46.jpg",
          "칭다오 빨간 지붕 전경을 담는 전망 산책.",
          "두 장소 중 컨디션과 이동 동선에 맞춰 하나를 선택",
          [120.3315, 36.0665],
          "신호산 08:00–17:30 · ¥5부터",
        ],
        ["14:00", "1/4 Photo · 사진", "images/quarter-photo.jpg", "여행 단체 사진 촬영.", "", [120.3185, 36.071], "3인 기준 nnn원"],
        [
          "15:20",
          "칭다오 공항 이동",
          "images/airport.jpg",
          "15:20~15:30 사이 공항으로 출발.",
          "공항에도 차자있음.",
          [120.0934, 36.3623],
          "공항 도착 권장 16:30 전",
        ],
        [
          "18:30",
          "SC4617 · 산동항공",
          "images/airport.jpg",
          "18:30 출발 · 20:45 도착 예정",
          "굿바이 칭다오",
          [120.0934, 36.3623],
          "비행 2시간 15분 · 항공권 확인",
        ],
      ],
    },
  },
};
const placeInfo = {
  "SC4620 · 칭다오 공항": ["青岛胶东国际机场", "青岛市胶州市胶东街道航安路"],
  호텔: ["青岛五四广场万象城芮迈酒店", "青岛市市南区江西路35号戊4号楼"],
  "해박하 아침시장 (海泊河早市)": ["海泊河早市", "青岛市市北区海慈医院北门附近"],
  "칭다오 맥주박물관": ["青岛啤酒博物馆", "青岛市市北区登州路56号"],
  중산로: ["中山路", "青岛市市南区中山路"],
  "메이다얼 · 식사": ["美达尔烧烤", "青岛市市南区中山路周边"],
  "야인선생 아이스크림": ["野人先生", "青岛市市南区中山路周边"],
  "MIX Mall": ["青岛万象城", "青岛市市南区山东路6号"],
  "타이동 야시장": ["台东步行街", "青岛市市北区台东三路"],
  "5·4광장 야경": ["五四广场", "青岛市市南区东海西路"],
  하이디라오: ["海底捞火锅（青岛万象城店）", "青岛市市南区山东路6号青岛万象城"],
  "따룬파 슈퍼마켓 · 닝샤점": ["大润发（宁夏店）", "青岛市市南区宁夏路162号"],
  "호텔 체크아웃": ["青岛五四广场万象城芮迈酒店", "青岛市市南区江西路35号戊4号楼"],
  "신호산 또는 소어산 공원": ["信号山公园 / 小鱼山公园", "青岛市市南区龙山路17号 / 福山支路24号"],
  "1/4 Photo · 사진": ["1/4 PHOTO", "정확한 중국어 주소 확인 필요"],
  "칭다오 공항 이동": ["青岛胶东国际机场", "青岛市胶州市胶东街道航安路"],
  "SC4617 · 산동항공": ["青岛胶东国际机场", "青岛市胶州市胶东街道航安路"],
};
const TRIP_DATES = { day1: "2026-09-11", day2: "2026-09-12", day3: "2026-09-13" };
let weatherData = null;

function weatherClass(code) {
  if (code <= 2) return "is-sunny";
  if ([3, 45, 48].includes(code)) return "is-cloudy";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "is-snow";
  if (code >= 51) return "is-rain";
  return "is-cloudy";
}
function weatherIcon(cls) {
  return { "is-sunny": "☀️", "is-cloudy": "☁️", "is-rain": "🌧️", "is-snow": "❄️" }[cls];
}

async function loadWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=36.07&longitude=120.38&current=temperature_2m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=Asia%2FShanghai&forecast_days=16",
    );
    if (!res.ok) throw new Error("weather fetch failed");
    weatherData = await res.json();
    const active = document.querySelector(".tab.active");
    renderWeather(active?.dataset.tab || "checklist");
  } catch {
    document.querySelector(".hero-weather")?.classList.add("hidden");
  }
}

function renderWeather(tabKey) {
  const widget = document.querySelector(".hero-weather");
  const hero = document.querySelector(".hero");
  if (!widget || !hero || !weatherData) return;
  const date = TRIP_DATES[tabKey];
  const dayIndex = date ? weatherData.daily.time.indexOf(date) : -1;
  let temp, code, rainy;
  // 여행일 예보가 아직 범위 밖이면 오늘 날씨로 대신 보여준다.
  let fallback = false;
  if (dayIndex >= 0) {
    code = weatherData.daily.weathercode[dayIndex];
    temp = `${Math.round(weatherData.daily.temperature_2m_min[dayIndex])}°/${Math.round(weatherData.daily.temperature_2m_max[dayIndex])}°`;
    rainy = weatherData.daily.precipitation_sum[dayIndex] > 0;
  } else {
    fallback = !!date;
    code = weatherData.current.weathercode;
    temp = `${Math.round(weatherData.current.temperature_2m)}°`;
    rainy = weatherData.current.precipitation > 0;
  }
  const cls = weatherClass(code);
  widget.classList.remove("hidden");
  widget.innerHTML = `<span class="weather-main">${rainy && cls !== "is-rain" ? "☔ " : ""}${weatherIcon(cls)} <b>${temp}</b></span>${fallback ? '<span class="weather-fallback">오늘 날씨</span>' : ""}`;
  hero.classList.remove("is-sunny", "is-cloudy", "is-rain", "is-snow");
  hero.classList.add("has-weather", cls);
}

const content = document.querySelector("#content");
const tabs = document.querySelectorAll(".tab");
let activeMap;

function showChecklist() {
  content.innerHTML = `<div class="section-heading"><div><h3>칭다오</h3><p class="day-sub">QINGDAO · 青岛 · 산둥성</p></div></div>
  <p class="intro-lead">바다 · 맥주 · 독일풍 건축 · 먹거리를 즐기기 좋은 중국의 대표 해안 관광도시</p>
  <ul class="intro-list">
    <li>칭다오(青岛)는 중국 산둥성에 있는 대표적인 해안도시</li>
    <li>중국에서 가장 유명한 맥주, 칭다오 맥주의 본고장</li>
    <li>독일 조계지였던 역사가 있어 유럽풍 건물이 많음</li>
    <li>바다를 끼고 있어 중국 도시 중에서도 비교적 깨끗하고 쾌적한 편</li>
    <li>해산물, 맥주, 야시장 먹거리가 유명함</li>
    <li>한국에서 비행기로 약 1~2시간대라 주말 여행지로 인기</li>
  </ul>
  <div class="intro-must"><b>필수 준비물</b><span>여권 · 핸드폰 · 체력</span></div>
  <div class="intro-arrival">
    <div class="arrival-head"><b>입국신고서 작성</b><a href="https://s.nia.gov.cn/ArrivalCardFillingPC/entry-registation-home" target="_blank" rel="noopener">작성하러 가기 ↗</a></div>
    <dl class="arrival-list">
      <div><dt>입국 항공편</dt><dd>SC4620</dd></div>
      <div><dt>입국 도시</dt><dd>Qingdao</dd></div>
      <div><dt>입국 통상구</dt><dd>Qingdao Airport</dd></div>
      <div class="em"><dt>유효한 비자 등 입국 허가 소지</dt><dd>아니오</dd></div>
      <div><dt>입국 정책</dt><dd>무비자 입국</dd></div>
      <div class="em"><dt>입국 사유</dt><dd>관광/휴양</dd></div>
      <div class="arrival-addr em"><dt>중국 내 주소 <small>(탭하면 복사)</small></dt><dd data-copy="青岛市市南区江西路35号戊4号楼 青岛五四广场万象城芮迈酒店">青岛市市南区江西路35号戊4号楼<br>青岛五四广场万象城芮迈酒店</dd></div>
    </dl>
  </div>`;
  content.querySelectorAll("[data-copy]").forEach((el) => bindCopy(el));
}

function getInfo(e) {
  return placeInfo[e[1]] || [e[1], "주소 확인 필요"];
}
const COPY_ICON = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>`;
function chineseNameRow(name) {
  return `<p class="chinese-name" data-copy="${name}">${name} <button class="copy-btn" aria-label="중국어 이름 복사">${COPY_ICON}</button></p>`;
}
// 한국 이름 옆의 작은 복사 버튼 — 누르면 중국어 이름이 복사된다.
function nameCopyBtn(chineseName) {
  return `<button class="copy-btn name-copy" data-copy="${chineseName}" aria-label="중국어 이름 복사">${COPY_ICON}</button>`;
}
function bindCopy(el) {
  const text = el.dataset.copy;
  el.addEventListener("click", async (event) => {
    event.stopPropagation();
    await navigator.clipboard?.writeText(text);
    if (el.classList.contains("copied")) return;
    const original = el.innerHTML;
    el.classList.add("copied");
    el.innerHTML = el.classList.contains("name-copy") ? "✓" : "복사됐어요 ✓";
    setTimeout(() => {
      el.classList.remove("copied");
      el.innerHTML = original;
    }, 1200);
  });
}
function imagesFor(e) {
  return Array.isArray(e[2]) ? e[2] : e[2] ? [e[2]] : [];
}
function imageSlot(name, url = "") {
  return url
    ? `<div class="image-slot has-image"><img src="${url}" alt="${name}"/><small>${name}</small></div>`
    : `<div class="image-slot"><span>사진 추가</span><small>${name}</small></div>`;
}
function mapPanel(day) {
  return `<section class="map-panel"><div class="map-topline"><b>오늘의 동선</b><span>${day.events.length}곳 방문</span></div><div id="amap-canvas"><div class="map-loading">지도 불러오는 중</div></div><div class="route-summary">${day.events.map((e, i) => `<span><i>${i + 1}</i>${e[1]}</span>`).join("<b>→</b>")}</div></section>`;
}
function showDay(key) {
  const day = trip.days[key];
  content.innerHTML = `<div class="section-heading"><div><h3 class="day-title">${day.title}</h3><p class="day-sub">${day.sub}</p></div></div>${mapPanel(day)}<div class="schedule-label">일정 ${day.events.length}개</div><div class="timeline">${day.events
    .map((e, i) => {
      const info = getInfo(e);
      return `<article class="event" id="schedule-${key}-${i}" data-day="${key}" data-event="${i}"><time class="event-time">${e[0]}</time><span class="event-dot">${i + 1}</span><div class="event-card"><div class="event-copy"><div class="event-label">${e[0]}</div><h4>${e[1]} ${nameCopyBtn(info[0])}</h4><p>${e[3]}</p><div class="event-meta">${e[6]}</div></div>${imageSlot(e[1], imagesFor(e)[0])}</div></article>`;
    })
    .join("")}</div>`;
  content.querySelectorAll(".event").forEach((el) => {
    const event = trip.days[el.dataset.day].events[el.dataset.event];
    el.addEventListener("click", () => openModal(event));
    const copyBtn = el.querySelector(".name-copy");
    if (copyBtn) bindCopy(copyBtn);
  });
  initAmap(day.events, key);
}

function loadAmap() {
  if (window.AMap) return Promise.resolve(window.AMap);
  if (window.__amapLoading) return window.__amapLoading;
  window.__amapLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${window.AMAP_CONFIG?.key || ""}&plugin=AMap.Driving`;
    script.onload = () => resolve(window.AMap);
    script.onerror = reject;
    document.head.append(script);
  });
  return window.__amapLoading;
}

function initAmap(events, dayKey) {
  if (!window.AMAP_CONFIG?.key) {
    document.querySelector("#amap-canvas").innerHTML = '<div class="map-loading">고덕지도 설정을 확인해 주세요</div>';
    return;
  }
  loadAmap()
    .then((AMap) => {
      const canvas = document.querySelector("#amap-canvas");
      if (!canvas) return;
      if (activeMap) activeMap.destroy();
      activeMap = new AMap.Map("amap-canvas", { zoom: 12, center: events[0][5], viewMode: "2D", showLabel: false });
      const line = new AMap.Polyline({
        path: events.map((e) => e[5]),
        strokeColor: "#b02a30",
        strokeWeight: 5,
        strokeOpacity: 0.95,
        lineJoin: "round",
        lineCap: "round",
      });
      activeMap.add(line);
      // 같은 좌표의 일정(호텔 재방문, 공항 왕복 등)은 핀 하나로 합쳐 숫자가 겹치지 않게 한다.
      const groups = [];
      events.forEach((e, i) => {
        const coordKey = e[5].join(",");
        const found = groups.find((g) => g.coordKey === coordKey);
        if (found) found.indexes.push(i);
        else groups.push({ coordKey, position: e[5], indexes: [i] });
      });
      const markers = groups.map((g) => {
        const first = events[g.indexes[0]];
        const image = imagesFor(first)[0];
        const label = g.indexes.map((i) => i + 1).join("·");
        const marker = new AMap.Marker({
          position: g.position,
          content: `<div class="amap-pin">${image ? `<img src="${image}" alt=""/>` : `<span>${label}</span>`}<b>${label}</b></div>`,
          offset: new AMap.Pixel(-20, -36),
          title: first[1],
        });
        marker.on("click", () => document.querySelector(`#schedule-${dayKey}-${g.indexes[0]}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
        return marker;
      });
      activeMap.add(markers);
      activeMap.setFitView([...markers, line], [34, 26, 34, 26]);
      if (events.length > 1 && AMap.Driving) {
        const driving = new AMap.Driving({ policy: AMap.DrivingPolicy.LEAST_TIME });
        driving.search(events[0][5], events.at(-1)[5], { waypoints: events.slice(1, -1).map((e) => e[5]) }, (status, result) => {
          if (status === "complete" && result.routes?.[0]) {
            const path = result.routes[0].steps.flatMap((step) => step.path);
            line.setPath(path);
          }
        });
      }
    })
    .catch(() => {
      const el = document.querySelector("#amap-canvas");
      if (el) el.innerHTML = '<div class="map-loading">지도를 불러오지 못했습니다</div>';
    });
}

const modal = document.querySelector("#detailModal");
function openModal(e) {
  const info = getInfo(e),
    images = imagesFor(e);
  const gallery = images.length
    ? `<div class="modal-gallery">${images.map((url, i) => `<img class="gallery-image ${i ? "is-hidden" : ""}" src="${url}" alt="${e[1]}"/>`).join("")}<span class="image-count">1 / ${images.length}</span>${images.length > 1 ? '<button class="gallery-next" aria-label="다음 사진">›</button>' : ""}</div>`
    : `<div class="modal-gallery">${imageSlot(e[1])}<span class="image-count">1 / 1</span></div>`;
  document.querySelector("#modalContent").innerHTML =
    `${gallery}<div class="modal-copy"><p class="eyebrow">${e[0]} · 일정 상세</p><h3>${e[1]}</h3>${chineseNameRow(info[0])}<button class="address" data-address="${info[1]}">${info[1]} <span>↗</span></button><p>${e[3]}</p><div class="tip"><strong>${e[6]}</strong><br>${e[4]}</div></div>`;
  bindAddress(document.querySelector("#modalContent .address"), e[5], info[0]);
  bindCopy(document.querySelector("#modalContent .chinese-name"));
  bindGallery();
  document.querySelector("#modalContent").scrollTop = 0;
  modal.showModal();
}
function bindGallery() {
  const next = document.querySelector(".gallery-next");
  if (!next) return;
  next.addEventListener("click", () => {
    const photos = [...document.querySelectorAll(".gallery-image")];
    const visible = photos.findIndex((photo) => !photo.classList.contains("is-hidden"));
    photos[visible].classList.add("is-hidden");
    const nextIndex = (visible + 1) % photos.length;
    photos[nextIndex].classList.remove("is-hidden");
    document.querySelector(".image-count").textContent = `${nextIndex + 1} / ${photos.length}`;
  });
}
function bindAddress(el, coords, name) {
  let pressTimer;
  const address = el.dataset.address;
  el.addEventListener("pointerdown", () => {
    pressTimer = setTimeout(async () => {
      await navigator.clipboard?.writeText(address);
      el.classList.add("copied");
      el.textContent = "주소가 복사됐어요";
    }, 550);
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach((type) => el.addEventListener(type, () => clearTimeout(pressTimer)));
  el.addEventListener("click", (e) => {
    if (el.classList.contains("copied")) {
      el.classList.remove("copied");
      return;
    }
    e.stopPropagation();
    const to = coords ? `${coords[0]},${coords[1]},${encodeURIComponent(name || address)}` : `,,${encodeURIComponent(address)}`;
    window.open(`https://uri.amap.com/navigation?to=${to}&mode=car&coordinate=gaode&src=qingdao-trip&callnative=1`, "_blank");
  });
}
function closeSheet() {
  if (modal.classList.contains("closing")) return;
  modal.classList.add("closing");
  setTimeout(() => {
    modal.classList.remove("closing");
    modal.style.transform = "";
    modal.close();
  }, 230);
}
document.querySelector("#closeModal").onclick = () => closeSheet();
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeSheet();
});
modal.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeSheet();
});
// 시트 드래그로 닫기: 핸들이나 사진을 아래로 끌면 닫힌다.
let sheetY = null;
modal.addEventListener("pointerdown", (e) => {
  if (e.target.closest(".sheet-handle") || e.target.closest(".modal-gallery")) sheetY = e.clientY;
});
modal.addEventListener("pointermove", (e) => {
  if (sheetY === null) return;
  modal.style.transform = `translateY(${Math.max(0, e.clientY - sheetY)}px)`;
});
const sheetDragEnd = (e) => {
  if (sheetY === null) return;
  const delta = e.clientY - sheetY;
  sheetY = null;
  if (delta > 110) closeSheet();
  else {
    modal.style.transition = "transform .2s";
    modal.style.transform = "";
    setTimeout(() => (modal.style.transition = ""), 220);
  }
};
modal.addEventListener("pointerup", sheetDragEnd);
modal.addEventListener("pointercancel", sheetDragEnd);
function selectTab(tab) {
  tabs.forEach((t) => t.classList.toggle("active", t === tab));
  tab.dataset.tab === "checklist" ? showChecklist() : showDay(tab.dataset.tab);
  renderWeather(tab.dataset.tab);
}
tabs.forEach((tab) => tab.addEventListener("click", () => selectTab(tab)));
let swipeStartX = 0;
content.addEventListener("pointerdown", (e) => {
  swipeStartX = e.clientX;
});
content.addEventListener("pointerup", (e) => {
  const delta = e.clientX - swipeStartX;
  if (Math.abs(delta) < 70) return;
  const active = [...tabs].findIndex((t) => t.classList.contains("active"));
  const next = Math.max(0, Math.min(tabs.length - 1, active + (delta < 0 ? 1 : -1)));
  if (next !== active) selectTab(tabs[next]);
});
showDay("day1");
tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === "day1"));
loadWeather();

// 커버 화면: 세션당 한 번만 보여주고, 작전 개시를 누르면 플래너로 진입한다.
const cover = document.querySelector("#cover");
const startBtn = document.querySelector("#startBtn");
if (cover && startBtn) {
  if (!sessionStorage.getItem("cover-seen")) {
    cover.classList.remove("hidden");
    document.querySelector("#planner").classList.add("hidden");
  }
  startBtn.addEventListener("click", () => {
    sessionStorage.setItem("cover-seen", "1");
    cover.classList.add("hidden");
    document.querySelector("#planner").classList.remove("hidden");
    window.scrollTo(0, 0);
    // 숨겨진 상태에서 초기화된 지도는 크기가 0이므로 다시 렌더한다.
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) selectTab(activeTab);
  });
}
