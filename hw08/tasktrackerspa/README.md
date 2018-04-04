# Tasktracker SPA

Design Explanation:
A user can login to the application or a new user can Register to gain access to the TaskTracker application.

  * To register Click 'New User' link in Nav bar. In the form below enter your name, email id and password and click "Register".
  * Use same email id and password to log in.
  * Or, you can use sample user with email id "alice@example.com" and password "alice123" (recorded in seeds). 
  * No user can view or assign tasks without login.
  * User can assign tasks to other users and themselves.
  * 'Feed' shows all the tasks, 'Create Task' to create a task, 'All Users' list all users and tasks created by them.
  * By default the logged in user is the 'Assigned By' and this field is hence kept disabled. 
  * Click on 'Logout' button to logout from the application. 

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).