def findMissing(array)
	spacing = findSpacing(array)
	missing = array[0] + spacing

	(1..array.length).each do |i|
		if array[i] - array[i-1] != spacing
			missing = array[i-1] + spacing
			break
		end
	end

	puts missing
end

def findSpacing(array)
	first_diff = array[1] - array[0]
	second_diff = array[1] - array[2]

	return first_diff == array[3] - array[2] ? first_diff : second_diff
end

numElement = gets.to_i
array = gets.chomp.split(' ').map { |el| el.to_i }

findMissing(array)