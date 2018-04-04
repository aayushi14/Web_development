# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasktracker.Repo.insert!(%Tasktracker.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias Tasktracker.Repo
  alias Tasktracker.Users.User
  alias Tasktracker.Tasks.Task

  def run do
    pa = Comeonin.Argon2.hashpwsalt("alice123");
    pb = Comeonin.Argon2.hashpwsalt("bob123");
    pc = Comeonin.Argon2.hashpwsalt("carol123");
    pd = Comeonin.Argon2.hashpwsalt("dave123");

    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "Alice", email: "alice@example.com", password_hash: pa })
    b = Repo.insert!(%User{ name: "Bob", email: "bob@example.com", password_hash: pb })
    c = Repo.insert!(%User{ name: "Carol", email: "carol@example.com", password_hash: pc })
    d = Repo.insert!(%User{ name: "Dave", email: "dave@example.com", password_hash: pd })

    Repo.delete_all(Task)
    Repo.insert!(%Task{ title: "Learn Java", description: "Solve problems online", completed: false, time: 0, assignedTo: "Alice", user_id: a.id })
    Repo.insert!(%Task{ title: "Learn py", description: "Take online course", completed: false, time: 0, assignedTo: "Bob", user_id: a.id })
    Repo.insert!(%Task{ title: "Learn Racket", description: "Solve problems online", completed: true, time: 60, assignedTo: "Bob", user_id: a.id })
    Repo.insert!(%Task{ title: "Learn react", description: "Complete assignments", completed: true, time: 120, assignedTo: "Carol", user_id: a.id })
    Repo.insert!(%Task{ title: "Learn Elixir", description: "Practice problems" , completed: false, time: 0, assignedTo: "Dave", user_id: b.id })
  end
end

Seeds.run
