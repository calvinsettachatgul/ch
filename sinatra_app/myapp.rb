require 'sinatra'
require 'json'

get '/' do
  erb :index
end

get '/json' do
  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json
end

get '/helloworld' do
  "Some string"
end