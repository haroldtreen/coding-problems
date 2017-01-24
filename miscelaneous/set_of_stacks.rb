class SetOfStacks

	MAX_STACK_SIZE = 10

	@stacks

	def initialize
		@stacks = []
		@stacks.push([])
	end

	def push(value)
		stack = get_unfilled_stack
		stack.push(value)
	end

	def pop
		pop_at(@stacks.size - 1)
	end

	def pop_at(index)
		if stack_exists?(index)
			return pop_value_at(index)
		else
			return nil
		end
	end

	private 

	def get_unfilled_stack
		if @stacks.last.size >= MAX_STACK_SIZE
			@stacks.push([])
		end
		@stacks.last
	end

	def pop_value_at(index)
		stack = @stacks[index]
		value = stack.pop
		@stacks.delete_at(index) if stack.empty? && !stacks_empty?
		value
	end

	def stack_exists?(index)
		!@stacks[index].nil?
	end

	def stacks_empty?
		@stacks.size == 1 && @stacks.last.empty?
	end
end

sos = SetOfStacks.new()

15.times do |i|
	sos.push(i)
end

puts sos.inspect

16.times do 
	puts sos.pop
end

puts sos.inspect

25.times do |i|
	sos.push(i)
end

puts sos.inspect

3.times do |i|
	sos.pop_at(i)
	puts sos.inspect
end

25.times do
	puts sos.pop
end