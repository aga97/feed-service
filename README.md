# Feed-Service

페이스북의 Feed를 본따 만든 서비스
***
## 문제 해결 전략
* angularjs로 프론트, nestjs로 백엔드를 구성하고 db로 mongodb를 사용하였습니다.
* 로그인시 인증은 따로 하지 않으며, sessionStorage에 저장해 피드의 작성자, 또는 댓글의 작성자로 사용합니다.      
* api를 통해 데이터를 가져오면 <code>BehaviorSubject</code>를 사용해, 필요한 컴포넌트에서 필요한 상태를 구독하여 사용합니다.
* service에 함수를 구현해 필요한 함수를 가져다 사용하거나 컴포넌트를 사용 할 수 있습니다.
* ngfor의 경우 데이터가 달라지면 구성요소를 전부 다시 렌더링 하기 때문에 <code>trackBy</code>로 필요한 부분만 다시 렌더링 하도록 하였습니다.
***
## **실행 방법**
1. docker를 사용하는 경우   
* 주의 사항  
    * docker가 설치되어 있어야합니다.
    * 80번 포트를 사용합니다.
    
    1. docker-compose 파일을 받거나, git clone 으로 repository를 복사합니다.

    2. 터미널에서 루트 폴더로 이동해 아래 명령어를 입력합니다.
        <pre>docker-compose up </pre>

    3. 브라우저에서 localhost or localhost:80 으로 접속합니다. 

2. 도커를 사용하지 않는 경우   
* 주의 사항 :    
    * angular-cli가 설치되어 있어야 합니다. (ng 명령어)   
    * mongoDB가 설치되어 있어야 합니다.
    * 기본적으로 아래와 같이 포트를 사용합니다.  
    프론트 : 4200   
    백엔드 : 3000   
    DB : 27017  

    1. git clone으로 repository를 복사합니다.

    2. 터미널에서 <code>/feed</code> 폴더로 이동후 아래 명령어를 입력합니다.
       <pre>npm install</pre> 
    3. <pre>ng serve</pre> 
       또는    
       <pre>ng serve --port <포트번호></pre>    
    4. <code>/feed-back</code> 폴더로 이동해서 아래 명령어를 입력합니다.
       <pre>npm install</pre> 
    5. <pre>npm run start</pre>
       포트를 변경하고 싶다면
    <code>/feed-back/src/main.ts</code> 에서 <code>app.listion(3000)</code>에서 포트 번호를 변경 합니다.
    6. localhost:4200 또는 설정한 포트로 접속합니다.
***
## **동작 화면**
<center>

로그인화면. 아이디를 입력해 로그인할 수 있습니다.

![signIn](https://user-images.githubusercontent.com/25195582/112740746-8d2a9800-8fba-11eb-8777-77a6a6ed7525.png)

로그인 후 화면.

![main1](https://user-images.githubusercontent.com/25195582/112740747-8ef45b80-8fba-11eb-8210-bfbe2540ecdf.png)

우측 상단에 ID와 새로고침, 로그아웃 버튼이 있습니다.

![main6](https://user-images.githubusercontent.com/25195582/112740753-9451a600-8fba-11eb-96e8-6fbe7d6182e9.png)


피드 작성 화면. 제목과 내용을 입력해 피드를 작성합니다.

![main2](https://user-images.githubusercontent.com/25195582/112740913-b0097c00-8fbb-11eb-8dbb-c2238489619a.png)

피드 작성후 화면. 피드의 내용과 댓글을 확인 할 수 있습니다.

![main3](https://user-images.githubusercontent.com/25195582/112740748-90258880-8fba-11eb-969c-31b041386850.png)

댓글 창을 눌렀을 때 화면. 댓글을 작성할 수 있습니다.

![main4](https://user-images.githubusercontent.com/25195582/112740750-9287e280-8fba-11eb-8178-98b467d2fb59.png)

댓글 작성 후 화면. 작성한 사람의 ID와 내용, 일시가 표시됩니다.

![main5](https://user-images.githubusercontent.com/25195582/112740752-93207900-8fba-11eb-8a89-b9f89ecd3705.png)

</center>



