require 'sinatra'
require 'json'

get '/' do
  puts "this is my variable"
  "Hello World!"
end

get '/later' do
  "Later!"
end

get '/index' do
  erb :index
end