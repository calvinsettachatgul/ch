arr = [1,2,3,4,1,2,3,4,6,7,8, 6, 7,8, 6,7,8]

def countFrequency(arr)
    freqHash = Hash.new(0)
    arr.each do | num |
        freqHash[num]+= 1
    end
    freqHash
end

p countFrequency(arr)