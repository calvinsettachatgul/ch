require_relative "../../app/controllers/application_controller.rb"

describe ApplicationController do
  describe '#print_controller' do
    it 'should return the right string' do
      myapp_controller = ApplicationController.new()
      
      expect(myapp_controller.print_controller()).to eq("This is ApplicationController")
    end
  end
end