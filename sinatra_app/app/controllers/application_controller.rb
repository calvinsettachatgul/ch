require 'sinatra'

class ApplicationController < Sinatra::Base
# class ApplicationController
  def print_controller
    return "This is ApplicationController"
  end
end