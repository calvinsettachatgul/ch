arr = [1,2,3,4,1,2,3,4,6,7,8, 6, 7,8, 6,7,8]

def count_frequency(arr)
    freq_hash = Hash.new(0)
    arr.each do | num |
        freq_hash[num]+= 1
    end
    freq_hash
end

# p count_frequency(arr)

def count_frequency_recursive(arr, ind = 0, freq_hash = Hash.new(0))
    
    # instantiate the frequency hash
    
    # base case when weve reached the end
    if ( ind > (arr.length - 1))
        # return the frequency hash
        return freq_hash
    end
    
    # increment the value of frequency
    # do something in the recursive case
    freq_hash[arr[ind]] += 1
    # recursive case calling the function again and moving towards the base case
    ind = ind + 1
    count_frequency_recursive(arr, ind, freq_hash)
end

# {1=>2, 2=>2, 3=>2, 4=>2, 6=>3, 7=>3, 8=>3}

p count_frequency_recursive(arr)