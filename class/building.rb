class Building
    # attr_reader :type, :color
    # attr_writer :type, :color
    attr_accessor :type, :color
    
    
    def initialize(type, color)
        @type = type
        @color = color
    end
    
    def repaint(wing, floor)
    end
    
    def open
        puts 'we are open for business'
    end
    
    def come_in
      puts "Come on in!"
    end
  
    def size
      @size
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
p restaurant
restaurant.open
puts restaurant.color   
puts 'changing color to blue'
restaurant.color = 'blue'
puts restaurant.color
puts restaurant.type


class Building
  attr_reader :size, :color
  attr_writer :size, :color

  def initialize(size, color)
    @size = size
    @color = color
  end

  def come_in
    puts "Come on in!"
  end

  def size
    @size
  end

  def color
    @color
  end

end

class Room < Building

  def initialize(people,floor,room_number, number_of_doors, window_number, ac)
    @people = people
    @floor = floor
    @room_number = room_number
    @number_of_doors =  number_of_doors
    @window_number = window_number 
    @ac = ac
  end

  def people=(new_people)
    @people = new_people
  end

  def floor
    @floor
  end

  def room_number
    @room_number
  end

  def number_of_doors
    @number_of_doors
  end

  def window_number
    @window_number
  end

  def ac
    @ac
  end

end

bedroom = Room.new(2, 4, 52, 2, 2, "none")
bedroom.come_in
p bedroom
bedroom.people = 1
p bedroom
p bedroom.ac
p bedroom