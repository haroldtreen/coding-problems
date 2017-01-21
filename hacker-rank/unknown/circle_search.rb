def num_lattice_points(radius)
	count = 0
  max_value = (radius * Math.sin(Math::PI/4)).round

	for i in 1..radius-1
        for j in 1..radius-1
			count += 1 if (j*j + i*i == radius)
		end
	end

	return 4 + count*4
end

test_case_count = gets.to_i

test_case_count.times do
	radius, station_count = gets.split(' ').map(&:to_i)

	if station_count >= num_lattice_points(radius)
  	     puts 'possible'
	else
		puts 'impossible'
	end
end

