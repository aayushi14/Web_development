defmodule TasktrackerWeb.PageController do
  use TasktrackerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def log(conn, _params) do
    tasks = Tasktracker.Jobs.list_tasks()
    changeset = Tasktracker.Jobs.change_task(%Tasktracker.Jobs.Task{})
    render conn, "log.html", tasks: tasks, changeset: changeset
  end
end
