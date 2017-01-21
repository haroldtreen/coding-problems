def construct_depth_map
	size = gets.to_i
	depth_map = Array.new(size)

	size.times do |i|
		depth_map[i] = gets.split('').map(&:to_i)[0..size]
	end

	depth_map
end

def mark_cavities(depth_map)
	rows, cols  = [], []

	depth_map.each_with_index do |row, j|
		row.each_with_index do |col, k|
			if is_cavity?(depth_map, j, k)
				rows.push(j)
				cols.push(k)
			end
		end
	end

	rows.each_with_index{ |row, i| depth_map[row][cols[i]] = 'X' }

	depth_map
end

def is_cavity?(map, row, col)
	if row == map.size - 1 || col == map.size - 1
		return false
	elsif row == 0 || col == 0
		return false
	else
		return local_min?(map, row, col)
	end
end

def local_min?(map, row, col)
	val = map[row][col]
	horizontal_min = map[row][col+1] < val && map[row][col-1] < val
	vertical_min = map[row+1][col] < val && map[row-1][col] < val

	horizontal_min && vertical_min
end

def print_map(map)
	map.each do |row|
		puts row.join('')
	end
end

print_map(mark_cavities(construct_depth_map))