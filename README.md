# 모다독 홍보 홈페이지
모다독 북스터디 홍보 웹 페이지 개발 2024.08 ~ 2024.10 (3人 팀 프로젝트)   
▷ 현재 (2024.10 말 ~ ing) DB에 저장된 '멤버사진'과 SubPage1 에서 보일 '활동사진' 을 비교해서 '멤버 이외의 얼굴' 은 모자이크 처리하는 기능도 구현을 목표로 딥러닝 기반의 얼굴 인식 모델을 사용하기 위한 학습 및 코드 전체 정리중

---   
![모다독 홈페이지](https://github.com/user-attachments/assets/10d92d1e-0f41-41a6-8b89-915cde41f03c) |![subPage1](https://github.com/user-attachments/assets/c97381cc-1699-46c1-a0bf-0f0b024c946b) | ![subPage2](https://github.com/user-attachments/assets/1a785254-1e45-438b-ae85-08f3ab79e3c2) | ![UploadPage](https://github.com/user-attachments/assets/4411cd44-4793-4a95-9ca3-72445736edf8)

---

## 📌 Summary   
* 정기 동아리 활동 규모에 비해 제대로 된 아카이킹 웹사이트가 없었기 때문에 직접 개발
* 최초 웹 개발 구축 경험 (React, JavaScript, Firebase)
* 최초 디자이너 협업 경험 (Figma)
* 바닐라 스크립트를 React로 마이그레이션하여 사용자 경험 최적화   
| 주요 기능 : 멤버 이메일 인증, 멤버 인증시 책 업로드 기능, 멤버별 활동 사진 조회, 멤버 조회

## 🤔 Background    
코로나 이후 첫 대면 스터디로 2년간 활동하면서, 초기 목표였던 홍보 페이지 웹사이트 제작을 디자이너 멤버와 함께 진행하게 되었습니다.
웹 프로그래밍을 배우는 단계에서 기술에 대한 정확한 이해가 중요하다고 판단하여, 현재 학습 중인 기술과 환경을 그대로 세팅하여 개발을 진행했습니다. 내년 초에는 백엔드 개발자와 협력하여 최종 배포를 목표로 하고 있습니다.   

## 🔍 Meaning
이 프로젝트는 김종민 인터랙티브 디벨로퍼의 'desk' 프로젝트에서 영감을 받아 시작한, 제 꿈을 웹 개발자로서 본격적으로 펼쳐본 첫 경험이었습니다. HTML, CSS, JavaScript의 구조 이해부터 React까지 3개월 내에 습득해야 했기에 어려움이 있었지만, 그만큼 빠르게 성장할 수 있었습니다. 이 과정에서 시스템 엔지니어로서의 한계를 다시 느끼면서, 웹 개발의 광대한 세계에 매료되었고, 개발자는 요리사처럼 특정 언어와 기술에 한계를 두지 않고 프로젝트에 맞는 도구를 활용해 창의적으로 구현해내는 사람이라는 점을 실감했습니다.   

또한, Figma를 활용해 협업하는 것도 처음이었습니다. 이 과정에서 Figma 사용법뿐 아니라, 디자이너와의 소통 방식과 업무 분배 방법도 배울 수 있었습니다.   

무엇보다 이 프로젝트는 제가 웹 개발자로서 나아가도 되겠다는 확신을 심어주었습니다. 평소 사용해왔던 웹사이트의 동작 방식을 이해하며, 실용적인 서비스를 직접 만들 수 있다는 흥미와 함께, 마침내 꿈을 실현해 나가는 개발자로서 한 단계 성장한 기분을 느꼈습니다.   

## 🔨 Technology Stacks  
 React, JavaScript, Styled-Components, Firebase,  Axios,  Cloudflare   

## 👪 Members   
* 박효진 (Frontend, Backend) : 본인
* 정민지 (UI/UX Designer)
* 김규형 (Backend)

## ⚙️ Setup & Usage   
```
# Install React Packages   
npm install   

# Run Frontend Server   
npm start

# 폴더 구조
src/
├── components/
│   ├── MainPage.js           // 메인 페이지
│   ├── SubPage1.js           // 서브페이지 1
│   ├── SubPage2.js           // 서브페이지 2
│   ├── UploadPage.js         // 업로드 페이지
│   └── BookItem.js           // 책 아이템 컴포넌트
├── App.js                    // 라우팅 설정
├── services/
│   ├── dbService.js          // 데이터베이스 관련 함수들
│   └── authService.js        // 인증 관련 함수들
└── index.js

```
