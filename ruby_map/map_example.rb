# https://ruby-doc.org/core-2.2.0/Array.html#method-i-map
num = [1,2,3,4,5]

# I want to return an array that doubles each element of the input array

def double_array(arr)
  doubled_arr = arr.map do | element| 
    element *2 
  end
  doubled_arr
end

# puts(double_array(num) == [2,4,6,8,10])

def triple_array(arr)
    tripled_array = arr.map do |element|
        element * 3
    end
  tripled_array
end

puts(triple_array(num) == [3,6,9,12,15])