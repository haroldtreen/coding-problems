def is_fib?(x)
	is_perfect_square?(5 * x**2 + 4) || is_perfect_square?(5* x**2 - 4)
end

def is_perfect_square?(x)
	y = Math.sqrt(x).floor
	x == y*y
end

n = gets.to_i

n.times do
	if is_fib?(gets.to_i)
		puts "IsFibo"
	else
		puts "IsNotFibo"
	end
end