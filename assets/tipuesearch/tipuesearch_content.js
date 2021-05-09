var tipuesearch = {"pages": [{
    "title": "Transformations",
    "text": "vector roation 부분은 거의 기억이 나지가 않는다. 기본적인 2D 회전은 이해하겠지만 3D들어가면 힘들 것 같아서 추가로 이부분 공부하고 넘어가야할 것 같다. learnopengl",
    "tags": "OpenGL Transformations memo",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/09/Transformations/"
  },{
    "title": "Coordinate systems",
    "text": "좌표개념은 익숙하지 않은 내용이라 여러번 읽어봐야 겠다. learnopengl",
    "tags": "OpenGL Coordinate Systems memo",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/09/Coordinate-Systems/"
  },{
    "title": "Textures",
    "text": "이해안되는 내용: NEAREST 와 NEAREST 차이는 대충 어떤지 알겠는데 아래 4가지들 차이점은 잘 모르겠다. 나중에 mipmaps 사용할 기회생기면 직접 모두 출력해보면서 눈으로 확인해봐야 겠다. learnopengl",
    "tags": "OpenGL Textures memo",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/07/Textures/"
  },{
    "title": "Shaders",
    "text": "이해안되는 내용: 꼭지점 3개의 색깔을 정하면 Fragment shader가 알아서 자연스럽게 색깔을 잇는다(?)는 건 이해했는데, 내부적으로 어떻게 돌아가는지 궁금함. learnopengl",
    "tags": "OpenGL memo",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/07/Shaders/"
  },{
    "title": "Hello triangle",
    "text": "I din’t know drawing a triangle on screen would be this hard :X I haven’t fully understood it yet but I think I’m getting almost there… 그리고 추가로 아직 책에서 설명 안된 부분 때문인지 뭔가 놓친 기분이 든다. 특히 NDC는 어떻게 사용되는지는 알겠지만 왜 굳이 이 방법을 택했는지 모르겠다. 그냥 처음부터 screen-space coordinates로 설정해서 사용하지 않는 이유가 너무 궁금하다. #include &lt;glad/glad.h&gt; #include &lt;GLFW/glfw3.h&gt; #include &lt;iostream&gt; void framebuffer_size_callback(GLFWwindow* window, int width, int height); void processInput(GLFWwindow* window); // settingsR const unsigned int SCR_WIDTH = 800; const unsigned int SCR_HEIGHT = 600; const char* vertexShaderSource = \"#version 330 core\\n\" \"layout (location = 0) in vec3 aPos;\\n\" \"void main()\\n\" \"{\\n\" \" gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\\n\" \"}\\0\"; const char* fragmentShaderSource = \"#version 330 core\\n\" \"out vec4 FragColor;\\n\" \"void main()\\n\" \"{\\n\" \" FragColor = vec4(1.0f, 0.5f, 0.2f, 1.0f);\\n\" \"}\\n\\0\"; int main(void) { // glfw: initialize and configure // ------------------------------ glfwInit(); glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3); glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3); glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE); #ifdef __APPLE__ glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); #endif // glfw window creation // -------------------- GLFWwindow* window = glfwCreateWindow(SCR_WIDTH, SCR_HEIGHT, \"LearnOpenGL\", NULL, NULL); if (window == NULL) { std::cout &lt;&lt; \"Failed to create GLFW window\" &lt;&lt; std::endl; glfwTerminate(); return -1; } glfwMakeContextCurrent(window); glfwSetFramebufferSizeCallback(window, framebuffer_size_callback); // glad: load all OpenGL function pointers // --------------------------------------- if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) { std::cout &lt;&lt; \"Failed to initialize GLAD\" &lt;&lt; std::endl; return -1; } // glad: load all OpenGL function pointers // --------------------------------------- if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) { std::cout &lt;&lt; \"Failed to initialize GLAD\" &lt;&lt; std::endl; return -1; } // build and compile our shader program // ------------------------------------ // vertex shader unsigned int vertexShader = glCreateShader(GL_VERTEX_SHADER); glShaderSource(vertexShader, 1, &amp;vertexShaderSource, NULL); glCompileShader(vertexShader); // check for shader compile errors int success; char infoLog[512]; glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &amp;success); if (!success) { glGetShaderInfoLog(vertexShader, 512, NULL, infoLog); std::cout &lt;&lt; \"ERROR::SHADER::VERTEX::COMPILATION_FAILED\\n\" &lt;&lt; infoLog &lt;&lt; std::endl; } // fragment shader unsigned int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER); glShaderSource(fragmentShader, 1, &amp;fragmentShaderSource, NULL); glCompileShader(fragmentShader); // check for shader compile errors glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &amp;success); if (!success) { glGetShaderInfoLog(fragmentShader, 512, NULL, infoLog); std::cout &lt;&lt; \"ERROR::SHADER::FRAGMENT::COMPILATION_FAILED\\n\" &lt;&lt; infoLog &lt;&lt; std::endl; } // link shaders unsigned int shaderProgram = glCreateProgram(); glAttachShader(shaderProgram, vertexShader); glAttachShader(shaderProgram, fragmentShader); glLinkProgram(shaderProgram); // check for linking errors glGetProgramiv(shaderProgram, GL_LINK_STATUS, &amp;success); if (!success) { glGetProgramInfoLog(shaderProgram, 512, NULL, infoLog); std::cout &lt;&lt; \"ERROR::SHADER::PROGRAM::LINKING_FAILED\\n\" &lt;&lt; infoLog &lt;&lt; std::endl; } glDeleteShader(vertexShader); glDeleteShader(fragmentShader); // set up vertex data (and buffer(s)) and configure vertex attributes // ------------------------------------------------------------------ float vertices[] = { 0.5f, 0.5f, 0.0f, // top right 0.5f, -0.5f, 0.0f, // bottom right -0.5f, -0.5f, 0.0f, // bottom left -0.5f, 0.5f, 0.0f // top left }; unsigned int indices[] = { // note that we start from 0! 0, 1, 3, // first Triangle 1, 2, 3 // second Triangle }; unsigned int VBO, VAO, EBO; glGenVertexArrays(1, &amp;VAO); glGenBuffers(1, &amp;VBO); glGenBuffers(1, &amp;EBO); // bind the Vertex Array Object first, then bind and set vertex buffer(s), and then configure vertex attributes(s). glBindVertexArray(VAO); glBindBuffer(GL_ARRAY_BUFFER, VBO); glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW); glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO); glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW); glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0); glEnableVertexAttribArray(0); // note that this is allowed, the call to glVertexAttribPointer registered VBO as the vertex attribute's bound vertex buffer object so afterwards we can safely unbind glBindBuffer(GL_ARRAY_BUFFER, 0); // You can unbind the VAO afterwards so other VAO calls won't accidentally modify this VAO, but this rarely happens. Modifying other // VAOs requires a call to glBindVertexArray anyways so we generally don't unbind VAOs (nor VBOs) when it's not directly necessary. glBindVertexArray(0); // uncomment this call to draw in wireframe polygons. glPolygonMode(GL_FRONT_AND_BACK, GL_LINE); // render loop // ----------- while (!glfwWindowShouldClose(window)) { // input // ----- processInput(window); // render // ------ glClearColor(0.2f, 0.3f, 0.3f, 1.0f); glClear(GL_COLOR_BUFFER_BIT); // draw our first triangle glUseProgram(shaderProgram); glBindVertexArray(VAO); // seeing as we only have a single VAO there's no need to bind it every time, but we'll do so to keep things a bit more organized //glDrawArrays(GL_TRIANGLES, 0, 6); glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0); // glBindVertexArray(0); // no need to unbind it every time // glfw: swap buffers and poll IO events (keys pressed/released, mouse moved etc.) // ------------------------------------------------------------------------------- glfwSwapBuffers(window); glfwPollEvents(); } // optional: de-allocate all resources once they've outlived their purpose: // ------------------------------------------------------------------------ glDeleteVertexArrays(1, &amp;VAO); glDeleteBuffers(1, &amp;VBO); glDeleteProgram(shaderProgram); // glfw: terminate, clearing all previously allocated GLFW resources. // ------------------------------------------------------------------ glfwTerminate(); return 0; } // glfw: whenever the window size changed (by OS or user resize) this callback function executes // --------------------------------------------------------------------------------------------- void framebuffer_size_callback(GLFWwindow* window, int width, int height) { glViewport(0, 0, width, height); } // process all input: query GLFW whether relevant keys are pressed/released this frame and react accordingly // --------------------------------------------------------------------------------------------------------- void processInput(GLFWwindow* window) { // make sure the viewport matches the new window dimensions; note that width and // height will be significantly larger than specified on retina displays. if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS) glfwSetWindowShouldClose(window, true); } Source",
    "tags": "OpenGL memo",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/06/Hello-Triangle/"
  },{
    "title": "Hello window",
    "text": "#include &lt;glad/glad.h&gt; #include &lt;GLFW/glfw3.h&gt; #include &lt;iostream&gt; void framebuffer_size_callback(GLFWwindow* window, int width, int height); void processInput(GLFWwindow* window); // settings const unsigned int SCR_WIDTH = 800; const unsigned int SCR_HEIGHT = 600; int main(void) { // glfw: initialize and configure // ------------------------------ glfwInit(); glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3); glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3); glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE); #ifdef __APPLE__ glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); #endif // glfw window creation // -------------------- GLFWwindow* window = glfwCreateWindow(SCR_WIDTH, SCR_HEIGHT, \"LearnOpenGL\", NULL, NULL); if (window == NULL) { std::cout &lt;&lt; \"Failed to create GLFW window\" &lt;&lt; std::endl; glfwTerminate(); return -1; } glfwMakeContextCurrent(window); glfwSetFramebufferSizeCallback(window, framebuffer_size_callback); // glad: load all OpenGL function pointers // --------------------------------------- if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) { std::cout &lt;&lt; \"Failed to initialize GLAD\" &lt;&lt; std::endl; return -1; } // render loop // ----------- while (!glfwWindowShouldClose(window)) { // input // ----- processInput(window); // render // ------ glClearColor(0.2f, 0.3f, 0.3f, 1.0f); glClear(GL_COLOR_BUFFER_BIT); // glfw: swap buffers and poll IO events (keys pressed/released, mouse moved etc.) // ------------------------------------------------------------------------------- glfwSwapBuffers(window); glfwPollEvents(); } // glfw: terminate, clearing all previously allocated GLFW resources. // ------------------------------------------------------------------ glfwTerminate(); return 0; } // glfw: whenever the window size changed (by OS or user resize) this callback function executes // --------------------------------------------------------------------------------------------- void framebuffer_size_callback(GLFWwindow* window, int width, int height) { glViewport(0, 0, width, height); } // process all input: query GLFW whether relevant keys are pressed/released this frame and react accordingly // --------------------------------------------------------------------------------------------------------- void processInput(GLFWwindow* window) { // make sure the viewport matches the new window dimensions; note that width and // height will be significantly larger than specified on retina displays. if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS) glfwSetWindowShouldClose(window, true); } Source",
    "tags": "OpenGL memo",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/05/Hello-Window/"
  },{
    "title": "Creating a window",
    "text": "Source",
    "tags": "OpenGL memo opengl",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/04/Creating-a-window/"
  },{
    "title": "Opengl",
    "text": "Source",
    "tags": "OpenGL memo opengl",
    "url": "https://jeheecheon.github.io/memo/opengl/2021/05/03/OpenGL/"
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
