var tipuesearch = {"pages": [{
    "title": "르누아르 ZenBook 구매후기 UM425IA-AM038",
    "text": "어떻게 하면 나도 싸게 좋은 노트북을 건질 수 있을까하며 고민끝에! 대망의 빅스마일데이 이벤트를 통해 ASUS의 이쁘고 깐지쩌는 노트북!! 저도 갖게 되었네요 ㅠㅠ 사실 구입 전부터 저의 희망사항이 가성비 깡패 르누아르 cpu RAM 16 디스플레이 dp 지원 pd 충전 지원 이랬지만 대부분 온보드램이라 램확장이 불가능했고 설령 가능한 제품이라해도 다른 사양에 하자가 많아서 선택지가 많지 않았어요. 굳이 추려보면 renova slim5와 renova slim7 그리고 한성 제품 올데이롱(?) 와 asus UM425IA-AM038! 이렇게 4개였습니다. 그.러.나! 한성 제품은 윈도우 운영체제와 노트북 소프트웨어간의 기능 오류로 인한 잦은 블루스크린 문제.. slim5는 다소 무거운 무게와 판매자의 양심없는 가격 폭등..ㅠㅠ 그리고 slim7은 다 좋았지만 쓸데없어 보일정도로 비싼가격..그리고 renova 의 썩좋지않은 as… 그래서 끝내 빅스마일데이를 통해 좋은 가격에 실물깡패 asus 젠북을 건지게 되었습니다!! 20201104_122639_53320201104_122713_28420201104_122743_49420201104_122842_774 혹시 지금 살까 망설이고 계신 분들을 위해 제가 사용하면서 느낀 장단점을 간력하게 알려드리겠습니다. 장점 휴대하기 최고의 노트북. 가볍고 c타입으로 충전이 가능하기 때문에 예비 보조배터리 하나만 챙겨주면 준비물 끝. 조용하다. 확장성. 나쁘지 않다. 왼쪽 c포트 두개와 hdmi 포트 하나. 이걸로 디스플레이 확장은 말다했고 우측에 일반적인 usb포트 하나 와마이크로sd 슬롯 하나가 있다. 사운드 들어줄만 하다. 맥북처럼 최고는 아니지만 견져줄만 하다. 노트북에 sound by harman/ kardon 이라고 쓰여저 있는데 뭔지는 모르겠다. 그냥 좋다. 키보드 키감이 좋다. 쫀득쫀득한 키감. 맥북이랑 약간 비슷하면서도 다르다. 터치패드에 숫자패드 기능이 있다. 꽤 편하다. 간지도 난다ㅎㅎ 예쁘다. 그냥 단점 모니터 밝기가 250nit. 보통 300nit 이상인데 이 부분은 좀 아쉽다. 다만 실측 밝기는 280이라 하고 용도가 실내에서만 쓰는 것이라면 전혀 부족하지 않아서 중간으로 설정해놓고 사용해도 충분하다. 터치패드. 이전에 맥북 사용자로써 맥북만큼 터치패드가 좋지는 않다. 터치 오류가 잦고 마우스를 자꾸 찾게되는 것 같다. 아마 맥북쓰고 나서 기대치가 높아져서 그런 것 같다. 랜선 포트가 없다. 대신 wifi6 까지 지원한다. 외국 브랜드 치고 as 좋은 편이지만 삼성엘지만큼은 좋지 못하다. 전원 버튼이 미스타이핑 하기 좋은 위치에 있다… 배터리가 엄청 오래가는 편은 아닌 것 같다.",
    "tags": "데일리에이수스 노트북 후기 리뷰 review asus 젠북 zenbook daily-life",
    "url": "https://jeheecheon.github.io/daily-life/2020/11/04/daily-life/"
  },{
    "title": "DPI",
    "text": "Dots per inch (DPI) In typography, the size of type is measured in units called points. One point equals 1/72 of an inch. physical inches are not a useful measure, because there is no fixed relation between physical inches and pixels. Instead, fonts are measured in logical units. A 72-point font is defined to be one logical inch tall. Logical inches are then converted to pixels. or many years, Windows used the following conversion: One logical inch equals 96 pixels. 12 points = 12/72 logical inch = 1/6 logical inch = 96/6 pixels = 16 pixels This scaling factor is described as 96 dots per inch (DPI). The following illustration shows a 72-point font. The solid lines show a 1” tall bounding box around the text. The dashed line is called the baseline. Most of the characters in a font rest on the baseline. The height of the font includes the portion above the baseline (the ascent) and the portion below the baseline (the descent). In the font shown here, the ascent is 56 points and the descent is 16 points. 출처: Microsoft",
    "tags": "memo win32 DPI graphic",
    "url": "https://jeheecheon.github.io/memo/win32/2020/09/17/win32/"
  },{
    "title": "win32 의 COM Reference Counting",
    "text": "공부하면서 중요한 부분만 발췌했기 때문에 문맥이 매끄럽지 못하고 부정확한 부분이 있음. COM Interfaces 에 한가지 중요한 규칙이 있는데 이는 IUnknown 이라는 인터페이스를 반드시 상속받는 다는 것이다. IUnknown 는 밑에 언급되는 세 가지 Methods를 가지고 있다. QueryInterface AddRef Release QueryInterfaec는 프로그램이 객체의 capabilities를 query 할 수 있게 해준다. AddRef 와 Release 는 object의 라이프 타임을 결정하게 해주는 중요한 녀석이다. 모든 COM object는 내부 카운트를 유지한다. 이것을 reference count라고 부르고 이는 해당 객체를 참고하는 녀석이 몇 개나 활성화 되어있는가를 보여주는 거를 일겉는다. 그 숫자가 0에 달했을 시 그 object는 스스로 삭제시킨다. 중요한 부분은 프로그램이 명시적으로 삭제하는 것이 아니라 객체 스스로 없어진다는 것이다. 프로그램이 처음 만들어지면 reference count는 1이 된다. 그리고 해당 프로그램의 사용을 마친 후 반드시 release를 통해 reference count 를 1감소 시켜야 한다. 이를 통해 객체의 포인터를 무효화(정지) 를 시킬 수 있다. 만약 객체의 주소를 다른 포인터 변수에 저장할 일이 있을 때는 AddRef 함수를 통해 reference count를 1 증가시켜줘야만 한다. 다음 사진과 같이 만약 두 개의 포인터 변수(p,q)가 한 개의 주소를 갖고 있고 AddRef를 하지 않았을 땐 ref count가 1일 것이다. 이때 p가 일을 마치고 release를 하면 값이 0이 되고 q는 무효한 변수로 남게된다. 때문에 변수값을 다른 변수에 저장시 AddRef 호출은 반드시 필요하다. 그런데, 객체 주소를 다른 포인터 변수에 저장하는 이유는 무엇일까? 두 가지 이유가 있다. 첫 번째, structur 나 list 에 저장하기를 원할 때. 두 번째, 포인터 current scope 을 넘어서 사용하고 싶을 때. - [전역변수] 전역 후에 오랜만에 win32를 다시 훑는 중인데 확실히 원어로 접하는게 내용수준도 깊고 좋은 것 같다. 다만 읽는데 아직 좀 버거워서 힘들지만 ㅋㅋ 영어 공부도 병행하면서 틈틈히 전공지식도 늘려가는게 좋을 것 같다. 출처: Microsoft",
    "tags": "memo win32 CPP COM",
    "url": "https://jeheecheon.github.io/memo/win32/2020/09/13/win32/"
  },{
    "title": "jekyll 개인 블로그 개설!",
    "text": "jekyll 블로그 개설! 블로그 이주했습니다! jekyll(static site generator) 을 프론트엔드 공부 중에 알게돼서 공부도할겸 블로그 theme 을 직접 만들어봤습니다. 근데 이게.. 그냥 네이버, 다음 블로그처럼 클릭 몇 번 하면 똿! 하고 만들어지던거 생각하면서 가볍게 시작했는데 생각보다 코드도 꽤 길어지고 쉽지 않았습니다.. 예를 들자면.. html에서 태그 네이밍, 구성 css에서는 float, 익스플로러 호환.. , 메뉴바, 사이드 바(프로필 바, 카테고리 바) js 는 event listenr, 윈도우 크기 변경 시 메뉴바 크기 재조정.., 메뉴바 클릭 구현, 카테고리 구현 등등 뭐,,,, 버그도 많았고 삽질도 몇 번 하며 개고생 한 감이 없지않아 있지만.. 그래도 이렇게 직접 만들어보면서 html, js, css 틀이 머릿속에 전반적으로 잡히게 된 점은 좋았네요. 그리고 이게 군대 사지방에서 공부하면서 만들게 된거라서 개인적으로 좀 뿌듯하기도 하구요. 게시물 주제는 앞으로도 마찬가지로 프로그래밍 공부 기록 및 정보 공유 위주 포스팅이 될 것 같습니다. 이주 전 네이버 블로그",
    "tags": "jekyll blog 블로그 개설 daily-life",
    "url": "https://jeheecheon.github.io/daily-life/2020/08/29/daily-life/"
  }]};
