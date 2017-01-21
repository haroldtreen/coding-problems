# In-place Quicksort
# https://www.hackerrank.com/challenges/quicksort3

def quicksort(array, start_index, end_index)
	wall = start_index
	pivot = end_index
	swapped = false

	(start_index..end_index-1).each do |position|
		if array[position] < array[pivot]
			wall += 1
			if array[position] > array[wall] 
				array[wall], array[position] = array[position], array[wall]
				swapped = true
			end
		end
	end

	array[wall], array[pivot] = array[pivot], array[wall]
	
  puts array.join(' ') if swapped
	quicksort(array, start_index, wall - 1) if start_index < wall
	quicksort(array, wall + 1, end_index) if end_index > wall
end

def partition(array, left, right)
	pivot = right
	right = right - 1

	while(left <= right)
		while(array[left] < array[pivot])
			left += 1
		end
		while (array[right] > array[pivot])
			right -= 1
		end

		if(left <= right)
			array[left] , array[right] = array[right], array[left]
			left += 1
			right -= 1
		end
	end


end

# num_elements = gets.to_i
elements = gets.split(' ')
elements = elements.map{ |el| el.to_i }

quicksort(elements, 0, elements.length - 1)
puts elements.join(' ')


