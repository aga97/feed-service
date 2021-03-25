# Feed-Service

## **개요**
페이스북의 Feed를 본따 만든 서비스
***
### 문제 해결 전략
* sign 화면에서 Id를 입력받아 main 화면으로 넘어갑니다.   
* 인증은 따로 하지 않으며, sessionStorage에 저장해 피드의 작성자, 또는 댓글의 작성자로 사용합니다.      
* api를 통해 데이터를 가져오면 <code>BehaviorSubject</code>를 사용해, 필요한 컴포넌트에서 필요한 상태를 구독하여 사용합니다.
***
### **실행 방법**
1. docker를 사용   
* 주의 사항  
    * docker가 설치되어 있어야합니다.
    * 80번 포트를 사용합니다.
> 1. docker-compose 파일을 받거나, git clone 으로 repository 복사 
>
> 2. 터미널에서 /feed 폴더로 이동해 <code>docker-compose up </code> 입력
> 3. localhost or localhost:80 으로 접속 
2. 도커를 사용하지 않는 경우   
* 주의 사항 :    
    *  angular-cli가 설치되어 있어야 합니다. (ng 명령어)   
    * 기본적으로 아래와 같이 포트를 사용합니다.  
    프론트 : 4200   
    백엔드 : 3000   
    DB : 27017  
> 1. git clone으로 repository 복사
>
> 2. <code>/feed</code> 폴더로 이동해 
>       <pre>npm install</pre> 
> 3.   <pre>ng serve</pre> 
>       또는    
>       <pre>ng serve --port <포트번호></pre>    
> 4. <code>/feed-back</code> 폴더로 이동해서
>       <pre>npm install</pre> 
> 5. <pre>npm run start</pre>
>       포트를 변경하고 싶다면
><code>/feed-back/src/main.ts</code> 에서 <code>app.listion(3000)</code>에서 포트 번호를 변경 합니다.
> 6. localhost:4200 또는 설정한 포트로 접속
***
### **동작 화면**

 이미지 업로드 후 작성 요망

