def find_min_unfairness(k, array)
	array = array.sort

	min_unfairness = fairness(array)
	for i in 0..array.size - k
		new_fairness = fairness(array[i..i+k-1])
		min_unfairness = new_fairness if new_fairness < min_unfairness
	end

	min_unfairness
end

def fairness(array)
	array.last - array.first
end



# Code required to read in the values of k,n and candies.
n = gets.to_i
k = gets.to_i
candy = Array.new(n)
for i in 0..n-1
      candy[i] = gets.to_i
end

puts find_min_unfairness(k, candy)