def loop_recursive(arr, ind = 0)
    # base case when weve reached the end
    if ( ind > (arr.length - 1))
        puts 'made it to the base case'
        puts "this is arr[ind] #{arr[ind]}"
        puts arr[ind]
        return
    end
    # do something in the recursive case
    puts arr[ind]
    # recursive case calling the function again and moving towards the base case
    ind = ind + 1
    loop_recursive(arr, ind)
end

# loop_recursive([1,2,3])

# [1,2,3].each do |ele|
#     puts ele
# end

arr = [1,2,3]
for i in (0..(arr.length - 1)) do
    puts arr[i]
end

# javascript
# for( let i = 0; i < arr.length; i++) {
# }