defmodule Tasktracker.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completed, :boolean, default: false
    field :description, :string
    field :time, :integer, default: 0
    field :title, :string
    belongs_to :user, Tasktracker.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :completed, :time, :user_id])
    |> validate_required([:title, :description, :completed, :user_id])
  end
end
