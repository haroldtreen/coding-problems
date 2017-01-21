width = gets.chomp
height = gets.chomp
rows = []

width.times do
	rows.push gets.chomp.split ' '
end

def main matrix
	matrix.each_with_index do |row, row_i|
		row.each_with_index do |x, i|
			if x == '1'
				get_region row_i i matrix
			end
		end
	end
end

def get_region x, y, matrix
	get_region x y matrix
	matrix[row_i][i] = '0'

end

def get_neighbors x, y, matrix
	[x-1..x+1].each_with_index do |row, x_n|
		[y-1..y+1].each_with_index do |col, y_n|
			if x_n >= 0 && x_n < matrix.length

		end
	end
end

main rows
