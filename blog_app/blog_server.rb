require 'sinatra'
require 'json'
require 'pp'

get '/index' do
    erb :index
end

get '/articles' do
    app_data = get_app_data
    @articles = ['article1', 'article2', 'article3']
    @users = app_data['data']['users']
    puts @articles
    erb :index
end

def get_app_data
    data_file = File.read('./data.json')
   data = JSON.parse(data_file)
   pp data
end