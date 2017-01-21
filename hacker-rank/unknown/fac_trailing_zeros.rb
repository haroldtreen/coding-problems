def countTrailingZeros(num)
	string_num = num.to_s
	zeros_count = 0

	return 0 if string_num.length < 1

	loop do
		last_char = string_num[-1]
		string_num = string_num.chop
		zeros_count += 1 if last_char == '0'
		break if last_char != '0'
	end

	zeros_count
end

def factorial(n)
	if n == 0
		return 1
	else
		return n*factorial(n-1)
	end
end

num = gets.to_i
fac = factorial(num)
puts countTrailingZeros(fac)