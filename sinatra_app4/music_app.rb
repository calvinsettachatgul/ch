require 'sinatra'

get '/' do
    puts "MuSick"
    erb :index
end

get '/shows' do
    @shows = ["Nine Inch Nails", "Cannibal Corpse", "Jamiroquai", "Burial Invocation", "Beyonce"]
    erb :shows
end