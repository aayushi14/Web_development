# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tasktracker,
  ecto_repos: [Tasktracker.Repo]

# Configures the endpoint
config :tasktracker, TasktrackerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "H0IeZV5mZTyRBf/CUw7lgWfWYvYCmWzoQm6tzV1aJ6V9NYpc0b8YTNRTZJWtd7gK",
  render_errors: [view: TasktrackerWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tasktracker.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Guardian configuration
  config :guardian, Guardian,
    allowed_algos: ["HS512"], # optional
    verify_module: Guardian.JWT,  # optional
    issuer: "Tasktracker",
    ttl: { 30, :days },
    allowed_drift: 2000,
    verify_issuer: true, # optional
    secret_key: "zqh+2ldyKk3pwGaqEsntAXEqQBUXbwh6OURXadZ60U9oZvI2B2bCkyVR8LCePXKS",
    serializer: MyAppName.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
