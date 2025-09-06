local wezterm = require 'wezterm'

local config = wezterm.config_builder()

config.window_decorations = 'RESIZE'

config.font = wezterm.font("JetBrainsMono Nerd Font")

config.font_size = 9.0

config.color_scheme = 'Catppuccin Mocha'

config.default_prog = {"pwsh.exe"}

config.hide_tab_bar_if_only_one_tab = true
config.default_cursor_style = "SteadyBar"

config.colors = {
  background = "#14151b",
}

config.keys = {
  {key="|", mods="CTRL|SHIFT", action=wezterm.action{SplitHorizontal={}}},
  {key="D", mods="CTRL|SHIFT", action=wezterm.action{SplitVertical={}}},
}

config.mouse_bindings = {
  {
    event = {Up = {streak = 1, button = "Left"}},
    mods = "CTRL",
    action = wezterm.action.OpenLinkAtMouseCursor,
  },
}

table.insert(config.keys, {
  key = "B",
  mods = "CTRL|SHIFT",
  action = wezterm.action.SplitPane{
    direction = "Right",
    command = {
      args = { "C:\\Program Files\\Git\\git-bash.exe", "--login", "-i" }
    }
  }
})


wezterm.on("format-tab-title", function(tab, tabs, panes, config, hover, max_width)
  local title = tab.active_pane.foreground_process_name or "Tab"
  title = string.gsub(title, "(.*[/\\])", "")
  return {
    { Text = " " .. title .. " " },
  }
end)

return config
