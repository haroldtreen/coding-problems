def max_toys(available_money, price_arr)
	price_arr = price_arr.sort()

	index = 0
	while available_money > 0 do
		available_money -=  price_arr[index]
		index += 1
	end

	index - 1
end

available_money = gets.to_i
price_arr = gets.split(' ').map{ |item| item.to_i }

puts max_toys(available_money, price_arr)
