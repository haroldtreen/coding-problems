class TowersSolver
	TOWER_NAMES = ['@tower_one', '@tower_two', '@tower_three']

	def initialize(values)
		@tower_one = values.sort
		@tower_two = []
		@tower_three = []
	end

	def solve
		final_state = @tower_one.reverse

		until finished  do
			TOWER_NAMES.each do |current_tower|
				destination_tower = best_move(current_tower)
				
				move(current_tower, destination_tower) unless destination_tower.nil?

				puts "#{@tower_one.inspect}, #{@tower_two.inspect}, #{@tower_three.inspect}"
				return if finished
			end
		end
	end

	def best_move(current_tower)
		top_disk = instance_variable_get(current_tower).last
		return nil if top_disk.nil?
		other_towers = TOWER_NAMES - [current_tower]

		other_towers.each do |tower|
			other_tower = instance_variable_get(tower)
			return tower if other_tower.max.nil? || other_tower.max < top_disk
		end
		nil
	end

	def move(source, destination)
		destination_instance_var = instance_variable_get(destination)
		source_instance_var = instance_variable_get(source)
		destination_instance_var.push(source_instance_var.delete_at(0))
	end

	private

	def finished
		total_size = @tower_one.size + @tower_two.size + @tower_three.size
		TOWER_NAMES.each do |tower|
			tower_instance = instance_variable_get(tower)
			is_full = (tower_instance.size == total_size)
			is_sorted = (tower_instance.sort.reverse == tower_instance)
			return true if is_full && is_sorted
		end
		false
	end
end

ts = TowersSolver.new([1,2,3,4,5,6,7])
ts.solve