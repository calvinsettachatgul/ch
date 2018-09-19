require 'sinatra'

get '/index' do
    erb :index
end

get '/articles' do
    @articles = ['article1', 'article2', 'article3']
    puts @articles
    erb :index
end