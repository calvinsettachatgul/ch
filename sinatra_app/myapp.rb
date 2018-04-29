require 'sinatra'

get '/' do
  'Hello World!'
  erb :index
end

get '/route1' do 
  # this will return json data
  content_type :json
  { key1: 'value1', key2: 'value2' }.to_json
end
