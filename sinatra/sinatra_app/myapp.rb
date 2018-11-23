require 'sinatra'
require 'json'
require 'sinatra/reloader' if developemnt?

get '/' do
  erb :index
end

get '/json' do
  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json
end

get '/helloworld' do
  content_type :json
  { :key1 => 'Hello', :key2 => 'World!' }.to_json
end

get '/helloworld2' do
  content_type :json
  { :key1 => 'Another', :key2 => 'Hello World!' }.to_json
end
