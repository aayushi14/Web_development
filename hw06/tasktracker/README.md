## Working of TaskTracker

A user can login to the application or a new user can Register to gain access to the TaskTracker application.

I have email-id validations, where you can only enter an email id in the correct email format. 
Email ids need to be unique, User name can be same. 
And hence I am letting the user login to the application through his/her unique email-id. 

A user with the name **admin**, **Admin**, **ADMIN**, etc (not case sensitive) has view and modify access for **Tasks** and **Users**. 
All other users can only view the Tasks but cannot view the Users that have access to the application.

An **admin** user cannot delete himself, when he tries to delete himself, a flash error occurs saying, request another admin to delete yourself. 

The Tasks are listed in 2 tables:
1. Tasks assigned to logged in User: List tasks assigned to currently logged in user.
2. All assigned tasks: Lists of tasks

The status of the task can be checked if its complete and unchecked if incomplete.

The time taken field has 2 drop downs for hour and minutes.
You need to select 00, 15, 30 or 45 from the minutes drop down to entry time taken, otherwise it will show an error and you cannot proceed to create or edit that task.