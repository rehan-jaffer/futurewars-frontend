require 'pp'

`ls`.split.select { |file| file.match(/png$/) }.each do |file|
  new_name = file.gsub(/png/, "svg")
  puts `convert #{file} #{new_name}`
end
