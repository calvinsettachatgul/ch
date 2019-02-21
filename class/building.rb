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

# class Restaurant < Building
# end