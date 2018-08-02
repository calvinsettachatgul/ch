require 'sinatra'
require 'json'

get '/' do
  "Hello World!"
end

get '/later' do
  "Later!"
end

get '/index' do
  erb :index
end