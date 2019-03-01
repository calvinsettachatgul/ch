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