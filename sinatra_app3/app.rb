require 'sinatra'
require 'json'

get '/' do
    "Hello World"
end

get '/index' do
    erb :index
end