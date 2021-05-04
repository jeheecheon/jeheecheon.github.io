var tipuesearch = {"pages": [{
    "title": "OpenGL memo",
    "text": "Source",
    "tags": "OpenGL memo opengl",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/04/OpenGL/"
  },{
    "title": "OpenGL memo",
    "text": "Source",
    "tags": "OpenGL memo opengl",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/03/opengl/"
  },{
    "title": "I made a snake game",
    "text": "Last year, I made a game called snake game following youtube video tutorial. It was not easy for me from the beginning but it quite helped me with understanding basic sutff about CSS and JS. \\ UP LEFT RIGHT DOWN START Made by jeheecheon",
    "tags": "daily-life",
    "url": "https://jeheecheon.github.io/daily-life/2021/01/20/daily-life/"
  },{
    "title": "DIART#1",
    "text": "DIARY TEST",
    "tags": "diary",
    "url": "https://jeheecheon.github.io/diary/2020/12/08/diary/"
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
    "text": "jekyll 블로그 개설! jekyll(static site generator) 을 이용해서 블로그를 새로 만들어 이주했습니다. 게시물 주제는 앞으로도 마찬가지로 프로그래밍 공부 기록 및 정보 공유 위주 포스팅이 될 것 같습니다. 이주 전 네이버 블로그",
    "tags": "jekyll blog 블로그 개설 daily-life",
    "url": "https://jeheecheon.github.io/daily-life/2020/08/29/daily-life/"
  }]};
