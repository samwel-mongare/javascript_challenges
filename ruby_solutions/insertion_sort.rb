def insertion_sort(array)
  for i in 1...(array.length)
      j = i
      while j > 0
          if array[j-1] > array[j]
              current = array[j]
              array[j] = array[j-1]
              array[j-1] = array[j]
              puts array.join(' ')
              array[j-1] = current
          else
              break
          end
          j = j - 1
      end
  end
  puts array.join(' ')
end

insertion_sort([1, 3, 2])
# => 1 3 3
#    1 2 3

puts '-' * 20

insertion_sort([1, 4, 6, 9, 3])
# => 1 4 6 9 9
#    1 4 6 6 9
#    1 4 4 6 9
#    1 3 4 6 9
