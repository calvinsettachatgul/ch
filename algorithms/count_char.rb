# takes a search string  and target as input
# returns the number of occurrences of the target input that is in search 
def count_char(search, target)
    occurs = 0
    search_array = search.split("")
    search_array.each do |char|
        if char == target
            occurs = occurs+1
        end
    end
    occurs
end

search_test = 'this is my fancy string'
target_test = 't'

puts count_char(search_test, target_test)
search_test = 'this is my fancy string'
target_test = 'n'

puts count_char(search_test, target_test)

search_test = 'this is my fancy string'
target_test = 'g'

puts count_char(search_test, target_test)