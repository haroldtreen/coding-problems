def getNumberOfPrimes(num)
	numPrimes = 0
	if num > 2
		numPrimes += 2
	elsif num > 1
		numPrimes += 1
	end

	(3..num-1).step(2).each do |candidate|
		isPrime = true
		isPrime = false if candidate % 2 == 0
		(3..Math.sqrt(candidate)).step(2).each do |divisor|
			isPrime = false if candidate % divisor == 0
			break unless isPrime
		end
		numPrimes += 1 if isPrime 
	end
	numPrimes
end

max = gets.to_i
puts getNumberOfPrimes(max)