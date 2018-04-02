# Tasktracker

Design Explanation:
A user can login to the application or a new user can Register to gain access to the TaskTracker application.

I have email-id validations, where you can only enter an email id in the correct email format. Email ids need to be unique, User name can be same. And hence I am letting the user login to the application through his/her unique email-id.

  * To register enter your email id and password in the Nav bar, and click "register".
  * Use same email id and password to log in.
  * Or, you can use sample user with email id "alice@example.com" and password "Alice123" (recorded in seeds). 
  * No user can view or assign tasks without login.
  * User can assign tasks to other users but not themselves.
  * First page shows the task form.
  * "All users" link, will update the current page with list of users and a link to their tasks.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).