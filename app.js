const trip = {
  checklist: [
    ['필수 서류 · 환전', ['여권', '비자 · 입국 서류 확인', '위챗페이 / 알리페이 등록', '위안화 환전', '여행자 보험']],
    ['전자기기', ['보조배터리', 'eSIM · 데이터 연결', '충전 케이블', '여행용 어댑터']],
    ['의류 · 세면도구', ['기본 착장 · 바람막이', '세면도구', '숙취해소제', '정장제 · 상비약']]
  ],
  days: {
    day1: {title:'1일차', sub:'입국 · 호텔 체크인', events:[
      ['22:55','SC4620 · 칭다오 공항','', '22:55 출발 · 23:40 칭다오 공항 도착','입국 수속 후 위챗페이 또는 알리페이를 켜두세요.', [120.392,36.267], '비행 45분 · 항공권 확인'],
      ['23:40','칭다오 5·4광장 MIXC 루이마이 호텔','', '공항에서 호텔로 이동 후 체크인','호텔 주소: 江西路35号戊4号楼. 늦은 시간 도착이므로 이동 방법을 미리 확인해 두세요.', [120.384,36.083], '체크인 14:00~ · 체크아웃 12:00']
    ]},
    day2: {title:'2일차', sub:'시장 · 맥주 · 야경', events:[
      ['08:30','해박하 조시 (海泊河早市)','', '현지 아침시장에서 가볍게 하루를 시작합니다.','06:00부터 08:30까지 운영하는 이른 시장이라 08:30 일정은 막바지예요.', [120.354,36.100], '06:00–08:30 · 입장 무료'],
      ['10:30','칭다오 맥주박물관','https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80', '신선한 원장맥주 시음과 기념품 쇼핑.','9월은 08:00–18:30 운영, 17:30 입장 마감 기준입니다.', [120.348,36.089], '08:00–18:30 · 약 ¥60부터'],
      ['12:30','중산로','https://newbbs-fd.zol-img.com.cn/t_s1200x5000/g7/M00/0C/02/ChMkK2Xy-NuIHAEhAAPKTgyeEfsAAbxhQPk2BwAA8pm423.jpg', '칭다오 구시가지 거리 산책.','유럽풍 건물과 상점이 이어지는 무료 산책 코스입니다.', [120.319,36.074], '상시 · 무료'],
      ['13:00','메이다얼 · 식사','', '중산로 근처에서 점심 식사.','대기 시간이 있으면 다음 아이스크림 일정과 조정하세요.', [120.320,36.075], '점심 · 1인 약 ¥30–60'],
      ['14:00','야인선생 아이스크림','', '중산로 산책 중 아이스크림 휴식.','사진을 남기기 좋은 잠깐의 쉼표예요.', [120.322,36.076], '1개 약 ¥15–30'],
      ['16:30','MIXC Mall','', '쇼핑과 휴식 시간.','5·4광장과 가까워 저녁 동선이 좋습니다.', [120.409,36.067], '보통 10:00–22:00 · 입장 무료'],
      ['19:00','타이동 야시장','https://aos-comment.amap.com/B0JGLUEK73/comment/4E58CD98_EB96_4717_8252_B7BD2298C781_L0_001_2000_150_1757152896508_57208115.jpg', '현지 먹거리와 야시장 구경.','인기 가게는 줄이 길 수 있어요.', [120.364,36.092], '저녁 중심 · 음식 약 ¥10–50'],
      ['21:30','5·4광장 야경','https://ak-d.tripcdn.com/images/1mi5j224x98azf0toF6F3.jpg?proc=source%2Ftrip', '칭다오 대표 야경 스폿.','바람이 차가울 수 있어 겉옷을 챙기세요.', [120.414,36.066], '상시 · 무료'],
      ['22:30','하이디라오','', '늦은 저녁 또는 야식.','마감 시간을 미리 확인해 두세요.', [120.409,36.067], '보통 심야 운영 · 1인 약 ¥80–150']
    ]},
    day3: {title:'3일차', sub:'장보기 · 전망 · 귀국', events:[
      ['09:00','따룬파 슈퍼마켓 · 닝샤점','', '기념품과 마지막 장보기.','맥주와 액체류는 위탁 수하물 규정을 확인하세요.', [120.392831,36.081544], '08:00–22:00 · 입장 무료'],
      ['10:30','호텔 체크아웃','', '짐을 챙기고 체크아웃합니다.','공항 이동 전 호텔 보관 서비스를 확인하세요.', [120.384,36.083], '12:00 전 체크아웃'],
      ['11:30','MIXC Mall','', '점심 전 마지막 쇼핑 또는 휴식.','시간이 부족하면 이 일정을 생략할 수 있어요.', [120.409,36.067], '보통 10:00–22:00 · 입장 무료'],
      ['13:00','신호산 또는 소어산 공원','https://n.sinaimg.cn/spider20210825/191/w1024h767/20210825/2998-910539947a1a24554881e1d498f89e46.jpg', '칭다오 빨간 지붕 전경을 담는 전망 산책.','두 장소 중 컨디션과 이동 동선에 맞춰 하나를 선택하세요.', [120.330,36.071], '신호산 08:00–17:30 · ¥5부터'],
      ['14:00','1/4 Photo · 사진','', '여행 마지막 사진 촬영.','공항 출발 전 시간 여유를 꼭 확보하세요.', [120.318,36.073], '가격·예약은 매장 확인'],
      ['15:20','칭다오 공항 이동','', '15:20~15:30 사이 공항으로 출발.','출국 수속과 면세점 시간을 고려하세요.', [120.392,36.267], '공항 도착 권장 16:30 전'],
      ['18:30','SC4617 · 산동항공','', '18:30 출발 · 20:45 도착 예정','탑승구와 수하물을 최종 확인하세요.', [120.392,36.267], '비행 2시간 15분 · 항공권 확인']
    ]}
  }
};
const placeInfo = {
  'SC4620 · 칭다오 공항':['青岛胶东国际机场','青岛市胶州市胶东街道航安路'],
  '칭다오 5·4광장 MIXC 루이마이 호텔':['青岛五四广场万象城芮迈酒店','青岛市市南区江西路35号戊4号楼'],
  '해박하 조시 (海泊河早市)':['海泊河早市','青岛市市北区海慈医院北门附近'],
  '칭다오 맥주박물관':['青岛啤酒博物馆','青岛市市北区登州路56号'],
  '중산로':['中山路','青岛市市南区中山路'],
  '메이다얼 · 식사':['美达尔烧烤','青岛市市南区中山路周边'],
  '야인선생 아이스크림':['野人先生','青岛市市南区中山路周边'],
  'MIXC Mall':['青岛万象城','青岛市市南区山东路6号'],
  '타이동 야시장':['台东步行街','青岛市市北区台东三路'],
  '5·4광장 야경':['五四广场','青岛市市南区东海西路'],
  '하이디라오':['海底捞火锅（青岛万象城店）','青岛市市南区山东路6号青岛万象城'],
  '따룬파 슈퍼마켓 · 닝샤점':['大润发（宁夏店）','青岛市市南区宁夏路162号'],
  '호텔 체크아웃':['青岛五四广场万象城芮迈酒店','青岛市市南区江西路35号戊4号楼'],
  '신호산 또는 소어산 공원':['信号山公园 / 小鱼山公园','青岛市市南区龙山路17号 / 福山支路24号'],
  '1/4 Photo · 사진':['1/4 PHOTO','정확한 중국어 주소 확인 필요'],
  '칭다오 공항 이동':['青岛胶东国际机场','青岛市胶州市胶东街道航安路'],
  'SC4617 · 산동항공':['青岛胶东国际机场','青岛市胶州市胶东街道航安路']
};
const content = document.querySelector('#content');
const tabs = document.querySelectorAll('.tab');
const saved = JSON.parse(localStorage.getItem('qingdao-checklist') || '{}');
let activeMap;

function showChecklist(){
  content.innerHTML = `<div class="section-heading"><div><h3>여행 준비</h3><p class="day-sub">출발 전에 하나씩 체크해요</p></div></div><div class="notice">여권과 모바일 결제 등록은 출발 전날 다시 한번 확인해요.</div>${trip.checklist.map(([category,items],i)=>`<details class="check-group" ${i===0?'open':''}><summary>${category}<span>${items.length}</span></summary>${items.map((item,n)=>{const key=`${i}-${n}`;return `<label class="check-item"><input type="checkbox" data-key="${key}" ${saved[key]?'checked':''}/><span>${item}</span></label>`}).join('')}</details>`).join('')}`;
  content.querySelectorAll('input').forEach(input=>input.addEventListener('change',e=>{saved[e.target.dataset.key]=e.target.checked;localStorage.setItem('qingdao-checklist',JSON.stringify(saved))}));
}

function getInfo(e){return placeInfo[e[1]] || [e[1], '주소 확인 필요']}
function imagesFor(e){return Array.isArray(e[2])?e[2]:(e[2]?[e[2]]:[])}
function imageSlot(name,url=''){ return url ? `<div class="image-slot has-image"><img src="${url}" alt="${name}"/><small>${name}</small></div>` : `<div class="image-slot"><span>사진 추가</span><small>${name}</small></div>` }
function mapPanel(day){return `<section class="map-panel"><div class="map-topline"><b>오늘의 동선</b><span>${day.events.length}곳 방문</span></div><div id="amap-canvas"><div class="map-loading">지도 불러오는 중</div></div><div class="route-summary">${day.events.map((e,i)=>`<span><i>${i+1}</i>${e[1]}</span>`).join('<b>→</b>')}</div></section>`}
function showDay(key){
  const day=trip.days[key];
  content.innerHTML=`<div class="section-heading"><div><h3 class="day-title">${day.title}</h3><p class="day-sub">${day.sub}</p></div></div>${mapPanel(day)}<div class="schedule-label">일정 ${day.events.length}개</div><div class="timeline">${day.events.map((e,i)=>{const info=getInfo(e);return `<article class="event" id="schedule-${key}-${i}" data-day="${key}" data-event="${i}"><time class="event-time">${e[0]}</time><span class="event-dot">${i+1}</span><div class="event-card"><div class="event-copy"><div class="event-label">${e[0]}</div><h4>${e[1]}</h4><p class="chinese-name">${info[0]}</p><button class="address" data-address="${info[1]}">${info[1]} <span>↗</span></button><p>${e[3]}</p><div class="event-meta">${e[6]}</div></div>${imageSlot(e[1],imagesFor(e)[0])}</div></article>`}).join('')}</div>`;
  content.querySelectorAll('.event').forEach(el=>el.addEventListener('click',()=>openModal(trip.days[el.dataset.day].events[el.dataset.event])));
  content.querySelectorAll('.address').forEach(addressControl=>bindAddress(addressControl));
  initAmap(day.events,key);
}

function loadAmap(){
  if(window.AMap) return Promise.resolve(window.AMap);
  if(window.__amapLoading) return window.__amapLoading;
  window.__amapLoading = new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.src=`https://webapi.amap.com/maps?v=2.0&key=${window.AMAP_CONFIG?.key || ''}&plugin=AMap.Driving`;
    script.onload=()=>resolve(window.AMap); script.onerror=reject; document.head.append(script);
  });
  return window.__amapLoading;
}

function initAmap(events,dayKey){
  if(!window.AMAP_CONFIG?.key){document.querySelector('#amap-canvas').innerHTML='<div class="map-loading">고덕지도 설정을 확인해 주세요</div>';return}
  loadAmap().then(AMap=>{
    const canvas=document.querySelector('#amap-canvas'); if(!canvas) return;
    if(activeMap) activeMap.destroy();
    activeMap=new AMap.Map('amap-canvas',{zoom:12,center:events[0][5],viewMode:'2D',showLabel:false});
    const line=new AMap.Polyline({path:events.map(e=>e[5]),strokeColor:'#55bf25',strokeWeight:5,strokeOpacity:.95,lineJoin:'round',lineCap:'round'}); activeMap.add(line);
    const markers=events.map((e,i)=>{const image=imagesFor(e)[0];const marker=new AMap.Marker({position:e[5],content:`<div class="amap-pin">${image?`<img src="${image}" alt=""/>`:`<span>${i+1}</span>`}<b>${i+1}</b></div>`,offset:new AMap.Pixel(-20,-36),title:e[1]}); marker.on('click',()=>document.querySelector(`#schedule-${dayKey}-${i}`)?.scrollIntoView({behavior:'smooth',block:'center'})); return marker}); activeMap.add(markers); activeMap.setFitView([...markers,line],[34,26,34,26]);
    if(events.length>1 && AMap.Driving){const driving=new AMap.Driving({policy:AMap.DrivingPolicy.LEAST_TIME}); driving.search(events[0][5],events.at(-1)[5],{waypoints:events.slice(1,-1).map(e=>e[5])},(status,result)=>{if(status==='complete'&&result.routes?.[0]){const path=result.routes[0].steps.flatMap(step=>step.path);line.setPath(path);}})}
  }).catch(()=>{const el=document.querySelector('#amap-canvas');if(el)el.innerHTML='<div class="map-loading">지도를 불러오지 못했습니다</div>'});
}

const modal=document.querySelector('#detailModal');
function openModal(e){const info=getInfo(e), images=imagesFor(e);const gallery=images.length?`<div class="modal-gallery">${images.map((url,i)=>`<img class="gallery-image ${i?'is-hidden':''}" src="${url}" alt="${e[1]}"/>`).join('')}<span class="image-count">1 / ${images.length}</span>${images.length>1?'<button class="gallery-next" aria-label="다음 사진">›</button>':''}</div>`:`<div class="modal-gallery">${imageSlot(e[1])}<span class="image-count">1 / 1</span></div>`;document.querySelector('#modalContent').innerHTML=`${gallery}<div class="modal-copy"><p class="eyebrow">${e[0]} · 일정 상세</p><h3>${e[1]}</h3><p class="chinese-name">${info[0]}</p><button class="address" data-address="${info[1]}">${info[1]} <span>↗</span></button><p>${e[3]}</p><div class="tip"><strong>${e[6]}</strong><br>${e[4]}</div></div>`;bindAddress(document.querySelector('#modalContent .address'));bindGallery();modal.showModal()}
function bindGallery(){const next=document.querySelector('.gallery-next');if(!next)return;next.addEventListener('click',()=>{const photos=[...document.querySelectorAll('.gallery-image')];const visible=photos.findIndex(photo=>!photo.classList.contains('is-hidden'));photos[visible].classList.add('is-hidden');const nextIndex=(visible+1)%photos.length;photos[nextIndex].classList.remove('is-hidden');document.querySelector('.image-count').textContent=`${nextIndex+1} / ${photos.length}`})}
function bindAddress(el){let pressTimer;const address=el.dataset.address;el.addEventListener('pointerdown',()=>{pressTimer=setTimeout(async()=>{await navigator.clipboard?.writeText(address);el.classList.add('copied');el.textContent='주소가 복사됐어요';},550)});['pointerup','pointerleave','pointercancel'].forEach(type=>el.addEventListener(type,()=>clearTimeout(pressTimer)));el.addEventListener('click',e=>{if(el.classList.contains('copied')){el.classList.remove('copied');return}e.stopPropagation();window.open(`https://uri.amap.com/marker?position=&name=${encodeURIComponent(address)}&src=qingdao-trip&coordinate=gaode&callnative=1`,'_blank')})}
document.querySelector('#closeModal').onclick=()=>modal.close(); modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
function selectTab(tab){tabs.forEach(t=>t.classList.toggle('active',t===tab));tab.dataset.tab==='checklist'?showChecklist():showDay(tab.dataset.tab)}
tabs.forEach(tab=>tab.addEventListener('click',()=>selectTab(tab)));
let swipeStartX=0; content.addEventListener('pointerdown',e=>{swipeStartX=e.clientX});content.addEventListener('pointerup',e=>{const delta=e.clientX-swipeStartX;if(Math.abs(delta)<70)return;const active=[...tabs].findIndex(t=>t.classList.contains('active'));const next=Math.max(0,Math.min(tabs.length-1,active+(delta<0?1:-1)));if(next!==active)selectTab(tabs[next])});
showDay('day1');tabs.forEach(t=>t.classList.toggle('active',t.dataset.tab==='day1'));
