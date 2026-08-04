# 리얼IT전당포 웹사이트

## 폴더 구조
```
realit-pawnshop/
├─ index.html      메인(홈)
├─ about.html      회사소개
├─ items.html      취급품목
├─ process.html    대출절차
├─ faq.html        자주묻는질문
├─ contact.html    오시는길/상담문의
└─ assets/
   ├─ css/style.css
   ├─ js/main.js
   └─ img/logo.jpg
```

## GitHub Pages 배포 방법
1. 새 저장소 생성 후 이 폴더 전체를 업로드 (또는 `git init` → `git add .` → `git commit` → `git push`)
2. 저장소 Settings → Pages → Branch를 `main` / `root`로 설정하면 자동 배포됩니다.

## 채워야 할 자리 (현재 placeholder 처리됨)
| 위치 | 파일 | 내용 |
|---|---|---|
| 히어로 배경 영상 | index.html `.hero-media` | IT 제품 클로즈업 + 카메라 무빙 영상(mp4) 완성 후 주석 처리된 `<video>` 태그 활성화, placeholder div 삭제 |
| 회사소개 사진 | index.html `about-photo.jpg`, about.html `.media-block` | IT 매입 상담 이미지 |
| 카테고리 사진 5종 | index.html `category-phone/tablet/camera/console/pc.jpg` | 스마트폰·태블릿·카메라·게임기·컴퓨터 |
| 차별화 섹션 이미지 | index.html `diff-photo.jpg` | 감정가 비교 강조용 AI 생성 이미지 |
| 대출절차 사진 | process.html `.media-block` | 상담·감정 과정 이미지 |
| 상담 폼 응답 확인 | 구글폼 응답 탭 | 구글폼 자체 응답 시트에서 확인 (실제로는 커스텀 디자인 폼 → 구글폼 데이터로 전송되는 방식, iframe 아님) |
| 지도 임베드 | contact.html `.map-block` | 카카오맵/구글맵 iframe으로 교체 |
| 카카오톡 채널 링크 | contact.html `.kakao-btn`, 전 페이지 `.kakao-float` | 실제 카카오톡 채널 URL(pf.kakao.com/...)로 교체 |
| 대부업 등록번호 | 전 페이지 상단 `.legal-bar` + footer `.reg-blank` | 발급 후 일괄 교체 (검색: `등록 예정`) |
| 사업자등록번호 | 전 페이지 footer `.reg-blank` | 발급 후 전체 페이지에서 일괄 교체 (검색: `[등록 예정]`) |

## 인터랙션 참고 (디오아시스 스타일)
- **히어로 스크롤 전환**: `.hero-scroll`(320vh) 안에 `.hero`가 `position: sticky`로 고정된 채, 스크롤 위치에 따라 `main.js`의 `heroScrollRotator`가 카피 3종을 순서대로 전환합니다.
- **문장 리빌 효과**: `.reveal-line`으로 감싼 문장이 스크롤 시 하나씩 진하게 나타납니다 (`revealLines` in main.js, IntersectionObserver 사용). 회사소개·차별화 섹션에 적용됨.
- **호버 리빌 카드**: `.reveal-card`에 마우스를 올리면 사진이 흐려지며 상세 설명(`rc-desc`)이 나타납니다. 취급품목 섹션(스마트폰·태블릿·카메라·게임기·컴퓨터)에 적용.
- 아이템(취급품목)이 IT 전용 5종으로 변경되어, `items.html`(전체 취급품목 페이지)도 동일하게 업데이트가 필요하면 별도 요청해주세요.

## 디자인 참고
- 컬러/육각형 모티프는 첨부해주신 로고(네이비+블루 이중 육각형)에서 추출
- 히어로 카피 전환 및 스크롤 유도는 디오아시스 전당포 스타일 참고
- FAQ 구조는 착한전당포 스타일 참고
