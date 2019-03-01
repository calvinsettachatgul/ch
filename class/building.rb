class Building
    # attr_reader :type, :color
    # attr_writer :type, :color
    attr_accessor :type, :color, :size, :rooms
    
    
    def initialize(type, color)
        @rooms = []
        @type = type
        @color = color
    end
    
    def repaint(wing, floor)
    end
    
    def open_building
        puts 'we are open for business'
    end
    

  
    # getter methods return the variable (get it)
    # def type
    #     @type
    # end
    # def color
    #     @color
    # end
    
    # setter methods
    # change variable (set it) these can be added by adding attr_writer
    # def type=(new_type)
    #     @type = new_type
    # end
    # def color=(new_color)
    #     @color = new_color
    # end
    
    
end
restaurant = Building.new("restaurant", "black")
hotel = Building.new("hotel", "black")
house = Building.new("home", "black")
# p restaurant
# restaurant.open_building
# puts restaurant.color   
# puts 'changing color to blue'
# restaurant.color = 'blue'
# puts restaurant.color
# puts restaurant.type


=begin
use the building class to hold rooms
rooms will have some attributes
people (array of people)
floor (which floor the room is on)
room number
number of doors
number of windows
airconditioner?
=end

class Room
    
  attr_accessor :people, :floor, :room_number, :door_number, :window_number, :ac

  def initialize(people,floor,room_number, number_of_doors, window_number, ac)
    @people = []
    @floor = floor
    @room_number = room_number
    @number_of_doors =  number_of_doors
    @window_number = window_number 
    @ac = ac
  end
  
  def come_in
    puts "Come on in!"
  end

end

bedroom = Room.new(2, 4, 52, 2, 2, "none")
bedroom.people << "mr jones"
bedroom.come_in
# p bedroom
bedroom.people << 'mr henry'
# p bedroom
# p bedroom.ac
# p bedroom

house.rooms << bedroom

p house