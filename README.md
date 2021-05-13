#START PROJECT
- clone or download the file 
- open terminal in folder
- npm install
- npm start
- you are good to go

#ABOUT
- this is the project that enables the user to search for any github user. When you search for the desired user you will get some information. There will be image of the user, name, email and link to the github profile. Also, repositories will be listed. There is buuton that enables you to sort the repository ascending or descending way. 

#TECHNOLOGIES 
I fetched the data using GraphQL and Apollo Client. The code is written in ReactJS (unfortunatelly not Typescript)

#FIRST TASK 
First task was to fetch the data. I used GraphQL because it was a requirement. For the client I have chosen Apollo client. The reason for that was that I got an impressionaon it is easy to work with it. That was the first time I used GraphQL and Apollo client. It is very easy and I liked it. 
I got the information about the user and repositories.

#SECOND TASK
Second task was to sort repositories. First, I went with approach that I will fect the data, sort them with some method and change the state and then show the sorted data. Then, I realized that I can go with easier approach. I will fetch the sorted data and I did it. It was much easier. 

#THIRD TASK
caching data is done with Apollo client in index.js on line 27. I used all advantages of using the Apollo client that is why I decided go on this way. 

I am very sorry and aware that I had to do the task with Typescript. However, my typescript code was not as good as this one and the app was not entirely functional that is why I publieshed solutioin with JS. 

#ARCHITECTURE
regarding architecture of the project. I  should have done the logic part of the code in App.js component instead of Test.js component. And of course I should have rename Test.js component to some another name for example User.js so it is more descriptional for its functionality. 
Also, I should take more time and do entirely responsive web application, but I did not focus on styling that much. I focused more on functionalities.
