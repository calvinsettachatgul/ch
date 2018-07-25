class Person

  def initialize(first, last, age, eyecolor)
    @first = first
    @last = last
    @age = age
    @eyecolor = eyecolor
  end

  def to_s
    "#{@first} #{@last} #{@age} #{@eyecolor}"
  end

end

henry = Person.new("Henry", "Vega", 31, "Brown")

puts "Hello #{henry}"
