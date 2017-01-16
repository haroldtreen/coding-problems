# Wilson's theorem states that (X-1) modulo X = X-1 only when X is prime 

def factorialRemainderCount(n)
	count = 0

	(1..n).each do |candidate|
		count += 1 if is_prime?(candidate) 
	end

	return count
end

def is_prime?(number)
	return true if number == 1 || number == 2
	return false if number % 2 == 0

	divisor = 3
	loop do
		if divisor > Math.sqrt(number)
			return true
		elsif number % divisor == 0
			return false
		else
			divisor += 2
		end
	end
end

n = gets.to_i
puts factorialRemainderCount(n)