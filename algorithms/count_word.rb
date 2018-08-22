=begin
 this method will count the occurrences of a particular word
 input
     long string of words that is separated by spaces
     target word
 output
    integer number of words that occur in the string
=end
def count_word(search, target)
  
  # split the search string by space to get an array
  search_arr = search.split(" ")
  # initialize a counter to 0 
  occur = 0 
  # iterate and if the word === target then increment the counter
  search_arr.each do |word| 
    if(word == target)
      occur = occur + 1
    end
  end
  # return the counter
  
  occur
end

search_string = "calvin calvin man dog person calvin"

puts (count_word(search_string, "calvin") == 3)
puts count_word(search_string, "calvin")