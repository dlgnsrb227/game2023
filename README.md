# Game Effects
-------------------------------

![gameEffects 썸네일이미지](/public/images/game_thumb.PNG)

##### 레트로 느낌의 페이지를 만들었습니다.
##### 테트리스 게임과 음악 플레이어를 구현했습니다.

### 완성된 site 주소 : [GameEffects][gamelink]
[gamelink]: https://hoong-game.web.app/ "go gameEffects"

------------------------------
## 사용 스택
- gsap : (https://greensock.com/gsap/)의 draggable 효과를 사용하여 폴더가 드래그 될 수 있도록 구현했습니다.
- Vite : (https://vitejs.dev/)를 사용하여 번들링했습니다.
- firebase : (https://firebase.google.com/?hl=ko)를 사용해 사이트를 배포했습니다.
- html, css 를 사용하여 기본적인 페이지를 구성했습니다.

-----------------------------------
## Vite는
 - 개발 서버 제공: Vite는 개발을 위한 빠르고 가벼운 개발 서버를 제공합니다. 이 서버는 모듈을 즉시 변환하여 브라우저에서 사용할 수 있게 해줍니다. 이는 기존의 번들링 과정 없이 개발을 빠르게 진행할 수 있게 해주며, 특히 큰 프로젝트에서 시간을 절약할 수 있습니다.
 - Hot Module Replacement (HMR): Vite는 개발 서버에서 코드 변경을 감지하고 해당 모듈만 즉시 업데이트하는 Hot Module Replacement를 지원합니다. 이 기능은 페이지를 새로고침하지 않고도 바로 변경사항을 확인할 수 있게 해주어 개발 효율성을 크게 향상시킵니다.
 - 생산 환경을 위한 빌드: Vite는 생산 환경을 위한 최적화된 빌드도 지원합니다. 이는 Rollup 기반으로 동작하며, 최종적으로 모든 코드를 하나 또는 여러 번들로 최적화하고 미니파이합니다.
 - 다양한 프레임워크 지원: Vite는 Vue, React, Preact, LitElement 등 다양한 프론트엔드 프레임워크와 호환됩니다.
 - 플러그인 시스템: Vite는 Rollup 플러그인과 호환되는 플러그인 시스템을 가지고 있습니다. 이를 통해 많은 기능을 추가할 수 있습니다.


## Firebase는
 - Firebase Authentication: 사용자 인증을 위한 강력한 서비스로, 이메일과 비밀번호 인증부터 Google, Facebook 등의 소셜 미디어 계정을 이용한 인증까지 다양한 방식을 지원합니다.
 - Cloud Firestore: 확장 가능한 NoSQL 클라우드 데이터베이스로, 데이터를 동기화하고 애플리케이션을 오프라인에서도 작동하도록 해줍니다.
 - Firebase Storage: 파일 업로드 및 다운로드를 위한 간단하고 안전한 서비스입니다. 사용자가 생성한 컨텐츠나 멀티미디어 파일을 저장하고 공유하는 데 이상적입니다.
 - Firebase Hosting: 정적 웹 호스팅을 제공하며, 웹 사이트의 파일을 전세계에 배포하고, 빠르고 안정적인 웹 경험을 제공합니다.
 - Firebase Cloud Messaging: 알림 메시지 및 데이터 메시지를 무료로 안전하게 전송할 수 있게 해주는 서비스입니다.
 - Firebase Analytics: 무료 앱 분석 솔루션으로, 앱 사용에 대한 통찰력을 제공하며, 데이터 기반의 의사결정을 돕습니다.
