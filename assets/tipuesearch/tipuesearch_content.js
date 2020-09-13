var tipuesearch = {"pages": [{
    "title": "win32 의 COM Reference Counting",
    "text": "출처: Microsoft COM Interfaces 에 한가지 중요한 규칙이 엤는데 이는 IUnknown 이라는 인터페이스를 반드시 상속받는 다는 것이다. IUnknown 는 밑에 언급되는 세 가지 Methods를 가지고 있다. QueryInterface AddRef Release QueryInterfaec는 프로그램이 객체의 capabilities를 query 할 수 있게 해준다. AddRef 와 Release 는 object의 라이프 타임을 결정하게 해주는 중요한 녀석이다. 모든 COM object는 내부 카운트를 유지한다. 이것을 reference count라고 부르고 이는 해당 객체를 참고하는 녀석이 몇 개나 활성화 되어있는가를 보여주는 거를 일겉는다. 그 숫자가 0에 달했을 시 그 object는 스스로 삭제시킨다. 중요한 부분은 스스로 프로그램이 명시적으로 삭제하는 것이 아니라 객체 스스로 없어진다는 것이다. 프로그램이 처음 만들어지면 reference count는 1이 된다. 그리고 해당 프로그램의 사용을 마친 후 반드시 release를 통해 reference count 를 1감소 시켜야 한다. 이를 통해 객체의 포인터를 무효화(정지?비스무리) 를 시킬 수 있다. 만약 객체의 주소를 다른 포인터 변수에 저장할 일이 있을 때는 AddRef 함수를 통해 reference count를 1 증가시켜줘야만 한다. 다음 사진과 같이 만약 두 개의 포인터 변수(p,q)가 한 개의 주소를 갖고 있고 AddRef를 하지 않았을 땐 ref count가 1일 것이다. 이때 p가 일을 마치고 release를 하면 값이 0이 되고 q는 무효한 변수로 남게된다. 때문에 변수값을 다른 변수에 저장시 AddRef 호출은 반드시 필요하다. 그런데, 객체 주소를 다른 포인터 변수에 저장하는 이유는 무엇일까? 두 가지 이유가 있다. 첫 번째, structur 나 list 에 저장하기를 원할 때. 두 번째, 포인터 current scope 을 넘어서 사용하고 싶을 때. - [전역변수] 전역 후에 오랜만에 win32를 다시 훑는 중인데 확실히 원어로 접하는게 내용수준도 깊고 좋은 것 같다. 다만 읽는데 아직 좀 버거워서 힘들지만 ㅋㅋ 영어 공부도 병행하면서 틈틈히 전공지식도 늘려가는게 좋을 것 같다.",
    "tags": "memo win32 CPP COM",
    "url": "https://jeheecheon.github.io/memo/win32/2020/09/13/"
  },{
    "title": "jekyll 개인 블로그 개설!",
    "text": "jekyll 블로그 개설! 블로그 이주했습니다! jekyll(static site generator) 을 프론트엔드 공부 중에 알게돼서 공부도할겸 블로그 theme 을 직접 만들어봤습니다. 근데 이게.. 그냥 네이버, 다음 블로그처럼 클릭 몇 번 하면 똿! 하고 만들어지던거 생각하면서 가볍게 시작했는데 생각보다 코드도 꽤 길어지고 쉽지 않았습니다.. 예를 들자면.. html에서 태그 네이밍, 구성 css에서는 float, 익스플로러 호환.. , 메뉴바, 사이드 바(프로필 바, 카테고리 바) js 는 event listenr, 윈도우 크기 변경 시 메뉴바 크기 재조정.., 메뉴바 클릭 구현, 카테고리 구현 등등 뭐,,,, 버그도 많았고 삽질도 몇 번 하며 개고생 한 감이 없지않아 있지만.. 그래도 이렇게 직접 만들어보면서 html, js, css 틀이 머릿속에 전반적으로 잡히게 된 점은 좋았네요. 그리고 이게 군대 사지방에서 공부하면서 만들게 된거라서 개인적으로 좀 뿌듯하기도 하구요. 게시물 주제는 앞으로도 마찬가지로 프로그래밍 공부 기록 및 정보 공유 위주 포스팅이 될 것 같습니다. 이주 전 네이버 블로그",
    "tags": "jekyll blog 블로그 개설 daily-life",
    "url": "https://jeheecheon.github.io/daily-life/2020/08/29/my-blog/"
  }]};
